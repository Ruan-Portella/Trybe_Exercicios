const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        fullName: DataTypes.STRING,
        email: DataTypes.STRING,
    });
    (async () => { 
        await sequelize.sync({ force: true });
        User.create({
            fullName: 'Sara',
            email: 'sar@email.com',
        });
        User.create({
            fullName: 'Ruan',
            email: 'ruan@email.com',
        });
    })();
    return User;
};

module.exports = UserModel;