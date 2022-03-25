// IMPORT SERVICES
const {
  getAllProductsService,
  addProductService,
  findProductByIdService,
  removeProductByIdService,
  updateProductByIdService,
} = require('../services/productsService')
const { addProductImage } = require('../utils/ProductImageHelper')
// const logger = '../loggger/productsLogger.js'

// ADD A PRODUCT
const addProductController = async (req, res) => {
  try {
    const filename = addProductImage(req)
    const result = await addProductService(req, res, filename)
    res.status(201).send(result)
  } catch (error) {
    console.log(error)
  }
}

// DISPLAY ALL PRODUCTS
const getAllProductsController = async (req, res) => {
  const result = await getAllProductsService(req, res)
  //    await logger.log({
  //     level: 'info',
  //     message: 'Hello distributed log files!'
  //   })
  res.status(200).send(result)
}

// DISPLAY A PRODUCT BY ID
const findProductByIdController = async (req, res) => {
  const result = await findProductByIdService(req, res)
  res.status(200).send(result)
}

// REMOVE A PRODUCT BY ID
const removeProductByIdController = async (req, res) => {
  const result = await removeProductByIdService(req, res)
  res.status(200).send(result)
  console.log(`Product with id ${req.params.id} is REMOVED!`)
}

// UPDATE A PRODUCT BY ID
const updateProductByIdController = async (req, res) => {
  const result = await updateProductByIdService(req, res)
  res.status(200).send({ result, message: 'Product UPDATED' })
}

module.exports = {
  getAllProductsController,
  addProductController,
  findProductByIdController,
  removeProductByIdController,
  updateProductByIdController,
}
