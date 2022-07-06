const ProductsModel = require("../models/products");

async function get(req, res) {
  const { id } = req.params;

  let obj = id ? { _id: id } : null;

  const products = await ProductsModel.find(obj);

  res.send(products);
}

async function post(req, res) {
  const { name, brand, price } = req.body;

  const product = new ProductsModel({
    name,
    brand,
    price,
  });

  // console.log(req.body)
  product.save();

  res.send({
    message: "Sucesso ao salvar",
    product: req.body,
  });
}

async function put(req, res) {
  const { id } = req.params;


const product = await ProductsModel.findOneAndUpdate({ _id: id}, req.body, {new: true})

res.send({
    message: 'Produto atualizado com sucesso',
    product,
})

// Atualiza um dado sem retornar o dado
//   const product = await ProductsModel.findOne({ _id: id });

//   await product.updateOne(req.body);

//   res.send({
//     message: "Atualizado com sucesso",
//     product,
//   });
}

module.exports = {
  get,
  post,
  put,
};
