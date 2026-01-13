const express = require('express');
const { createUser } = require("../controllers/createUser");
const validInput = require("../middleware/validInput");
const hashpas = require("../middleware/hashpas");
const { Login } = require("../controllers/login");
const connectdb = require("../models/user");
const protect = require("../middleware/jwtprotect")

const router = express.Router();

/**
 * @swagger
 * /api/users/Signup:
 *   post:
 *     summary: Register a new user and return JWT token
 *     tags: [Users]
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
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: StrongPassword123
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Invalid input data
 *       409:
 *         description: User already exists
 */


router.post('/Signup', validInput, hashpas, createUser);
/**
 * @swagger
 * /api/users/Login:
 *   post:
 *     summary: Login user 
 *     tags: [Users]
 *     security:
 *         - bearerAuth: []
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
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: StrongPassword123
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Invalid credentials or missing fields
 *       401:
 *         description: Unauthorized
 */
router.post('/Login', validInput, Login);


module.exports = router;