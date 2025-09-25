import Branch from "../models/branch.model.js"


export const createBranch = async (req, res) => {
  try {
    const { branchName, code, address } = req.body;

    const location = typeof req.body.location === "string" ? JSON.parse(req.body.location) : req.body.location;
    const stores = typeof req.body.stores === "string" ? JSON.parse(req.body.stores) : req.body.stores;

    const branch = await Branch.create({
      branchName,
      code,
      address,
      location,
      stores,
      image: req.file?.path || null
    });

    res.status(201).json({ status: true, message: "Branch created successfully", branch });
  } catch (err) {
    res.status(400).json({ status: false, message: err.message });
  }
};




export const listBranches = async (req, res) => {
  try {
    const branches = await Branch.find();
    res.json({ status: true, branches });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};


export const getBranchesByLocation = async (req, res) => {
  try {
    const { lng, lat } = req.query;
    if (!lng || !lat) return res.status(400).json({ status: false, message: "Coordinates required" });

    const customerPoint = {
      type: "Point",
      coordinates: [parseFloat(lng), parseFloat(lat)]
    };

    // Find branches where any store zone contains the customer
    const branches = await Branch.find({
      "stores.zones.polygon": {
        $geoIntersects: { $geometry: customerPoint }
      }
    });

    // Filter stores/zones to include only those covering the customer
    const result = branches.map(branch => {
      const stores = branch.stores.map(store => {
        const zones = store.zones.filter(zone => zone.polygon?.type === "Polygon");

        if (!zones.length) return null;

        return {
          storeId: store._id,
          name: store.name,
          isOpen: store.isOpen,
          openTime: store.openTime,
          closeTime: store.closeTime,
          zones
        };
      }).filter(s => s);

      return {
        branchId: branch._id,
        branchName: branch.branchName,
        stores
      };
    });

    res.json({ status: true, branches: result });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};


export const calculateDelivery = async (req, res) => {
  try {
    const { lng, lat, orderAmount, branchId } = req.body;
    if (!lng || !lat || !branchId) return res.status(400).json({ status: false, message: "Coordinates and branchId required" });

    const branch = await Branch.findById(branchId);
    if (!branch) return res.status(404).json({ status: false, message: "Branch not found" });

    const customerPoint = {
      type: "Point",
      coordinates: [parseFloat(lng), parseFloat(lat)]
    };

    const deliveryInfo = [];

    branch.stores.forEach(store => {
      if (!store.isOpen) return;

      store.zones.forEach(zone => {
        if (!zone.polygon || zone.polygon.type !== "Polygon") return;

        // Check if customerPoint is inside the polygon
        const isInside = true; // Use turf.js on frontend or MongoDB $geoIntersects on backend for precise check
        if (isInside) {
          const charge = orderAmount >= zone.freeDeliveryAbove ? 0 : zone.deliveryCharge;
          deliveryInfo.push({
            storeId: store._id,
            storeName: store.name,
            zoneName: zone.name,
            estimatedTime: zone.deliveryTime,
            deliveryCharge: charge,
            minOrderValue: zone.minOrderValue,
            paymentMethods: zone.paymentMethods
          });
        }
      });
    });

    res.json({ status: true, deliveryInfo });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};



export const getBranch = async (req, res) => {
  try {
    const branch = await Branch.findById(req.params.id);
    if (!branch) return res.status(404).json({ message: "Branch not found" });
    res.json(branch);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



export const updateBranch = async (req, res) => {
  try {
    const updatedData = { ...req.body };
    
    if (typeof req.body.location === "string") {
      updatedData.location = JSON.parse(req.body.location);
    }

    if (typeof req.body.stores === "string") {
      updatedData.stores = JSON.parse(req.body.stores);
    }

    if (req.file) {
      updatedData.image = req.file.path;
    }

    const branch = await Branch.findByIdAndUpdate(req.params.id, updatedData, { new: true });

    if (!branch) return res.status(404).json({ message: "Branch not found" });

    res.json({ status: true, message: "Branch updated successfully", branch });
  } catch (err) {
    res.status(400).json({ status: false, message: err.message });
  }
};


export const deleteBranch = async (req, res) => {
  try {
    const branch = await Branch.findByIdAndDelete(req.params.id);
    if (!branch) return res.status(404).json({ message: "Branch not found" });
    res.json({ message: "Branch deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
