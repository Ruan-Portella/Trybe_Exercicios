module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        age: DataTypes.INTEGER,
    },
    {
        timestamps: false,
        underscored: true,
    },
);
    return User;
};