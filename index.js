const express = require('express')
const cors = require('cors')
require('dotenv').config();
const Message = require('./models/Message');

// database connection
const connectToMongo = require('./db');
connectToMongo();


const app = express()

// middle ware to fetch data
app.use(express.json())
app.use(cors())

const port = 3000

app.use('/', require('./routes/index'))


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
