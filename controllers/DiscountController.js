import DiscountModel from '../models/Discount.js'

export const create = async (req, res) => {
    try {
        const doc = new DiscountModel({
            title: req.body.title,
            text: req.body.text,
            image: req.body.image
        })
        const discount = await doc.save()
        res.json({
            discount,
            message: 'Акция добавлена'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Не удалось создать товар'
        })
    }
}

export const getAll = async (req, res) => {
    try {
       const discounts = await DiscountModel.find()
       res.json(discounts)
    } catch (error) {
        res.status(500).json({
            message: 'Не удалось показать статьи'
        })
    }
}

export const getOne = async (req, res) => {
    try {
        const discount = await DiscountModel.findOne({
            _id: req.params.id
        })
        res.json(discount)
    } catch (error) {
        console.log(error)
    }
}