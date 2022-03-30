// CREATE ELASTIC SEARCH INDEX

const { elasticSearchClient } = require('../config/elasticsearchConnection')

const createIndex = async (indexName) => {
  // check if there's such index in elastic search
  try {
    const result = await elasticSearchClient.indices.get({
      index: indexName,
    })
    // console.log(result)
    return result
  } catch (error) {
    // if such index doesn't exist, create it
    return await elasticSearchClient.indices.create({
      index: indexName,
    })
  }
}

module.exports = { createIndex }

// (
//   {
//     index: 'e_commerce1',
//   },
//   (err, resp, status) => {
//     err ? console.log(err) : console.log('create', resp)
//   }
// )
