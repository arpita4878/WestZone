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



/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Get a list of orders
 *     description: Retrieve a list of orders with optional filters for branch, status.
 *     tags:
 *       - Orders
 *     parameters:
 *       - in: query
 *         name: branch
 *         schema:
 *           type: string
 *         description: Branch ID to filter orders
 *         example: "68bff3a78c49e3c3b4086be1"
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [new, under-process, out-for-delivery, delivered, cancelled]
 *         description: Filter orders by status
 *         example: "new"
 *       - in: query
 *         name: from
 *         schema:
 *           type: string
 *           format: date
 *         description: Filter orders created from this date
 *         example: "2025-09-01"
 *       - in: query
 *         name: to
 *         schema:
 *           type: string
 *           format: date
 *         description: Filter orders created up to this date
 *         example: "2025-09-20"
 *     responses:
 *       200:
 *         description: List of orders
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 orders:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "68ce3b2778705399639628bd"
 *                       branch:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                             example: "68bff3a78c49e3c3b4086be1"
 *                           name:
 *                             type: string
 *                             example: "Main Branch"
 *                       items:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             productId:
 *                               type: object
 *                               properties:
 *                                 _id:
 *                                   type: string
 *                                   example: "68bff15055a84b930b83b19a"
 *                                 name:
 *                                   type: string
 *                                   example: "test"
 *                                 price:
 *                                   type: number
 *                                   example: 1249
 *                             productName:
 *                               type: string
 *                               example: "test"
 *                             productCode:
 *                               type: string
 *                               example: "test02"
 *                             qty:
 *                               type: integer
 *                               example: 1
 *                             price:
 *                               type: number
 *                               example: 1249
 *                       subTotal:
 *                         type: number
 *                         example: 1249
 *                       discount:
 *                         type: number
 *                         example: 124.9
 *                       total:
 *                         type: number
 *                         example: 1174.1
 *                       appliedPromotions:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             promoId:
 *                               type: string
 *                               example: "68ce3b0278705399639628b3"
 *                             title:
 *                               type: string
 *                               example: "Flat 10% Off"
 *                             discountValue:
 *                               type: number
 *                               example: 10
 *                       status:
 *                         type: string
 *                         example: "new"
 *                       customer:
 *                         type: object
 *                         properties:
 *                           name:
 *                             type: string
 *                             example: "Gurjeet"
 *                           phone:
 *                             type: number
 *                             example: 9039140828
 *                           address:
 *                             type: string
 *                             example: "123, MG Road, Delhi"
 *                           customerId:
 *                             type: integer
 *                             example: 2
 *                           location:
 *                             type: object
 *                             properties:
 *                               type:
 *                                 type: string
 *                                 example: "Point"
 *                               coordinates:
 *                                 type: array
 *                                 items:
 *                                   type: number
 *                                 example: [77.209, 28.6139]
 *                       delivery:
 *                         type: object
 *                         properties:
 *                           zoneId:
 *                             type: string
 *                             nullable: true
 *                             example: null
 *                           fee:
 *                             type: number
 *                             example: 50
 *                           etaMinutes:
 *                             type: integer
 *                             example: 30
 *                       payment:
 *                         type: object
 *                         properties:
 *                           method:
 *                             type: string
 *                             example: "online"
 *                           paid:
 *                             type: boolean
 *                             example: true
 *                       delivery_boy:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                             nullable: true
 *                             example: null
 *                           name:
 *                             type: string
 *                             nullable: true
 *                             example: null
 *                       customerMissingProducts:
 *                         type: array
 *                         items:
 *                           type: string
 *                         example: []
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2025-09-20T05:27:03.882Z"
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2025-09-20T05:27:03.882Z"
 *                       __v:
 *                         type: integer
 *                         example: 0
 *       401:
 *         description: Unauthorized (login required)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Unauthorized: login required"
 */



