/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Register a new user
 *     description: >
 *       Creates a new user with role-based validation.  
 *       - Valid roles: `super_admin`, `branch_manager`, `staff`, `delivery_boy`, `supermarket_customer`, `online_customer`  
 *       - `online_customer` requires **email**, **password**, and **confirmPassword**.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - surname
 *               - phone
 *               - role
 *             properties:
 *               designation:
 *                 type: string
 *                 example: "MR"
 *               name:
 *                 type: string
 *                 example: "John"
 *               surname:
 *                 type: string
 *                 example: "Doe"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "johndoe@example.com"
 *               phone:
 *                 type: string
 *                 example: "+911234567890"
 *               birthday:
 *                 type: string
 *                 format: date
 *                 example: "1995-05-10"
 *               nationality:
 *                 type: string
 *                 example: "India"
 *               password:
 *                 type: string
 *                 example: "123456"
 *               confirmPassword:
 *                 type: string
 *                 example: "123456"
 *               role:
 *                 type: string
 *                 enum:
 *                   - super_admin
 *                   - branch_manager
 *                   - staff
 *                   - delivery_boy
 *                   - supermarket_customer
 *                   - online_customer
 *                 example: "delivery_boy"
 *               branch:
 *                 type: string
 *                 example: "B001"
 *     responses:
 *       "201":
 *         description: User registered successfully
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
 *                   example: User registered successfully
 *                 code:
 *                   type: integer
 *                   example: 201
 *                 data:
 *                   type: object
 *                   example:
 *                     _id: 1
 *                     name: John
 *                     surname: Doe
 *                     role: delivery_boy
 *                     email: johndoe@example.com
 *       "400":
 *         description: Bad Request - Invalid input
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Invalid role selected.
 *                 code:
 *                   type: integer
 *                   example: 400
 *       "500":
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: User registration failed
 *                 code:
 *                   type: integer
 *                   example: 500
 */


/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: User login
 *     description: >
 *       Authenticates a user and returns JWT access and refresh tokens.  
 *       - `supermarket_customer` role **cannot** login (blocked by business rule).  
 *       - Requires valid `email` and `password`.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "demo@gmail.com"
 *               password:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       "200":
 *         description: Login successful
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
 *                   example: Login successful
 *                 code:
 *                   type: integer
 *                   example: 200
 *                 data:
 *                   type: object
 *                   properties:
 *                     accessToken:
 *                       type: string
 *                       example: "eyJhbGciOiJIUzI1NiIsInR..."
 *                     refreshToken:
 *                       type: string
 *                       example: "eyJhbGciOiJIUzI1NiIsInR5c..."
 *                     user:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: integer
 *                           example: 2
 *                         email:
 *                           type: string
 *                           example: "demo@gmail.com"
 *                         role:
 *                           type: string
 *                           example: "super_admin"
 *       "400":
 *         description: Password missing
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Password is required for this role
 *                 code:
 *                   type: integer
 *                   example: 400
 *       "401":
 *         description: Invalid credentials
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Invalid email or password
 *                 code:
 *                   type: integer
 *                   example: 401
 *       "403":
 *         description: Forbidden (Supermarket customers cannot login)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Supermarket customers cannot login. Their data is updated only at billing.
 *                 code:
 *                   type: integer
 *                   example: 403
 *       "500":
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Login failed"
 *                 code:
 *                   type: integer
 *                   example: 500
 */


/**
 * @swagger
 * /api/users/forgot-password:
 *   post:
 *     summary: Forgot password (request reset link)
 *     description: >
 *       Sends a password reset link to the user's email.  
 *       - Generates a `resetToken` and stores it in the database.  
 *       - Returns the reset URL (usually sent via email in production).  
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "demo@gmail.com"
 *     responses:
 *       "200":
 *         description: Password reset link generated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Password reset link sent
 *                 resetUrl:
 *                   type: string
 *                   example: "http://localhost:5000/api/users/reset/abc123resetToken"
 *       "404":
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User not found
 */



/**
 * @swagger
 * /api/users/change-password:
 *   post:
 *     summary: Change user password
 *     description: >
 *       Allows a user to change their password by providing their email (as userId), old password, and new password.  
 *       - Validates old password.  
 *       - Updates to the new password if correct.  
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - oldPassword
 *               - newPassword
 *             properties:
 *               userId:
 *                 type: string
 *                 description: User's email address
 *                 example: "demo@gmail.com"
 *               oldPassword:
 *                 type: string
 *                 example: "123456"
 *               newPassword:
 *                 type: string
 *                 example: "1234567"
 *     responses:
 *       "200":
 *         description: Password changed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Password changed successfully
 *       "400":
 *         description: Old password incorrect
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Old password incorrect
 *       "404":
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User not found
 *       "500":
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Something went wrong
 */



