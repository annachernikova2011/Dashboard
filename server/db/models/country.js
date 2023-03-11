const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Sale }) {
      // define association here
      this.belongsTo(Sale, { foreignKey: 'sale_id' });
    }
  }
  Country.init({
    name: DataTypes.STRING,
    sale_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Country',
  });
  return Country;
};
