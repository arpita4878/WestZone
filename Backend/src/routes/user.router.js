import express from 'express'
import * as authController from '../controllers/authController.js'
import * as UserController from '../controllers/userController.js'

const router= express.Router()

router.post("/register",authController.register)
router.post("/login", authController.login);
router.post("/refresh-token", authController.refreshToken);

router.post("/forgot-password", UserController.forgotPassword);
router.post("/reset/:token", UserController.resetPassword);
router.post("/change-password",UserController.changePassword);

router.get('/getdata', UserController.fetch); 
router.patch('/updateUser', UserController.update); 
router.delete('/delete', UserController.deleteUser); 

router.get("/get-customer/:phone",UserController.getCustomerByPhone)

router.get("/delivery-boys", UserController.getDeliveryBoys);


export default router;