/**
 * @swagger
 * /api/users/updateUser:
 *   put:
 *     summary: Update a user
 *     description: >
 *       Updates user details based on the given condition object and content object.  
 *       - `condition_obj` specifies which user(s) to update (e.g., by email or id).  
 *       - `content_obj` specifies the fields to update.  
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - condition_obj
 *               - content_obj
 *             properties:
 *               condition_obj:
 *                 type: object
 *                 description: Conditions to find the user
 *                 example:
 *                   email: "test@gmail.com"
 *               content_obj:
 *                 type: object
 *                 description: Fields to update
 *                 example:
 *                   name: "demo"
 *     responses:
 *       "200":
 *         description: User updated successfully
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
 *                   example: User updated
 *                 code:
 *                   type: integer
 *                   example: 200
 *                 data:
 *                   type: object
 *                   description: The updated user document
 *                   example:
 *                     _id: 123
 *                     email: test@gmail.com
 *                     name: demo
 *       "400":
 *         description: Invalid request body
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Invalid update request
 *                 code:
 *                   type: integer
 *                   example: 400
 *       "404":
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: User not found
 *                 code:
 *                   type: integer
 *                   example: 404
 *       "500":
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Server error
 *                 code:
 *                   type: integer
 *                   example: 500
 */


/**
 * @swagger
 * /api/users/delete:
 *   delete:
 *     summary: Delete a user
 *     description: Deletes a user by email.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 example: test22@gmail.com
 *     responses:
 *       "200":
 *         description: User deleted successfully
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
 *                   example: User deleted successfully
 *                 code:
 *                   type: integer
 *                   example: 200
 *       "400":
 *         description: Missing email in request
 *       "404":
 *         description: User not found
 *       "500":
 *         description: Internal server error
 */


/**
 * @swagger
 * /api/users/getdata:
 *   get:
 *     summary: Fetch all users
 *     description: Returns a list of all users with details.
 *     tags:
 *       - Users
 *     responses:
 *       "200":
 *         description: Users fetched successfully
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
 *                   example: Users fetched successfully
 *                 code:
 *                   type: integer
 *                   example: 200
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: 3
 *                       name:
 *                         type: string
 *                         example: testing
 *                       email:
 *                         type: string
 *                         example: test@gmail.com
 *                       role:
 *                         type: string
 *                         example: online_customer
 */


/**
 * @swagger
 * /api/users/get-customer/{phone}:
 *   get:
 *     summary: Get customer details by phone number
 *     description: >
 *       Used by staff at billing counter to fetch customer details.  
 *       Only fetches users with role `supermarket_customer` or `online_customer`.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: phone
 *         required: true
 *         schema:
 *           type: string
 *         example: "7923456776"
 *     responses:
 *       "200":
 *         description: Customer details fetched successfully
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
 *                   example: Customer details fetched successfully
 *                 code:
 *                   type: integer
 *                   example: 200
 *                 data:
 *                   type: object
 *                   example:
 *                     _id: 3
 *                     name: "testing"
 *                     surname: "test"
 *                     phone: "7923456776"
 *                     role: "supermarket_customer"
 *                     points: 20
 *       "404":
 *         description: Customer not found
 *       "400":
 *         description: Phone number missing
 *       "500":
 *         description: Server error
 */


/**
 * @swagger
 * /api/users/delivery-boys:
 *   get:
 *     summary: Get all delivery boys
 *     description: Fetch all users who have the role **delivery_boy**. Useful for assigning orders or tracking delivery staff.
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Successfully fetched delivery boys
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 count:
 *                   type: integer
 *                   example: 2
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: integer
 *                         example: 1001
 *                       designation:
 *                         type: string
 *                         example: Delivery Staff
 *                       name:
 *                         type: string
 *                         example: Ramesh
 *                       surname:
 *                         type: string
 *                         example: Kumar
 *                       phone:
 *                         type: string
 *                         example: "+919876543210"
 *                       role:
 *                         type: string
 *                         example: delivery_boy
 *                       branch:
 *                         type: string
 *                         example: Downtown Branch
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: 2025-09-15T10:00:00.000Z
 *       404:
 *         description: No delivery boys found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: No delivery boys found
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Internal Server Error
 */