/**
 * @swagger
 * /api/orders/user/{userId}/order/{orderId}:
 *   get:
 *     summary: Get a specific order for a user
 *     description: Retrieve a specific order belonging to a user by their userId and orderId.Required token user
 *     tags:
 *       - Orders
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID associated with the order
 *         example: "12"
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique ID of the order
 *         example: "68bfd04f51946c133e00f457"
 *     responses:
 *       200:
 *         description: Order details for the given user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 order:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "68bff6a75bbf804cd76cebf2"
 *                     branch:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                           example: "68bff3a78c49e3c3b4086be1"
 *                         name:
 *                           type: string
 *                           example: "Main Branch"
 *                     items:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           productId:
 *                             type: object
 *                             properties:
 *                               _id:
 *                                 type: string
 *                                 example: "68bff15055a84b930b83b19a"
 *                               name:
 *                                 type: string
 *                                 example: "test"
 *                               price:
 *                                 type: number
 *                                 example: 1249
 *                           productName:
 *                             type: string
 *                             example: "test"
 *                           productCode:
 *                             type: string
 *                             example: "test02"
 *                           qty:
 *                             type: integer
 *                             example: 1
 *                           price:
 *                             type: number
 *                             example: 1249
 *                     total:
 *                       type: number
 *                       example: 1299
 *                     status:
 *                       type: string
 *                       example: "new"
 *                     customer:
 *                       type: object
 *                       properties:
 *                         name:
 *                           type: string
 *                           example: "testing"
 *                         phone:
 *                           type: number
 *                           example: 987654321
 *                         address:
 *                           type: string
 *                           example: "Vijay Nagar, Indore"
 *                         customerId:
 *                           type: integer
 *                           example: 3
 *                         location:
 *                           type: object
 *                           properties:
 *                             type:
 *                               type: string
 *                               example: "Point"
 *                             coordinates:
 *                               type: array
 *                               items:
 *                                 type: number
 *                               example: [77.5946, 12.9716]
 *                     delivery:
 *                       type: object
 *                       properties:
 *                         zoneId:
 *                           type: string
 *                           nullable: true
 *                           example: null
 *                         fee:
 *                           type: number
 *                           example: 50
 *                         etaMinutes:
 *                           type: integer
 *                           example: 30
 *                     payment:
 *                       type: object
 *                       properties:
 *                         method:
 *                           type: string
 *                           example: "cod"
 *                         paid:
 *                           type: boolean
 *                           example: false
 *                     delivery_boy:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                           nullable: true
 *                           example: null
 *                         name:
 *                           type: string
 *                           nullable: true
 *                           example: null
 *                     customerMissingProducts:
 *                       type: array
 *                       items:
 *                         type: string
 *                       example: []
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2025-09-09T09:43:03.978Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2025-09-09T09:43:03.978Z"
 *                     __v:
 *                       type: integer
 *                       example: 0
 *       404:
 *         description: Order not found for this user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Order not found for this user"
 *       401:
 *         description: Unauthorized (login required)
 */


