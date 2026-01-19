const express = require("express");
const validateitem= require("../middleware/validateitem");
const {addItems,updateitem,allitem,itembyId,getItems}=require("../controllers/itemsController");
const ownercheck= require("../middleware/ownershipcheck");
const protect=require("../middleware/jwtprotect");
const connectdb=require("../models/item");
const itemdata = require("../middleware/itemdata");
const route=express.Router();

/**
 * @swagger
 * /api/items/add:
 *   post:
 *     summary: Add a new item
 *     tags: [Items]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - ItemName
 *             properties:
 *               ItemName:
 *                 type: string
 *                 example: Laptop
 *               Description:
 *                 type: string
 *                 example: good product
 *               Price:
 *                 type: number
 *                 example: 40
 *               Stock:
 *                 type: number
 *                 example: 5
 *     responses:
 *       200:
 *         description: Item added successfully
 *       400:
 *         description: Item already exists
 */

route.post('/add',protect,validateitem,addItems);
/**
 * @swagger
 * /api/items/{id}:
 *   patch:
 *     summary: Update an item by ID
 *     tags: [Items]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Item ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ItemName:
 *                 type: string
 *                 example: Updated Laptop
 *     responses:
 *       200:
 *         description: Item updated successfully
 *       404:
 *         description: Item not found
 */

route.patch('/:id',protect,ownercheck,updateitem);
/**
 * @swagger
 * /api/items/itemlist:
 *   get:
 *     summary: Get all items
 *     tags: [Items]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of items
 */

route.get('/itemlist',protect,allitem);
route.get('/getItems',itemdata,getItems);
/**
 * @swagger
 * /api/items/{id}:
 *   get:
 *     summary: Get item by ID
 *     tags: [Items]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Item ID
 *     responses:
 *       200:
 *         description: Item fetched successfully
 *       404:
 *         description: Item not found
 */

route.get('/:id',protect,itembyId);

module.exports=route;
