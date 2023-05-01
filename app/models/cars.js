'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Cars extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate (models) {
        // define association here
        }
    }
    Cars.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: DataTypes.STRING,
        type: DataTypes.STRING,
        size: DataTypes.STRING,
        rentPerDay: DataTypes.INTEGER,
        owner: DataTypes.INTEGER,
        lastEditedBy: DataTypes.INTEGER,
        deletedBy: DataTypes.INTEGER,
        isDeleted: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Cars'
    })
    return Cars
}
