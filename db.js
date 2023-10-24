const dotenv = require('dotenv');
dotenv.config();

const { Pool } = require('pg');
const itemsPool = new Pool({
    connectionString: process.env.DBConnLink,
    ssl: {
        rejectUnauthorized: false
    }
});

console.log(itemsPool);

module.exports = itemsPool;



// const Pool = require('pg').Pool;
// const pool = new Pool({
//     user: 'postgres',
//     password: 'admin1234',
//     host: 'localhost',
//     port: 5432,
//     database: 'test_db'

// });



// //https://sodiqfarhan.hashnode.dev/building-a-nodejs-app-with-postgres-database-on-render-a-step-by-step-guide-beginner-friendly

// module.exports = pool;