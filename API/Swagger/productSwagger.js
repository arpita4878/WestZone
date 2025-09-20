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
