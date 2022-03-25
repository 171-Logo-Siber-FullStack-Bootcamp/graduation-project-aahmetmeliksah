const httpStatus = require('http-status')
const path = require('path')
// const util = require('util')

const addProductImage = (req, res) => {
  try {
    if (!req?.files?.product_image) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send({ message: 'An image needed' })
    } else {
      const extension = path.extname(req.files.product_image.name)
      const filename = `${
        req.files.product_image.name
      }${Date.now()}${extension}`

      const path1 = '../../client/src/assets/images'
      const folderPath = path.join(path1, filename)

      const allowedFileTypes = /png|jpeg|gif/
      if (!allowedFileTypes.test(extension)) {
        throw 'Upload png or jpeg or gif!'
      }
      req.files.product_image.mv(folderPath, (err) => {
        if (err) return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
      })

      res.json({ message: 'Image file uploaded successfully :)' })
      return filename
    }
  } catch (error) {
    console.log(error)
    res.send(500).json({
      message: error,
    })
  }
}

module.exports = { addProductImage }
