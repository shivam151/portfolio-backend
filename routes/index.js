const express = require('express');
const router = express.Router();
const Message = require('../models/Message')



router.post('/msg', async (req, res) => {
    try {
        const { name, email, message, subject } = req.body;
        if (!email || !message || !subject || !name) {
            res.status(402).json({ error: "Data is missing" });
        }

        const messgae = await Message.create({
            name: name,
            email: email,
            message: message,
            subject: subject,
        }).then((u) => {
            console.log("Message created Succesfully");
            res.status(200).send({ success: true });
        }).catch((err) => {
            res.status(500).send({ success: false, errmsg: err });
        })
    } catch (err) {
        res.status(500).send({ success: false, errmsg: err });
    }

})


module.exports = router;