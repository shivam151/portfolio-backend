const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URL;

mongoose.set("strictQuery", false);
const connectToMongo = () => {
    mongoose.connect(mongoURI).then(data => {
        console.log("Success DB");
    }).catch(err => {
        console.log(err);
    })

}

module.exports = connectToMongo;