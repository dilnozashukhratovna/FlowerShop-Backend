const express = require('express');
const router = express.Router();
const customerController = require("../controllers/customer");

// GET ALL CUSTOMERS
router.get("/", customerController.getAllCustomers);

// CREATE A NEW CUSTOMER
router.post("/", customerController.createCustomer)

// GET CUSTOMERS BY ID
router.get("/:id", customerController.getCustomerById)

// UPDATE CUSTOMER BY ID 
router.put("/:id", customerController.updateCustomer)

// DELETE CUSTOMER BY ID
router.delete("/:id", customerController.deleteCustomer)


module.exports = router