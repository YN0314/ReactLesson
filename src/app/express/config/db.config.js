module.exports = {
    HOST: 'db',
    USER: 'sample',
    PASSWORD: 'sample',
    DB: 'sample_app',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};