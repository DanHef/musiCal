const uuid = require('uuid/v4');

module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: type.UUID,
            defaultValue: uuid()
        },
        username: type.STRING,
        password: type.STRING,
        firstname: type.STRING,
        lastname: type.STRING,
        email: type.STRING,
        role: {
            type: type.INTEGER,
            validate: {
                min: 1,
                max: 3
            }
        }
    });
};