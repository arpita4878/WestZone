
/**
 * @swagger
 * tags:
 *   - name: Push Notifications
 */

/**
 * @swagger
 * /api/notifications:
 *   post:
 *     summary: Create a new push notification
 *     tags: [Push Notifications]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userName
 *               - title
 *               - message
 *             properties:
 *               userName:
 *                 type: string
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 example: "john@example.com"
 *               phone:
 *                 type: string
 *                 example: "+911234567890"
 *               title:
 *                 type: string
 *                 example: "Special Offer!"
 *               message:
 *                 type: string
 *                 example: "Get 20% off on all products this weekend!"
 *     responses:
 *       201:
 *         description: Notification created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/PushNotification'
 *       400:
 *         description: Invalid request
 *
 *   get:
 *     summary: Get all push notifications
 *     tags: [Push Notifications]
 *     responses:
 *       200:
 *         description: List of notifications
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/PushNotification'
 */

/**
 * @swagger
 * /api/notifications/{id}:
 *   get:
 *     summary: Get a single push notification by ID
 *     tags: [Push Notifications]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Notification details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/PushNotification'
 *       404:
 *         description: Notification not found
 *
 *   put:
 *     summary: Update a push notification
 *     tags: [Push Notifications]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               title:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       200:
 *         description: Notification updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/PushNotification'
 *
 *   delete:
 *     summary: Delete a push notification
 *     tags: [Push Notifications]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Notification deleted successfully
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
 *                   example: "Notification deleted successfully"
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     PushNotification:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "64fa12e3abcd1234ef567890"
 *         userName:
 *           type: string
 *           example: "John Doe"
 *         email:
 *           type: string
 *           example: "john@example.com"
 *         phone:
 *           type: string
 *           example: "+911234567890"
 *         title:
 *           type: string
 *           example: "Special Offer!"
 *         message:
 *           type: string
 *           example: "Get 20% off on all products this weekend!"
 *         date:
 *           type: string
 *           format: date-time
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */
