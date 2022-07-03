'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.job,{
        foreignKey:'companyId',
      })
    }
  }
  company.init({
    name:{ 
      type:DataTypes.STRING,
     allowNull:false,
     unique: true,
    },
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'company',
  });
  return company;
};