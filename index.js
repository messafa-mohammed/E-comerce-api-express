require('dotenv').config();
const express = require('express')
const app = express()
const mongoose = require( 'mongoose' )
mongoose.connect("mongodb://127.0.0.1:27017/hisoka").then(() => {
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    
}).catch((err) =>{console.error(err)});

const port = process.env.SERVER_PORT | 5000

app.use(express.json()) // Middleware para parsear
app.use(express.static('public'));


//auth route
const authRoute = require( './routes/authRoute' );
app.use('/api' , authRoute);

//admin route
const adminRoute = require( './routes/adminRoute' );
app.use('/api/admin' , adminRoute);

//common route
const commonRoute = require( './routes/commonRoute' );
app.use('/api' , commonRoute);



app.get('/', (req, res) => res.send('Hello World!'))