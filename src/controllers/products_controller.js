const ProductsModel = require('../models/products')

async function get(req, res){

    const { id } = req.params

    let obj = id ? { _id: id} : null


    const products = await ProductsModel.find(obj)

    res.send(products)
}

async function post(req, res) {
    const {
        name,
        brand,
        price,
    } = req.body

    const product = new ProductsModel({
        name,
        brand,
        price,
    })

    // console.log(req.body)
    product.save()

    res.send({
        message: "Sucesso ao salvar",
        product: req.body
    })
}

module.exports = {
    get,
    post,
}