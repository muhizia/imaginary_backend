// Update with your config settings.
// require('dotenv').config({ path: '/home/nodejs/ubutumwa/.env' });
require('dotenv').config({ path: '/Users/muhizi/Documents/kgl_software/.env' });
module.exports = {
    development: {
        client: 'postgresql',
        connection: {
            database: process.env.DATABASE,
            user: process.env.USER,
            password: null
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'migrations'
        }
    },
    production: {
        client: 'postgresql',
        connection: {
            host: process.env.HOST,
            port: process.env.DB_PORT,
            database: process.env.DATABASE,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }

};