const SobornaShop = require('../models/Soborna');

module.exports.getInfo = async function (req, res) {
    try {
        const page = await SobornaShop.find({});
        console.log(page, ' - page')
        res.status(200).json(page);
    } catch (e) {
        res.status(500).json({
            message: "Sorry, we have error on server"
        })
    }
}