/**
 * @swagger
 * /api/orders/new:
 *   get:
 *     summary: List new orders
 *     description: Retrieve all new orders. **Requires super admin login.**
 *     tags:
 *       - Orders (Admin)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: branch
 *         schema:
 *           type: string
 *         description: Filter orders by branch ID
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of orders to return
 *     responses:
 *       200:
 *         description: List of new orders
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 orders:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Order"
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 * 
 * /api/orders/under-process:
 *   get:
 *     summary: List under-process orders
 *     description: Retrieve all orders with status `under_process`. **Requires super admin login.**
 *     tags:
 *       - Orders (Admin)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: branch
 *         schema:
 *           type: string
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *     responses:
 *       200:
 *         description: List of under-process orders
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 orders:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Order"
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 * 
 * /api/orders/out-for-delivery:
 *   get:
 *     summary: List out-for-delivery orders
 *     description: Retrieve all orders with status `out_for_delivery`. **Requires super admin login.**
 *     tags:
 *       - Orders (Admin)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: branch
 *         schema:
 *           type: string
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *     responses:
 *       200:
 *         description: List of out-for-delivery orders
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 orders:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Order"
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 * 
 * /api/orders/delivered:
 *   get:
 *     summary: List delivered orders
 *     description: Retrieve all delivered orders. **Requires super admin login.**
 *     tags:
 *       - Orders (Admin)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: branch
 *         schema:
 *           type: string
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *     responses:
 *       200:
 *         description: List of delivered orders
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 orders:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Order"
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 * 
 * /api/orders/pending-confirm:
 *   get:
 *     summary: List pending-confirm orders
 *     description: Retrieve orders with status `pending_confirm`. **Requires super admin login.**
 *     tags:
 *       - Orders (Admin)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: branch
 *         schema:
 *           type: string
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *     responses:
 *       200:
 *         description: List of pending-confirm orders
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 orders:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Order"
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 * 
 * /api/orders/delivered-missing:
 *   get:
 *     summary: List delivered orders with missing products
 *     description: Retrieve delivered orders that have missing products. **Requires super admin login.**
 *     tags:
 *       - Orders (Admin)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: branch
 *         schema:
 *           type: string
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *     responses:
 *       200:
 *         description: Delivered orders with missing products
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 orders:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Order"
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 * 
 * /api/orders/cancel-order:
 *   get:
 *     summary: List cancelled orders
 *     description: Retrieve orders with status `cancelled`. **Requires super admin login.**
 *     tags:
 *       - Orders (Admin)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: branch
 *         schema:
 *           type: string
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *     responses:
 *       200:
 *         description: List of cancelled orders
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 orders:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Order"
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 * 
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "68ce3b2778705399639628bd"
 *         branch:
 *           type: object
 *           properties:
 *             _id:
 *               type: string
 *               example: "68bff3a78c49e3c3b4086be1"
 *             name:
 *               type: string
 *               example: "Main Branch"
 *         items:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               productId:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: "68bff15055a84b930b83b19a"
 *                   name:
 *                     type: string
 *                     example: "Samsung Galaxy S24 Ultra"
 *                   price:
 *                     type: number
 *                     example: 124999
 *               productName:
 *                 type: string
 *                 example: "Samsung Galaxy S24 Ultra"
 *               productCode:
 *                 type: string
 *                 example: "SG-S24U-001"
 *               qty:
 *                 type: integer
 *                 example: 1
 *               price:
 *                 type: number
 *                 example: 124999
 *         subTotal:
 *           type: number
 *           example: 1249
 *         discount:
 *           type: number
 *           example: 124.9
 *         total:
 *           type: number
 *           example: 1174.1
 *         status:
 *           type: string
 *           example: "new"
 *         customer:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               example: "Gurjeet"
 *             phone:
 *               type: number
 *               example: 9039140828
 *             address:
 *               type: string
 *               example: "123, MG Road, Delhi"
 *             customerId:
 *               type: integer
 *               example: 2
 *             location:
 *               type: object
 *               properties:
 *                 type:
 *                   type: string
 *                   example: "Point"
 *                 coordinates:
 *                   type: array
 *                   items:
 *                     type: number
 *                   example: [77.209, 28.6139]
 *         delivery:
 *           type: object
 *           properties:
 *             zoneId:
 *               type: string
 *               nullable: true
 *             fee:
 *               type: number
 *               example: 50
 *             etaMinutes:
 *               type: number
 *               example: 30
 *         payment:
 *           type: object
 *           properties:
 *             method:
 *               type: string
 *               example: "online"
 *             paid:
 *               type: boolean
 *               example: true
 *         delivery_boy:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *               nullable: true
 *             name:
 *               type: string
 *               nullable: true
 *         customerMissingProducts:
 *           type: array
 *           items:
 *             type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */


/**
 * @swagger
 * /api/orders/{id}/trackOrder:
 *   get:
 *     summary: Track order status
 *     description: Retrieve the current status and delivery information of an order by its ID. **No authentication required.**
 *     tags:
 *       - Orders
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Order ID to track
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Order tracking information
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 orderId:
 *                   type: string
 *                   example: "68ca7a4dcd9948ea4062268e"
 *                 status:
 *                   type: string
 *                   example: "under_process"
 *                 delivery_boy:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 6
 *                     name:
 *                       type: string
 *                       example: "demo"
 *                     email:
 *                       type: string
 *                       example: "demo22@gmail.com"
 *                 assignedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-09-17T09:09:11.582Z"
 *                 deliveredAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-09-17T09:19:24.188Z"
 *       404:
 *         description: Order not found
 */



