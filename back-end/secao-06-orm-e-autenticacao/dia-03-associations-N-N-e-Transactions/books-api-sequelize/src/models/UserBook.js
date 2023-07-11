module.exports = (sequelize, DataTypes) => {
    const UserBook = sequelize.define('UserBook', {},
    {
        timestamps: false,
        underscored: true,
        tableName: 'users_books',
    },
);

    UserBook.associate = (models) => {
        models.Book.belongsToMany(models.User, {
            as: 'users',
            through: UserBook,
            foreignKey: 'bookId',
            otherKey: 'userId',
        });
        models.User.belongsToMany(models.Book, {
            as: 'books',
            through: UserBook,
            foreignKey: 'userId',
            otherKey: 'bookId',
        });
    };
    
    return UserBook;
};