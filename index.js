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

const port = process.env.PORT || 5000

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get('/', (req, res) => {
    res.send({ "Hello": "world" })
})

app.use('/v/', require('./routes/index'))



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
