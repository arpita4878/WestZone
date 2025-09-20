import Brands from '../models/brand.model.js'
import Product from '../models/product.model.js'

export const createBrand = async (req, res) => {
  try {
    const brands = await Brands.find();
    const _id = brands.length === 0 ? 1 : brands[brands.length - 1]._id + 1;

    const { brandName, isInList } = req.body;
    let image = null;

    if (req.file) {
      image = req.file.path; 
    }

    const existing = await Brands.findOne({ brandName });
    if (existing) {
      return res.status(400).json({ status: false, message: "Brand already exists" });
    }

    const brand = await Brands.create({ _id, brandName, isInList, image });
    res.status(201).json({ status: true, message: "Brand Created Successfully", data: brand });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};



export const getBrandWithProducts = async (req, res) => {
  try {
    const brandId = Number(req.params.brandId);
    if (isNaN(brandId)) {
      return res.status(400).json({ status: false, message: "Invalid brand ID" });
    }

    const brand = await Brands.findOne({ _id: brandId });
    if (!brand) {
      return res.status(404).json({ status: false, message: "Brand not found" });
    }

    const products = await Product.find({ brandId: brandId });

    res.status(200).json({
      status: true,
      message: "Brand with products fetched successfully",
      data: {
        brand,
        products
      }
    });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};


export const getBrands = async (req, res) => {
    try {
        const brands = await Brands.find();
        res.status(200).json({ status: true, data: brands })
    }
    catch (err) {
        res.status(500).json({ status: false, messsage: err.message })
    }
}

export const updateBrand = async (req, res) => {
  try {
    const id = Number(req.params.brandId);
    if (isNaN(id)) return res.status(400).json({ status: false, message: "Invalid brand id" });

    const brandName = req.body.brandName;
    const isInList = req.body.isInList === "true" || req.body.isInList === true;

    let image = req.body.image;
    if (req.file) {
      image = req.file.path; // handle uploaded file
    }

    const update = await Brands.findOneAndUpdate(
      { _id: id },
      { brandName, isInList, image },
      { new: true }
    );

    if (!update) return res.status(404).json({ status: false, message: "Brand not found" });

    res.status(200).json({ status: true, message: "Brand updated successfully", data: update });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};


export const deleteBrand = async( req, res)=>{
    try{
        const id=Number(req.params.brandId)
        if(isNaN(id)) return res.status(400).json({status:false, message : "invalid brand id "})
        
        const deleted = await Brands.findOneAndDelete({_id:id})

        if(!deleted) return res.status(404).json({status:false , message :"brand not found"})

        res.status(200).json({status:true , message :"brand deleted successfully"})
    }   
    catch(error)
    {
        res.status(500).json({status:false , message : error.message})
    }
    

}















