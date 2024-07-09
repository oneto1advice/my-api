const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create a new user
router.post('/user', userController.createUser);

// Get all users
router.get('/users', userController.getUsers);

// Get a user by ID
router.get('/users/:id', userController.getUser);

// Update a user by ID
router.put('/users/:id', userController.updateUser);

// Delete a user by ID
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
