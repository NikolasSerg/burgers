const Shop = require('../models/Shop');

module.exports.getAll = async function (req, res) {
    try {
        const page = await Shop.find({});
        res.status(200).json(page);
    } catch (e) {
        res.status(500).json({
            message: "вибачте дядку шось то стало з getAll pageControler"
        })
    }
}
module.exports.create = async function (req, res) {
    console.log(req.body, ' --req.body');
    let shop = new Shop({
        address: req.body.address,
        url: req.body.url
    })
    try {
        await shop.save();
        res.status(200).json(shop)

    } catch (e) {
        res.status(500).json({
            message: "вибачте дядку шось то стало з create pageControler"
        })
    }
}