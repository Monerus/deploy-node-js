import GiftModel from '../models/Gift.js';

export const createGift = async (req, res) => {
    try {
        const doc = new GiftModel({
            text: req.body.text,
            price: req.body.price,
            image: req.body.image,
        })
        const catalog = await doc.save()
        res.json({
            catalog,
            message: 'Товар добавлен'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Не удалось создать товар'
        })
    }
}

export const getAllGift = async (req, res) => {
    try {
       const catalogs = await GiftModel.find()
       res.json(catalogs)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Не удалось показать статьи'
        })
    }
}