const express = require('express');
const router = express.Router();
const flowerController = require("../controllers/flower")

// GET ALL FLOWERS
router.get("/", flowerController.getAllFlowers);

// GET A SINGLE FLOWER BY ID
router.get("/:id", flowerController.getFlowerById);

// CREATE A NEW FLOWER
router.post("/", flowerController.createFlower);

// UPDATE A FLOWER
router.put("/:id", flowerController.updateFlower);

// DELETE A FLOWER
router.delete("/:id", flowerController.deleteFlower);



module.exports = router