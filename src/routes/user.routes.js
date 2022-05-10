// Default settings
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// All /user routes
router.route('/api/user')
    // Get all users
    .get(userController.getAllUsers)
    // Create an user + create validation
    .post(userController.validateCreateUser, userController.addUser);

// Get user profile
router.get('/api/user/profile', userController.getUserProfile);

// All /user/:userId routes
router.route('/api/user/:userId')
    // Get specific user on userId
    .get(userController.getUserById)
    // Update specific user on userId + update validation
    .put(userController.validateUpdateUser, userController.updateUserById)
    // Delete specific user on userId
    .delete(userController.deleteUserById);

// Export the userRouter
module.exports = router;