const express = require('express');
const router = express.Router();
const orderController = require("../controllers/order")

// ADD ORDER
router.post("/", orderController.createOrder)

// GET ALL ORDERS
router.get("/", orderController.getAllOrders)

// GET ORDER BY ID
router.get("/:id", orderController.getOrderById)

// UPDATE ORDER BY ID 
router.put("/:id", orderController.updateOrder)

// DELETE ORDER BY ID 
router.delete("/:id", orderController.deleteOrder) 

module.exports = router;
