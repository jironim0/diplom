const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "ADMIN"},
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const TypeInfo = sequelize.define('type_info', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    level: {type: DataTypes.STRING, allowNull: false},
    data: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    place: {type: DataTypes.STRING, allowNull: false},
    main: {type: DataTypes.STRING, allowNull: false},
    pplcount: {type: DataTypes.INTEGER, allowNull: false},
})

Type.hasMany(TypeInfo, {as: 'info'})
TypeInfo.belongsTo(Type)

module.exports = {
    User,
    Type,
    TypeInfo
}