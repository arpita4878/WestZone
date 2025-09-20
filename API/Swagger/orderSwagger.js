/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Create a new order
 *     description: Create an order for a branch with items, customer details, payment, and promotions applied automatically. **Authentication required.**
 *     tags:
 *       - Orders
 *     security:
 *       - bearerAuth: []  # <-- Indicates auth required
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               branch:
 *                 type: string
 *                 description: Branch ID
 *                 example: "68bff3a78c49e3c3b4086be1"
 *               items:
 *                 type: array
 *                 description: List of products in the order
 *                 items:
 *                   type: object
 *                   properties:
 *                     productId:
 *                       type: string
 *                       example: "68bff15055a84b930b83b19a"
 *                     productName:
 *                       type: string
 *                       example: "Samsung Galaxy S24 Ultra"
 *                     productCode:
 *                       type: string
 *                       example: "SG-S24U-001"
 *                     qty:
 *                       type: integer
 *                       example: 1
 *                     price:
 *                       type: number
 *                       example: 124999
 *               appliedPromotions:
 *                 type: array
 *                 description: Promotions applied to the order
 *                 items:
 *                   type: object
 *                   properties:
 *                     promoId:
 *                       type: string
 *                       example: "68ce3b0278705399639628b3"
 *                     title:
 *                       type: string
 *                       example: "Flat 10% Off"
 *                     discountValue:
 *                       type: number
 *                       example: 10
 *               customer:
 *                 type: object
 *                 description: Customer information
 *                 properties:
 *                   customerId:
 *                     type: integer
 *                     example: 3
 *                   name:
 *                     type: string
 *                     example: "Rahul Sharma"
 *                   email:
 *                     type: string
 *                     example: "rahul@example.com"
 *                   phone:
 *                     type: number
 *                     example: 9876543210
 *                   address:
 *                     type: string
 *                     example: "123, MG Road, Delhi"
 *                   location:
 *                     type: object
 *                     properties:
 *                       type:
 *                         type: string
 *                         example: "Point"
 *                       coordinates:
 *                         type: array
 *                         items:
 *                           type: number
 *                         example: [77.209, 28.6139]
 *               payment:
 *                 type: object
 *                 description: Payment information
 *                 properties:
 *                   method:
 *                     type: string
 *                     example: "online"
 *                   paid:
 *                     type: boolean
 *                     example: true
 *               delivery_boy:
 *                 type: object
 *                 description: Delivery boy assigned
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 101
 *                   name:
 *                     type: string
 *                     example: "Amit Kumar"
 *                   email:
 *                     type: string
 *                     example: "amit.kumar@delivery.com"
 *     responses:
 *       201:
 *         description: Order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 order:
 *                   type: object
 *                   description: Created order details
 *       400:
 *         description: Invalid request or stock issue
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Insufficient stock for Samsung Galaxy S24 Ultra"
 *       401:
 *         description: Unauthorized (user must be logged in)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Unauthorized: login required"
 *       404:
 *         description: Customer or branch not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Branch not found"
 */

