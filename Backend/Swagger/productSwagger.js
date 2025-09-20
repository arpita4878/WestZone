/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Create a new product
 *     description: Create a product with details and optional image uploads (multipart/form-data).
 *     tags:
 *       - Products
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - productName
 *               - barcode
 *               - basePrice
 *             properties:
 *               productName:
 *                 type: string
 *                 example: "iPhone 15"
 *               barcode:
 *                 type: string
 *                 example: "1234567890"
 *               brandId:
 *                 type: string
 *                 example: "B001"
 *               categoryId:
 *                 type: string
 *                 example: "C001"
 *               description:
 *                 type: string
 *                 example: "Latest Apple iPhone"
 *               basePrice:
 *                 type: number
 *                 example: 999
 *               Quantity:
 *                 type: number
 *                 example: 50
 *               attributes:
 *                 type: string
 *                 example: '{"color":"black","ram":"8GB"}'
 *               keywords:
 *                 type: string
 *                 example: "mobile,apple,iphone"
 *               storeId:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["S001","S002"]
 *               stock:
 *                 type: number
 *                 example: 100
 *               display:
 *                 type: boolean
 *                 example: true
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       "201":
 *         description: Product created successfully
 *       "400":
 *         description: Product creation failed
 */


/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Update a product
 *     description: Update an existing product by ID with new details, images, and attributes.
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The product ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "iPhone 16"
 *               price:
 *                 type: number
 *                 example: 799.99
 *               description:
 *                 type: string
 *                 example: "Latest iPhone with advanced features"
 *               attributes:
 *                 oneOf:
 *                   - type: object
 *                     additionalProperties: true
 *                     example: { color: "black", storage: "128GB" }
 *                   - type: string
 *                     description: JSON string (if sent as text from frontend)
 *                     example: '{"color":"black","storage":"128GB"}'
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *             required:
 *               - name
 *               - price
 *     responses:
 *       200:
 *         description: Product updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Product"
 *       400:
 *         description: Invalid request or server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Update product error: Invalid attributes format"
 *       404:
 *         description: Product not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product not found"
 *
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "68bff15055a84b930b83b19a"
 *         name:
 *           type: string
 *           example: "iPhone 16"
 *         price:
 *           type: number
 *           example: 799.99
 *         description:
 *           type: string
 *           example: "Latest iPhone with advanced features"
 *         images:
 *           type: array
 *           items:
 *             type: string
 *             example: "/uploads/products/iphone16.png"
 *         attributes:
 *           type: object
 *           additionalProperties: true
 *           example:
 *             color: "black"
 *             storage: "128GB"
 */


/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get a list of products
 *     description: Retrieve paginated list of products with details including images, stock, and attributes.
 *     tags:
 *       - Products
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 20
 *         description: Number of items per page
 *     responses:
 *       200:
 *         description: Paginated list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 20
 *                 total:
 *                   type: integer
 *                   example: 2
 *                 items:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Product"
 *       400:
 *         description: Invalid request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid page or limit"
 *
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "68bff15055a84b930b83b19a"
 *         productName:
 *           type: string
 *           example: "test"
 *         barcode:
 *           type: string
 *           example: "test02"
 *         description:
 *           type: string
 *           example: "test"
 *         categoryId:
 *           type: integer
 *           example: 1
 *         basePrice:
 *           type: number
 *           example: 799
 *         Quantity:
 *           type: string
 *           example: "150gm"
 *         images:
 *           type: array
 *           items:
 *             type: string
 *             example: "uploads/products/1757409616977.jpg"
 *         keywords:
 *           type: array
 *           items:
 *             type: string
 *             example: "test"
 *         brandId:
 *           type: integer
 *           example: 1
 *         storeId:
 *           type: array
 *           items:
 *             type: integer
 *             example: 1
 *         stock:
 *           type: integer
 *           example: 15
 *         display:
 *           type: boolean
 *           example: true
 *         attributes:
 *           type: object
 *           additionalProperties: true
 *           example:
 *             test: "t"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2025-09-09T09:20:16.998Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: "2025-09-09T11:04:19.719Z"
 *         __v:
 *           type: integer
 *           example: 0
 */


/**
 * @swagger
 * /api/products/delete/{id}:
 *   delete:
 *     summary: Delete a product
 *     description: Delete a product by its ID.
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the product to delete
 *         schema:
 *           type: string
 *           example: "68bff0a58ff7042fcdf03e3c"
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product deleted successfully"
 *       404:
 *         description: Product not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product not found"
 *       400:
 *         description: Invalid request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid product ID"
 */


/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Get product details by ID
 *     description: Fetches the details of a single product. Optionally includes branch-specific inventory if `branchId` is provided as a query parameter.
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Product ID
 *       - in: query
 *         name: branchId
 *         required: false
 *         schema:
 *           type: string
 *         description: Branch ID to fetch inventory for
 *     responses:
 *       200:
 *         description: Product details fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 product:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     productName:
 *                       type: string
 *                     barcode:
 *                       type: string
 *                     description:
 *                       type: string
 *                     basePrice:
 *                       type: number
 *                     Quantity:
 *                       type: string
 *                     images:
 *                       type: array
 *                       items:
 *                         type: string
 *                     keywords:
 *                       type: array
 *                       items:
 *                         type: string
 *                     brandId:
 *                       type: integer
 *                     storeId:
 *                       type: array
 *                       items:
 *                         type: integer
 *                     stock:
 *                       type: integer
 *                     display:
 *                       type: boolean
 *                     attributes:
 *                       type: object
 *                       additionalProperties: true
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                 branchInventory:
 *                   type: object
 *                   nullable: true
 *                   description: Branch-specific inventory for the product
 *       404:
 *         description: Product not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Not found"
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */


/**
 * @swagger
 * /api/inventory/mine:
 *   post:
 *     summary: Add or update product inventory for my branch
 *     description: Insert or update inventory for a product in the current user's branch. If the product already exists in branch inventory, it will be updated.
 *     tags: [Inventory]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *                 example: 68c0096cc280f778cee715e2
 *               branchId:
 *                 type: string
 *                 example: 68bff3a78c49e3c3b4086be1
 *               price:
 *                 type: number
 *                 example: 1249
 *               quantity:
 *                 type: integer
 *                 example: 15
 *               lowStockThreshold:
 *                 type: integer
 *                 example: 10
 *     responses:
 *       200:
 *         description: Inventory successfully added/updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: 68d123abc456def7890ghijk
 *                 productId:
 *                   type: string
 *                   example: 68c0096cc280f778cee715e2
 *                 branchId:
 *                   type: string
 *                   example: 68bff3a78c49e3c3b4086be1
 *                 price:
 *                   type: number
 *                   example: 1249
 *                 quantity:
 *                   type: integer
 *                   example: 15
 *                 lowStockThreshold:
 *                   type: integer
 *                   example: 10
 *       400:
 *         description: Invalid input
 */

/**
 * @swagger
 * /api/inventory/mine/bulk:
 *   post:
 *     summary: Bulk upload inventory for my branch
 *     description: Upload a CSV or Excel file to bulk update inventory for the logged-in user's branch.
 *     tags: [Inventory]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: CSV or Excel file with product SKU, price, quantity, and low stock threshold
 *     responses:
 *       200:
 *         description: Bulk inventory upload results
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 updated:
 *                   type: integer
 *                   example: 20
 *                 unknownSkus:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["sku123", "sku999"]
 *       400:
 *         description: Invalid input or file error
 */

/**
 * @swagger
 * /api/branches/{branchId}:
 *   get:
 *     summary: Get branch details by ID
 *     description: Get inventory for brach.
 *     tags: [Inventory]
 *     parameters:
 *       - in: path
 *         name: branchId
 *         schema:
 *           type: string
 *         required: true
 *         description: Branch ID
 *     responses:
 *       200:
 *         description: Branch details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: 68bff3a78c49e3c3b4086be1
 *                 branchName:
 *                   type: string
 *                   example: Downtown Branch
 *                 code:
 *                   type: string
 *                   example: B001
 *                 address:
 *                   type: string
 *                   example: Main Street
 *                 location:
 *                   type: object
 *                   properties:
 *                     type:
 *                       type: string
 *                       example: Point
 *                     coordinates:
 *                       type: array
 *                       items:
 *                         type: number
 *                       example: [77.5946, 12.9716]
 *                 stores:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: 68bff3a78c49e3c3b4086be2
 *                       name:
 *                         type: string
 *                         example: Store A
 *                       isOpen:
 *                         type: boolean
 *                         example: true
 *                       openTime:
 *                         type: string
 *                         example: "09:00"
 *                       closeTime:
 *                         type: string
 *                         example: "21:00"
 *                       zones:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             _id:
 *                               type: string
 *                               example: 68bff3a78c49e3c3b4086be3
 *                             name:
 *                               type: string
 *                               example: Zone 1
 *                             polygon:
 *                               type: object
 *                               properties:
 *                                 type:
 *                                   type: string
 *                                   example: Polygon
 *                                 coordinates:
 *                                   type: array
 *                                   items:
 *                                     type: array
 *                                     items:
 *                                       type: array
 *                                       items:
 *                                         type: number
 *                                   example: [
 *                                     [77.5946, 12.9716],
 *                                     [77.595, 12.972],
 *                                     [77.596, 12.971],
 *                                     [77.5946, 12.9716]
 *                                   ]
 *                             freeDeliveryAbove:
 *                               type: number
 *                               example: 500
 *                             minOrderValue:
 *                               type: number
 *                               example: 100
 *                             deliveryTime:
 *                               type: string
 *                               example: 30-45 mins
 *                             deliveryCharge:
 *                               type: number
 *                               example: 20
 *                             deliveryChargeAfterKm:
 *                               type: number
 *                               example: 10
 *                             paymentMethods:
 *                               type: array
 *                               items:
 *                                 type: string
 *                               example: ["card", "cash", "upi"]
 *                 isActive:
 *                   type: boolean
 *                   example: true
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: 2025-09-09T09:30:15.944Z
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: 2025-09-09T09:30:15.944Z
 *       404:
 *         description: Branch not found
 *       400:
 *         description: Invalid request
 */
