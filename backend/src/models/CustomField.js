const { DataTypes } = require("sequelize");
const sequelize = require("../db/db");
const Inventory = require("./Inventory");

const CustomField = sequelize.define("CustomField", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  type: {
    type: DataTypes.ENUM("text", "multiline", "number", "image", "boolean"),
    allowNull: false,
  },
  showInTable: { type: DataTypes.BOOLEAN, defaultValue: false },
});

Inventory.hasMany(CustomField, { as: "fields", foreignKey: "inventoryId" });
CustomField.belongsTo(Inventory, { foreignKey: "inventoryId" });

module.exports = CustomField;
