const express = require("express");
const router = express.Router();

// IMPORT FLOWER ROUTES
const flowerRoutes = require("./flower")

// IMPORT CUSTOMER ROUTES
const customerRoutes = require("./customer")

// IMPORT ORDER ROUTES
const orderRoutes = require("./order")


// CALL FLOWER ROUTES
router.use("/flowers", flowerRoutes)

//CALL CUSTOMER ROUTES
router.use("/customers", customerRoutes)

//CALL ORDER ROUTES
router.use("/orders", orderRoutes)


module.exports = router;
