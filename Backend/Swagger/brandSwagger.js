/**
 * @swagger
 * tags:
 *   name: Brands
 */

/**
 * @swagger
 * /api/brand:
 *   post:
 *     summary: Create a new brand
 *     tags: [Brands]
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - brandName
 *               - isInList
 *             properties:
 *               brandName:
 *                 type: string
 *                 description: Name of the brand
 *               isInList:
 *                 type: boolean
 *                 description: Whether brand is visible in list
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Brand image file
 *     responses:
 *       201:
 *         description: Brand created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Brand'
 *       400:
 *         description: Brand already exists or invalid input
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/brand:
 *   get:
 *     summary: Get all brands
 *     tags: [Brands]
 *     responses:
 *       200:
 *         description: List of all brands
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Brand'
 *       500:
 *         description: Internal server error
 */


/**
 * @swagger
 * /api/brand/{brandId}:
 *   put:
 *     summary: Update a brand by ID
 *     tags: [Brands]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: brandId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Brand ID
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               brandName:
 *                 type: string
 *                 description: Name of the brand
 *               isInList:
 *                 type: boolean
 *                 description: Whether brand is visible in list
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Brand image file
 *     responses:
 *       200:
 *         description: Brand updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Brand'
 *       400:
 *         description: Invalid brand ID or input
 *       404:
 *         description: Brand not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/brand/{brandId}:
 *   delete:
 *     summary: Delete a brand by ID
 *     tags: [Brands]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: brandId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Brand ID
 *     responses:
 *       200:
 *         description: Brand deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       400:
 *         description: Invalid brand ID
 *       404:
 *         description: Brand not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/brand/{brandId}/products:
 *   get:
 *     summary: Get a brand along with its products
 *     tags: [Brands]
 *     parameters:
 *       - in: path
 *         name: brandId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Brand ID
 *     responses:
 *       200:
 *         description: Brand with products fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     brand:
 *                       $ref: '#/components/schemas/Brand'
 *                     products:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Product'
 *       400:
 *         description: Invalid brand ID
 *       404:
 *         description: Brand not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Brand:
 *       type: object
 *       properties:
 *         _id:
 *           type: integer
 *         brandName:
 *           type: string
 *         isInList:
 *           type: boolean
 *         image:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *         __v:
 *           type: integer
 *     Product:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         productName:
 *           type: string
 *         barcode:
 *           type: string
 *         description:
 *           type: string
 *         basePrice:
 *           type: number
 *         Quantity:
 *           type: string
 *         images:
 *           type: array
 *           items:
 *             type: string
 *         keywords:
 *           type: array
 *           items:
 *             type: string
 *         brandId:
 *           type: integer
 *         storeId:
 *           type: array
 *           items:
 *             type: integer
 *         stock:
 *           type: integer
 *         display:
 *           type: boolean
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *         attributes:
 *           type: object
 */
