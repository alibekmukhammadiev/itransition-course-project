const Inventory = require("../models/Inventory");

const createInventory = async (req, res) => {
  try {
    const { title, description, category, imageUrl, public } = req.body;

    const inventory = await Inventory.create({
      title,
      description,
      category,
      imageUrl,
      public,
      creatorId: req.user.id,
    });

    res.json(inventory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getMyInventories = async (req, res) => {
  try {
    const inventories = await Inventory.findAll({
      where: { creatorId: req.user.id },
    });
    res.json(inventories);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getInventory = async (req, res) => {
  try {
    const inventory = await Inventory.findByPk(req.params.id);
    if (!inventory) return res.status(404).json({ error: "Not found" });
    res.json(inventory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateInventory = async (req, res) => {
  try {
    const inventory = await Inventory.findByPk(req.params.id);

    if (!inventory) return res.status(404).json({ error: "Not found" });
    if (inventory.creatorId !== req.user.id && req.user.role !== "Admin")
      return res.status(403).json({ error: "Not allowed" });

    await inventory.update(req.body);
    res.json(inventory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteInventory = async (req, res) => {
  try {
    const inventory = await Inventory.findByPk(req.params.id);

    if (!inventory) return res.status(404).json({ error: "Not found" });
    if (inventory.creatorId !== req.user.id && req.user.role !== "Admin")
      return res.status(403).json({ error: "Not allowed" });

    await inventory.destroy();
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createInventory,
  getMyInventories,
  getInventory,
  updateInventory,
  deleteInventory,
};
