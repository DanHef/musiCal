const Sequelize = require('sequelize');
const EventModel = require('./event.model');
const UserModel = require('./user.model');
const UserEventModel = require('./user_event.model');


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});

const EventEntity = EventModel(sequelize, Sequelize);
const UserEntity = UserModel(sequelize, Sequelize);
const UserEventEntity = UserEventModel(sequelize, Sequelize);

UserEntity.belongsToMany(EventEntity, { through: 'user_event'});
EventEntity.belongsToMany(UserEntity, { through: 'user_event'});

sequelize.sync();

module.exports = {
    EventEntity,
    UserEntity,
    UserEventEntity,
}