const ENV = process.env.NODE_ENV || 'development';
const config = require('../knexfile')(ENV);

module.exports = require('knex')(config);
