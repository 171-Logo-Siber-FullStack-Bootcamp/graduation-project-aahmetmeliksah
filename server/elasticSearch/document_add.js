// ADD DOCUMENT TO ELASTIC SEARCH

const { elasticSearchClient } = require('../config/elasticsearchConnection')

const insertDocument = async (indexName, _id, mappingType, data) => {
  return await elasticSearchClient.index({
    index: indexName,
    type: mappingType,
    id: _id,
    body: data,
  })
}

module.exports = { insertDocument }

// elasticSearchClient.index(
//   {
//     index: 'e_commerce1',
//     id: '100',
//     type: 'products',
//     body: {
//       product_name: 'Laptop 1',
//       category_name: 'Electronics',
//       product_description: 'Laptop Description 1',
//       price: 523,
//       category_id: 1,
//       quantity: 27,
//     },
//   },
//   (err, resp, status) => {
//     console.log(resp)
//   }
// )
