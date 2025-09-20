/**
 * @swagger
 * components:
 *   schemas:
 *     Zone:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Zone 1
 *         polygon:
 *           type: object
 *           properties:
 *             type:
 *               type: string
 *               example: Polygon
 *             coordinates:
 *               type: array
 *               items:
 *                 type: array
 *                 items:
 *                   type: array
 *                   items:
 *                     type: number
 *                     example: 77.5946
 *         freeDeliveryAbove:
 *           type: number
 *           example: 500
 *         minOrderValue:
 *           type: number
 *           example: 100
 *         deliveryTime:
 *           type: string
 *           example: 30-45 mins
 *         deliveryCharge:
 *           type: number
 *           example: 20
 *         deliveryChargeAfterKm:
 *           type: number
 *           example: 10
 *         paymentMethods:
 *           type: array
 *           items:
 *             type: string
 *           example: ["card","cash","upi"]
 *     Store:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Store A
 *         email:
 *           type: string
 *           example: store22@gmail.com
 *         phone:
 *           type: string
 *           example: "+911234567890"
 *         whatsapp_Number:
 *           type: string
 *           example: "+911234567890"
 *         isOpen:
 *           type: boolean
 *           example: true
 *         openTime:
 *           type: string
 *           example: "09:00"
 *         closeTime:
 *           type: string
 *           example: "21:00"
 *         zones:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Zone'
 *     Branch:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "68ce7b89cd32fe1a97a1c7c1"
 *         branchName:
 *           type: string
 *           example: Circle Branch
 *         code:
 *           type: string
 *           example: B010
 *         address:
 *           type: string
 *           example: Circle Street
 *         location:
 *           type: object
 *           properties:
 *             type:
 *               type: string
 *               example: Point
 *             coordinates:
 *               type: array
 *               items:
 *                 type: number
 *               example: [77.5946, 12.9716]
 *         stores:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Store'
 *         isActive:
 *           type: boolean
 *           example: true
 *         createdAt:
 *           type: string
 *           example: "2025-09-20T10:01:45.527Z"
 *         updatedAt:
 *           type: string
 *           example: "2025-09-20T10:01:45.527Z"
 *         __v:
 *           type: integer
 *           example: 0
 *
 * /api/branches:
 *   post:
 *     summary: Create a new branch
 *     tags: [Branches]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Branch'
 *           example:
 *             branchName: "Circle Branch"
 *             code: "B010"
 *             address: "Circle Street"
 *             location:
 *               type: "Point"
 *               coordinates: [77.5946, 12.9716]
 *             stores:
 *               - name: "Store A"
 *                 email: "store22@gmail.com"
 *                 phone: "+911234567890"
 *                 whatsapp_Number: "+911234567890"
 *                 isOpen: true
 *                 openTime: "09:00"
 *                 closeTime: "21:00"
 *                 zones:
 *                   - name: "Zone 1"
 *                     polygon:
 *                       type: "Polygon"
 *                       coordinates:
 *                         - - [77.5946, 12.9716]
 *                           - [77.5950, 12.9720]
 *                           - [77.5960, 12.9710]
 *                           - [77.5946, 12.9716]
 *                     freeDeliveryAbove: 500
 *                     minOrderValue: 100
 *                     deliveryTime: "30-45 mins"
 *                     deliveryCharge: 20
 *                     deliveryChargeAfterKm: 10
 *                     paymentMethods: ["card","cash","upi"]
 *     responses:
 *       201:
 *         description: Branch created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Branch created successfully"
 *                 branch:
 *                   $ref: '#/components/schemas/Branch'
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */



