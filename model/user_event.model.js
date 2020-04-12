module.exports = (sequelize, type) => {
    return sequelize.define('user_event', {
        userId: {
            type: type.UUID,
            primaryKey: true,
        },
        eventId: {
            type: type.UUID,
            primaryKey: true,
        },
        status: type.INTEGER,
    });
};