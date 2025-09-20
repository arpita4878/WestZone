
/**
 * @swagger
 * /api/promotions:
 *   post:
 *     summary: Create a new promotion
 *     tags: [Promotions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Promotion'
 *     responses:
 *       201:
 *         description: Promotion created successfully
 *       400:
 *         description: Invalid input
 */


/**
 * @swagger
 * /api/promotions:
 *   get:
 *     summary: Get all promotions
 *     tags: [Promotions]
 *     responses:
 *       200:
 *         description: List of promotions
 */


/**
 * @swagger
 * /api/promotions/{id}:
 *   get:
 *     summary: Get promotion by ID
 *     tags: [Promotions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Promotion details
 *       404:
 *         description: Promotion not found
 */



/**
 * @swagger
 * /api/promotions/{id}:
 *   put:
 *     summary: Update promotion
 *     tags: [Promotions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Promotion'
 *     responses:
 *       200:
 *         description: Promotion updated successfully
 *       404:
 *         description: Promotion not found
 */



/**
 * @swagger
 * /api/promotions/{id}:
 *   delete:
 *     summary: Delete promotion
 *     tags: [Promotions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Promotion deleted successfully
 *       404:
 *         description: Promotion not found
 */