/**
 * @swagger
 * components:
 *   schemas:
 *     Zone:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Zone 1
 *         polygon:
 *           type: object
 *           properties:
 *             type:
 *               type: string
 *               example: Polygon
 *             coordinates:
 *               type: array
 *               items:
 *                 type: array
 *                 items:
 *                   type: array
 *                   items:
 *                     type: number
 *         freeDeliveryAbove:
 *           type: number
 *           example: 500
 *         minOrderValue:
 *           type: number
 *           example: 100
 *         deliveryTime:
 *           type: string
 *           example: "30-45 mins"
 *         deliveryCharge:
 *           type: number
 *           example: 20
 *         deliveryChargeAfterKm:
 *           type: number
 *           example: 10
 *         paymentMethods:
 *           type: array
 *           items:
 *             type: string
 *           example: ["card","cash","upi"]
 *     Store:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Store A
 *         email:
 *           type: string
 *           example: store22@gmail.com
 *         phone:
 *           type: string
 *           example: "+911234567890"
 *         whatsapp_Number:
 *           type: string
 *           example: "+911234567890"
 *         isOpen:
 *           type: boolean
 *           example: true
 *         openTime:
 *           type: string
 *           example: "09:00"
 *         closeTime:
 *           type: string
 *           example: "21:00"
 *         zones:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Zone'
 *     Branch:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "68ce7b89cd32fe1a97a1c7c1"
 *         branchName:
 *           type: string
 *           example: Circle Branch
 *         code:
 *           type: string
 *           example: B010
 *         address:
 *           type: string
 *           example: Circle Street
 *         location:
 *           type: object
 *           properties:
 *             type:
 *               type: string
 *               example: Point
 *             coordinates:
 *               type: array
 *               items:
 *                 type: number
 *               example: [77.5946, 12.9716]
 *         stores:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Store'
 *         isActive:
 *           type: boolean
 *           example: true
 *         createdAt:
 *           type: string
 *           example: "2025-09-20T10:01:45.527Z"
 *         updatedAt:
 *           type: string
 *           example: "2025-09-20T10:01:45.527Z"
 *         __v:
 *           type: integer
 *           example: 0
 *
 * /api/branches:
 *   post:
 *     summary: Create a new branch
 *     tags: [Branches]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Branch'
 *           example:
 *             branchName: "Circle Branch"
 *             code: "B010"
 *             address: "Circle Street"
 *             location:
 *               type: "Point"
 *               coordinates: [77.5946, 12.9716]
 *             stores:
 *               - name: "Store A"
 *                 email: "store22@gmail.com"
 *                 phone: "+911234567890"
 *                 whatsapp_Number: "+911234567890"
 *                 isOpen: true
 *                 openTime: "09:00"
 *                 closeTime: "21:00"
 *                 zones:
 *                   - name: "Zone 1"
 *                     polygon:
 *                       type: "Polygon"
 *                       coordinates:
 *                         - - [77.5946, 12.9716]
 *                           - [77.5950, 12.9720]
 *                           - [77.5960, 12.9710]
 *                           - [77.5946, 12.9716]
 *                     freeDeliveryAbove: 500
 *                     minOrderValue: 100
 *                     deliveryTime: "30-45 mins"
 *                     deliveryCharge: 20
 *                     deliveryChargeAfterKm: 10
 *                     paymentMethods: ["card","cash","upi"]
 *     responses:
 *       201:
 *         description: Branch created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Branch created successfully"
 *                 branch:
 *                   $ref: '#/components/schemas/Branch'
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 *
 *   get:
 *     summary: List all branches
 *     tags: [Branches]
 *     responses:
 *       200:
 *         description: Branch list
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 branches:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Branch'
 *       500:
 *         description: Internal server error
 *
 * /api/branches/location:
 *   get:
 *     summary: Get branches by customer location
 *     tags: [Branches]
 *     parameters:
 *       - in: query
 *         name: lng
 *         schema:
 *           type: number
 *         required: true
 *         description: Longitude
 *       - in: query
 *         name: lat
 *         schema:
 *           type: number
 *         required: true
 *         description: Latitude
 *     responses:
 *       200:
 *         description: Branches near customer
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 branches:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Branch'
 *       400:
 *         description: Missing coordinates
 *       500:
 *         description: Internal server error
 *
 * /api/branches/{id}:
 *   get:
 *     summary: Get branch by ID
 *     tags: [Branches]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Branch ID
 *     responses:
 *       200:
 *         description: Branch details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Branch'
 *       404:
 *         description: Branch not found
 *       500:
 *         description: Internal server error
 *
 *   delete:
 *     summary: Delete a branch by ID
 *     tags: [Branches]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Branch ID
 *     responses:
 *       200:
 *         description: Branch deleted
 *       404:
 *         description: Branch not found
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /api/branches/{id}:
 *   put:
 *     summary: Update a branch by ID
 *     tags: [Branches]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Branch ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               branchName:
 *                 type: string
 *                 example: "Central Indore Branch"
 *               code:
 *                 type: string
 *                 example: "B011"
 *               address:
 *                 type: string
 *                 example: "Indore Street"
 *               isActive:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Branch updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Branch updated successfully"
 *                 branch:
 *                   $ref: '#/components/schemas/Branch'
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Branch not found
 */



/**
 * @swagger
 * /api/branches/{branchId}/stores:
 *   post:
 *     summary: Add a new store to a branch
 *     tags: [Stores]
 *     parameters:
 *       - in: path
 *         name: branchId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the branch
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Store 1"
 *               isOpen:
 *                 type: boolean
 *                 example: true
 *               openTime:
 *                 type: string
 *                 example: "09:00"
 *               closeTime:
 *                 type: string
 *                 example: "21:00"
 *               email:
 *                 type: string
 *                 example: "store1@gmail.com"
 *               phone:
 *                 type: string
 *                 example: "+911234567890"
 *               whatsapp_Number:
 *                 type: string
 *                 example: "+911234567890"
 *     responses:
 *       201:
 *         description: Store added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 isOpen:
 *                   type: boolean
 *                 openTime:
 *                   type: string
 *                 closeTime:
 *                   type: string
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Branch not found
 */

/**
 * @swagger
 * /api/branches/{branchId}/stores/{storeId}:
 *   put:
 *     summary: Update a store in a branch
 *     tags: [Stores]
 *     parameters:
 *       - in: path
 *         name: branchId
 *         required: true
 *         schema:
 *           type: string
 *         description: Branch ID
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *         description: Store ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Store updated"
 *               isOpen:
 *                 type: boolean
 *                 example: false
 *               openTime:
 *                 type: string
 *                 example: "10:00"
 *               closeTime:
 *                 type: string
 *                 example: "22:00"
 *     responses:
 *       200:
 *         description: Store updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 isOpen:
 *                   type: boolean
 *                 openTime:
 *                   type: string
 *                 closeTime:
 *                   type: string
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Branch or Store not found
 */

/**
 * @swagger
 * /api/branches/{branchId}/stores/{storeId}:
 *   delete:
 *     summary: Delete a store from a branch
 *     tags: [Stores]
 *     parameters:
 *       - in: path
 *         name: branchId
 *         required: true
 *         schema:
 *           type: string
 *         description: Branch ID
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *         description: Store ID
 *     responses:
 *       200:
 *         description: Store deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Store deleted"
 *       404:
 *         description: Branch or Store not found
 *       500:
 *         description: Internal server error
 */


/**
 * @swagger
 * /api/branches/{branchId}/stores/{storeId}/zones:
 *   post:
 *     summary: Add a new zone to a store
 *     description: Adds a new delivery zone to a specific store under a branch. Polygon coordinates define the zone area.
 *     tags: [Zones]
 *     parameters:
 *       - in: path
 *         name: branchId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the branch
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the store
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - polygon
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the zone
 *                 example: "Zone 1"
 *               polygon:
 *                 type: object
 *                 description: Polygon coordinates defining the delivery area
 *                 properties:
 *                   type:
 *                     type: string
 *                     example: "Polygon"
 *                   coordinates:
 *                     type: array
 *                     example: [[[77.5946, 12.9716],[77.5950,12.9718],[77.5948,12.9722],[77.5946,12.9716]]]
 *               freeDeliveryAbove:
 *                 type: number
 *                 description: Minimum order amount for free delivery
 *                 example: 500
 *               minOrderValue:
 *                 type: number
 *                 description: Minimum order value for the zone
 *                 example: 100
 *               deliveryTime:
 *                 type: string
 *                 description: Estimated delivery time
 *                 example: "30-45 mins"
 *               deliveryCharge:
 *                 type: number
 *                 description: Delivery charge for the zone
 *                 example: 50
 *               deliveryChargeAfterKm:
 *                 type: number
 *                 description: Additional charge per km beyond standard delivery radius
 *                 example: 10
 *               paymentMethods:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["card","cash"]
 *     responses:
 *       201:
 *         description: Zone added successfully
 *       400:
 *         description: Invalid input or polygon coordinates
 *       404:
 *         description: Branch or store not found
 */

/**
 * @swagger
 * /api/branches/{branchId}/stores/{storeId}/zones/{zoneId}:
 *   put:
 *     summary: Update an existing zone in a store
 *     description: Updates the properties of a zone, such as name, delivery charge, or polygon coordinates.
 *     tags: [Zones]
 *     parameters:
 *       - in: path
 *         name: branchId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the branch
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the store
 *       - in: path
 *         name: zoneId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the zone to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Updated zone name
 *                 example: "Updated Zone Name"
 *               deliveryCharge:
 *                 type: number
 *                 description: Updated delivery charge
 *                 example: 60
 *     responses:
 *       200:
 *         description: Zone updated successfully
 *       400:
 *         description: No valid fields to update
 *       404:
 *         description: Branch, store, or zone not found
 */

/**
 * @swagger
 * /api/branches/{branchId}/stores/{storeId}/zones/{zoneId}:
 *   delete:
 *     summary: Delete a zone from a store
 *     description: Deletes a specific delivery zone from a store under a branch.
 *     tags: [Zones]
 *     parameters:
 *       - in: path
 *         name: branchId
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: zoneId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Zone deleted successfully
 *       404:
 *         description: Branch, store, or zone not found
 */

/**
 * @swagger
 * /api/branches/{branchId}/stores/{storeId}/check-delivery:
 *   post:
 *     summary: Check if delivery is available for a location
 *     description: Checks whether a customer's location (lat/lng) falls within any zone of the store.
 *     tags: [Zones]
 *     parameters:
 *       - in: path
 *         name: branchId
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: storeId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - lat
 *               - lng
 *             properties:
 *               lat:
 *                 type: number
 *                 description: Latitude of the customer's location
 *                 example: 12.9716
 *               lng:
 *                 type: number
 *                 description: Longitude of the customer's location
 *                 example: 77.5946
 *     responses:
 *       200:
 *         description: Delivery availability response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 available:
 *                   type: boolean
 *                 zoneId:
 *                   type: string
 *                 deliveryTime:
 *                   type: string
 *                 deliveryCharge:
 *                   type: number
 *                 minOrder:
 *                   type: number
 *                 message:
 *                   type: string
 *       404:
 *         description: Branch or store not found
 */
