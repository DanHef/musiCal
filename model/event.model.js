const uuid = require('uuid/v4');

module.exports = (sequelize, type) => {
    return sequelize.define('event', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: type.UUID,
            defaultValue: uuid()
        },
        fromDate: type.DATE,
        toDate: type.DATE,
        description: type.STRING,
        type: {
            type: type.INTEGER,
            validate: {
                min: 1,
                max: 2
            }
        }
    });
};