const { DataTypes } = require("sequelize");
const sequelize = require("../db/db");
const User = require("./User");

const Inventory = sequelize.define("Inventory", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: true },
  category: {
    type: DataTypes.ENUM("Equipment", "Furniture", "Book", "Other"),
    allowNull: false,
    defaultValue: "Other",
  },
  imageUrl: { type: DataTypes.STRING }, // optional
  public: { type: DataTypes.BOOLEAN, defaultValue: false }, // public inventory
});

/// Relations
Inventory.belongsTo(User, { as: "creator", foreignKey: "creatorId" });
User.hasMany(Inventory, { as: "inventories", foreignKey: "creatorId" });

module.exports = Inventory;
