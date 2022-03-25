const express = require('express')
const fileUpload = require('express-fileupload')
const router1 = express.Router() // for sellers
// const router2 = express.Router() for shoppers
// const router3 = express.Router() for admin
// const validate = require('../middlewares/validate')
// const { addProductSchema } = require('../validations/ProductsValidation')

router1.use(fileUpload())

// IMPORT CONTROLLERS
const {
  getAllProductsController,
  addProductController,
  findProductByIdController,
  removeProductByIdController,
  updateProductByIdController,
} = require('../controllers/productsController')

/* Before updating or deleting the product, ask the user if they're sure about it. Warn them that this action cannot be undone ---A feature I will add later--- */

router1.get('/products', getAllProductsController) // display all products
router1.get('/products/:id', findProductByIdController) // display a product by id
router1.delete('/products/:id', removeProductByIdController) // remove a product by id
router1.put('/products/:id', updateProductByIdController) // update a product by id
// add a product
router1
  .route(/*validate(addProductSchema),*/ '/addproduct')
  .post(addProductController)

module.exports = router1
