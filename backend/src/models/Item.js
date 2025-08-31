const { DataTypes } = require("sequelize");
const sequelize = require("../db/db");
const Inventory = require("./Inventory");
const User = require("./User");

const Item = sequelize.define("Item", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  customId: { type: DataTypes.STRING, allowNull: false },
});

Inventory.hasMany(Item, { as: "items", foreignKey: "inventoryId" });
Item.belongsTo(Inventory, { foreignKey: "inventoryId" });

User.hasMany(Item, { as: "createdItems", foreignKey: "createdBy" });
Item.belongsTo(User, { as: "creator", foreignKey: "createdBy" });

module.exports = Item;
