const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://bathulavaishnavi17:23JJ5A0502@in-aws.pgnbz.mongodb.net/max-store?retryWrites=true&w=majority&appName=In-AWS")
const connection = mongoose.connection;

connection.on('connected', () => (console.log("DB Connected")))
connection.on('error', () => (console.log("DB Error")))

module.exports = mongoose

// const db = require('./config/db')