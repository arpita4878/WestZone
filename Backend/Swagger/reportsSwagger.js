/**
 * @swagger
 * /api/reports/sales/export:
 *   get:
 *     summary: Export sales report as Excel
 *     description: Generates an aggregated sales report grouped by branch and product, and returns it as a downloadable Excel file.
 *     tags: [Reports]
 *     responses:
 *       200:
 *         description: Excel file generated successfully
 *         content:
 *           application/vnd.openxmlformats-officedocument.spreadsheetml.sheet:
 *             schema:
 *               type: string
 *               format: binary
 *       500:
 *         description: Internal server error while generating report
 */


/**
 * @swagger
 * /api/reports/sales:
 *   get:
 *     summary: Get sales report
 *     description: Fetch aggregated sales report by branch and product within a given date range.
 *     tags: [Reports]
 *     parameters:
 *       - in: query
 *         name: branchId
 *         schema:
 *           type: string
 *         required: false
 *         description: ID of the branch to filter sales
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *           format: date
 *         required: false
 *         description: Start date for filtering sales (YYYY-MM-DD)
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *           format: date
 *         required: false
 *         description: End date for filtering sales (YYYY-MM-DD)
 *     responses:
 *       200:
 *         description: Sales report retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   branch:
 *                     type: string
 *                     example: Downtown Branch
 *                   totalSales:
 *                     type: number
 *                     example: 6245
 *                   products:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         name:
 *                           type: string
 *                           example: test
 *                         code:
 *                           type: string
 *                           example: test02
 *                         qty:
 *                           type: integer
 *                           example: 5
 *                         sales:
 *                           type: number
 *                           example: 6245
 *       500:
 *         description: Internal server error
 */


/**
 * @swagger
 * /api/reports/low-stock:
 *   get:
 *     summary: Get low stock products
 *     description: Retrieve a list of products in branch inventories that are below or equal to the specified threshold.
 *     tags: [Reports]
 *     parameters:
 *       - in: query
 *         name: threshold
 *         schema:
 *           type: integer
 *           example: 10
 *         required: false
 *         description: The stock quantity threshold to check against (default is 10).
 *     responses:
 *       200:
 *         description: Successfully retrieved low stock products
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 count:
 *                   type: integer
 *                   example: 1
 *                 lowStock:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: 68bff3b8f65a1e401cba5a19
 *                       branchId:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                             example: 68bff3a78c49e3c3b4086be1
 *                           address:
 *                             type: string
 *                             example: Main Street
 *                           location:
 *                             type: object
 *                             properties:
 *                               type:
 *                                 type: string
 *                                 example: Point
 *                               coordinates:
 *                                 type: array
 *                                 items:
 *                                   type: number
 *                                 example: [77.5946, 12.9716]
 *                       productId:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                             example: 68bff15055a84b930b83b19a
 *                           barcode:
 *                             type: string
 *                             example: test02
 *                       quantity:
 *                         type: integer
 *                         example: 7
 *                       lowStockThreshold:
 *                         type: integer
 *                         example: 10
 *                       price:
 *                         type: number
 *                         example: 1249
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: 2025-09-09T09:30:32.182Z
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         example: 2025-09-20T07:42:04.218Z
 *       500:
 *         description: Internal server error
 */
