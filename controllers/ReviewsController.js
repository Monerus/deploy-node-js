import ReviewsModel from '../models/Reviews.js'

export const createReview = async (req, res) => {
    try {
        const doc = new ReviewsModel({   
            text: req.body.text,
            name: req.body.name,
            city: req.body.city,
            image: req.body.image
        })
        const review = await doc.save()
        res.json({
            review,
            message: 'Отзыв добавлен'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Не удалось написать отзыв'
        })
    }
}

export const getReviews = async (req, res) => {
    try {
       const reviews = await ReviewsModel.find()
       res.json(reviews)
    } catch (error) {
        res.status(500).json({
            message: 'Не удалось показать отзывы'
        })
    }
}