/**
 * @swagger
 * /api/orders/{id}/assign:
 *   put:
 *     summary: Assign a delivery boy to an order
 *     description: Assign a delivery boy to an order and update status to `assigned`. **Requires authentication.**
 *     tags:
 *       - Orders (Delivery)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Order ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               delivery_boy:
 *                 type: string
 *                 description: Delivery boy user ID
 *                 example: "68d123abc456def7890abc12"
 *     responses:
 *       200:
 *         description: Order assigned successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Order assigned successfully"
 *                 order:
 *                   $ref: "#/components/schemas/Order"
 *       400:
 *         description: Invalid delivery boy
 *       404:
 *         description: Order not found
 */

/**
 * @swagger
 * /api/orders/{id}/trackOrder:
 *   get:
 *     summary: Track an order
 *     description: Get the current status and delivery boy info of an order. **No authentication required.**
 *     tags:
 *       - Orders
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Order ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Current order status and delivery info
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 orderId:
 *                   type: string
 *                   example: "68ca7a4dcd9948ea4062268e"
 *                 status:
 *                   type: string
 *                   example: "under_process"
 *                 delivery_boy:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 6
 *                     name:
 *                       type: string
 *                       example: "demo"
 *                     email:
 *                       type: string
 *                       example: "demo22@gmail.com"
 *                 assignedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-09-17T09:09:11.582Z"
 *                 deliveredAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-09-17T09:19:24.188Z"
 *       404:
 *         description: Order not found
 */

/**
 * @swagger
 * /api/orders/{id}/confirm:
 *   put:
 *     summary: Confirm order delivery
 *     description: Confirms that an order has been delivered. Updates `status` to `delivered` and sets `deliveredAt`. **Requires authentication.**
 *     tags:
 *       - Orders (Delivery)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Order ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Delivery confirmed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Delivery confirmed"
 *                 order:
 *                   $ref: "#/components/schemas/Order"
 *       404:
 *         description: Order not found
 */


/**
 * @swagger
 * /api/orders/{id}/status:
 *   put:
 *     summary: Update order status
 *     description: Update the status of an order. Can be used by delivery boy or admin depending on permissions. No authentication required if open API.
 *     tags:
 *       - Orders (Delivery)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Order ID to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum: ["pending", "paid", "pending_confirm", "under_process", "packed", "out_for_delivery", "delivered", "cancelled"]
 *                 example: "under_process"
 *     responses:
 *       200:
 *         description: Order status updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 order:
 *                   type: object
 *                   $ref: "#/components/schemas/Order"
 *       400:
 *         description: Invalid status
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid status"
 *       404:
 *         description: Order not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Order not found"
 */



/**
 * @swagger
 * /api/orders/{id}/cancel-order:
 *   post:
 *     summary: Cancel an order by the customer
 *     description: Allows a customer to cancel their own order if it has not been delivered or already cancelled. **Requires customer authentication.**
 *     tags:
 *       - Orders 
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Order ID to cancel
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               reason:
 *                 type: string
 *                 example: "I changed my mind"
 *                 description: Reason for cancelling the order (optional)
 *     responses:
 *       200:
 *         description: Order cancelled successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Order cancelled successfully"
 *                 order:
 *                   $ref: "#/components/schemas/Order"
 *       400:
 *         description: Order already delivered or cancelled
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Order already delivered"
 *       403:
 *         description: Forbidden - user trying to cancel someone else's order
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "You can only cancel your own orders"
 *       404:
 *         description: Order not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Order not found"
 */



/**
 * @swagger
 * /api/orders/{id}/feedback:
 *   post:
 *     summary: Submit feedback for an order (after delivery)
 *     description: Allows the customer to submit detailed feedback for their delivered order. **Requires user authentication.**
 *     tags:
 *       - Orders
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Order ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               reason:
 *                 type: string
 *                 example: "Product arrived late"
 *               serviceRating:
 *                 type: integer
 *                 minimum: 1
 *                 maximum: 5
 *                 example: 4
 *               qualityRating:
 *                 type: integer
 *                 minimum: 1
 *                 maximum: 5
 *                 example: 5
 *               packagingRating:
 *                 type: integer
 *                 minimum: 1
 *                 maximum: 5
 *                 example: 3
 *               deliveryRating:
 *                 type: integer
 *                 minimum: 1
 *                 maximum: 5
 *                 example: 4
 *               productSuggestion:
 *                 type: string
 *                 example: "Include more color options"
 *     responses:
 *       200:
 *         description: Feedback submitted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Feedback submitted successfully"
 *                 feedback:
 *                   type: object
 *                   properties:
 *                     reason:
 *                       type: string
 *                     serviceRating:
 *                       type: integer
 *                     qualityRating:
 *                       type: integer
 *                     packagingRating:
 *                       type: integer
 *                     deliveryRating:
 *                       type: integer
 *                     totalRating:
 *                       type: integer
 *                     productSuggestion:
 *                       type: string
 *                     submittedAt:
 *                       type: string
 *                       format: date-time
 *       400:
 *         description: Bad request (invalid ratings or order not delivered)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Feedback can only be given after delivery"
 *       403:
 *         description: Forbidden (user tries to feedback someone else's order)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "You can only give feedback for your own orders"
 *       401:
 *         description: Unauthorized (missing or expired token)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Unauthorized"
 *                 err:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "TokenExpiredError"
 *                     message:
 *                       type: string
 *                       example: "jwt expired"
 *                     expiredAt:
 *                       type: string
 *                       format: date-time
 */



/**
 * @swagger
 * /api/orders/user/{userId}:
 *   get:
 *     summary: Get all orders of a specific user
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: List of orders for the user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 orders:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       branch:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                           name:
 *                             type: string
 *                       items:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             productId:
 *                               type: object
 *                               properties:
 *                                 _id:
 *                                   type: string
 *                                 productName:
 *                                   type: string
 *                                 productCode:
 *                                   type: string
 *                             qty:
 *                               type: number
 *                             price:
 *                               type: number
 *                       total:
 *                         type: number
 *                       status:
 *                         type: string
 *                       feedback:
 *                         type: object
 *                         nullable: true
 *                         properties:
 *                           reason:
 *                             type: string
 *                           serviceRating:
 *                             type: number
 *                           qualityRating:
 *                             type: number
 *                           packagingRating:
 *                             type: number
 *                           deliveryRating:
 *                             type: number
 *                           totalRating:
 *                             type: number
 *                           productSuggestion:
 *                             type: string
 *                           submittedAt:
 *                             type: string
 *                             format: date-time
 *       401:
 *         description: Unauthorized (token missing or expired)
 *       404:
 *         description: No orders found
 */


/**
 * @swagger
 * /api/orders/{id}/report-missing:
 *   post:
 *     summary: Report missing products for an order
 *     description: Allows a user to report missing products for their own delivered order. Each product can be reported only once.
 *     tags:
 *       - Orders
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Order ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               missingProducts:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productId:
 *                       type: string
 *                       description: Product ID of the missing product
 *                     quantity:
 *                       type: integer
 *                       default: 1
 *                     note:
 *                       type: string
 *                       description: Optional note explaining what is missing
 *             example:
 *               missingProducts:
 *                 - productId: "68bff15055a84b930b83b19a"
 *                   quantity: 1
 *                   note: "Product box was empty"
 *     responses:
 *       200:
 *         description: Missing products reported successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Missing products reported successfully"
 *                 missingProducts:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       productId:
 *                         type: string
 *                       quantity:
 *                         type: integer
 *                       note:
 *                         type: string
 *                       reportedAt:
 *                         type: string
 *                         format: date-time
 *       400:
 *         description: Invalid request or product already reported
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "All products have already been reported"
 *       403:
 *         description: User trying to report missing products for another user’s order
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "You can only report missing products for your own orders"
 *       404:
 *         description: Order not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Order not found"
 */
