// config.js
const dotenv = require('dotenv');
const path = require('path');
console.log(path.join(__dirname, './.env.' + process.env.NODE_ENV));
dotenv.config({
  path: path.join(__dirname, './.env.' + process.env.NODE_ENV)
});
console.log('process.env.NODE_ENV');
console.log(process.env.NODE_ENV);
module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  DB_Connection:process.env.DB_Connection
  //db_connection:process.env.DB_Connection,
}