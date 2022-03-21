const axios = require('axios')

const addProduct = async () => {
  try {
    const response = await axios.post(
      `http://localhost:5000/addproduct`,
      (req, res) => {
        console.log(req.body)
      }
    )
    console.log(response)
    return response.data
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = addProduct()
