const express = require("express");

const {
  createInventory,
  getMyInventories,
  getInventory,
  updateInventory,
  deleteInventory,
} = require("../controllers/inventoryController");

const router = express.Router();

router.post("/", createInventory); // create new inventory
router.get("/my", getMyInventories); // my inventories
router.get("/:id", getInventory); // single inventory
router.put("/:id", updateInventory); // edit
router.delete("/:id", deleteInventory); // delete

module.exports = router;
