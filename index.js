require('dotenv').config();
const express = require('express')
const app = express()
const mongoose = require( 'mongoose' )
// mongoose.connect("mongodb://127.0.0.1:27017/user-roles-perm")
const port = process.env.SERVER_PORT | 5000

app.use(express.static('public'));



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))