/**
 * @swagger
 * tags:
 *   - name: PDF Banners
 */

/**
 * @swagger
 * /api/pdf-banners:
 *   post:
 *     summary: Upload a new PDF Banner
 *     tags: [PDF Banners]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               pdf:
 *                 type: string
 *                 format: binary
 *                 description: PDF file to upload
 *               name:
 *                 type: string
 *                 example: "Offer Template 1"
 *     responses:
 *       201:
 *         description: PDF Banner created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PDFBanner'
 *       400:
 *         description: Invalid request or file missing
 * 
 *   get:
 *     summary: Get all PDF Banners
 *     tags: [PDF Banners]
 *     responses:
 *       200:
 *         description: List of PDF Banners
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PDFBanner'
 */

/**
 * @swagger
 * /api/pdf-banners/{id}:
 *   get:
 *     summary: Get a PDF Banner by ID
 *     tags: [PDF Banners]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: PDF Banner details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PDFBanner'
 *       404:
 *         description: Banner not found
 * 
 *   put:
 *     summary: Update a PDF Banner
 *     tags: [PDF Banners]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               pdf:
 *                 type: string
 *                 format: binary
 *                 description: New PDF file
 *               name:
 *                 type: string
 *                 example: "Updated Offer Template"
 *     responses:
 *       200:
 *         description: PDF Banner updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PDFBanner'
 * 
 *   delete:
 *     summary: Delete a PDF Banner
 *     tags: [PDF Banners]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: PDF Banner deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Banner deleted successfully"
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     PDFBanner:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "64fa12e3abcd1234ef567890"
 *         name:
 *           type: string
 *           example: "Offer Template 1"
 *         pdf:
 *           type: string
 *           example: "uploads/pdfs/1695212345678.pdf"
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */
