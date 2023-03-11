const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Country }) {
      // define association here
      this.hasMany(Country, { foreignKey: 'sale_id' });
    }
  }
  Sale.init({
    count: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Sale',
  });
  return Sale;
};
