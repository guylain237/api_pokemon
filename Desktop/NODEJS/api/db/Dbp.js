const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'boss237.com',
    database: 'cousbeldi_bd',
});

module.exports = pool;