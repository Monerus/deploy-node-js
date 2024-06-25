import CatalogModel from '../models/Catalog.js';

export const createCatalog = async (req, res) => {
    try {

        const doc = new CatalogModel({
            title: req.body.title,
            text: req.body.text,
            size: req.body.size,
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

export const getAllCatalog = async (req, res) => {
    try {
       const catalogs = await CatalogModel.find()
       res.json(catalogs)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Не удалось показать статьи'
        })
    }
}

export const getOneCatalog = async (req, res) => {
    try {
        const catalog = await CatalogModel.findOne(
            {
                _id: req.params.id
            },
           
       )
        res.json(catalog)
    } catch (error) {
        console.log(error)
    }
}