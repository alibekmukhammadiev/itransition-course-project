const { DataTypes } = require("sequelize");
const sequelize = require("../db/db");
const Item = require("./Item");
const CustomField = require("./CustomField");

const ItemFieldValue = sequelize.define("ItemFieldValue", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  value: { type: DataTypes.TEXT },
});

Item.hasMany(ItemFieldValue, { as: "fieldValues", foreignKey: "itemId" });
ItemFieldValue.belongsTo(Item, { foreignKey: "itemId" });

CustomField.hasMany(ItemFieldValue, {
  as: "values",
  foreignKey: "customFieldId",
});
ItemFieldValue.belongsTo(CustomField, { foreignKey: "customFieldId" });

module.exports = ItemFieldValue;
