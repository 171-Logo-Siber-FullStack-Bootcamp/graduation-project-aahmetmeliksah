// SEARCH DOCUMENT

const { elasticSearchClient } = require('../config/elasticsearchConnection')

const searchDocument = async (indexName, mappingType, searchQuery) => {
  return await elasticSearchClient.search({
    index: indexName,
    type: mappingType,
    body: searchQuery,
    include_type_name: true,
  })
}

module.exports = { searchDocument }

// elasticSearchClient.search(
//   {
//     index: 'e_commerce1',
//     type: 'products',
//     body: {
//       query: {
//         match: { constituencyname: 'Harwich' },
//       },
//     },
//   },
//   function (error, response, status) {
//     if (error) {
//       console.log('search error: ' + error)
//     } else {
//       console.log('--- Response ---')
//       console.log(response)
//       console.log('--- Hits ---')
//       response.hits.hits.forEach(function (hit) {
//         console.log(hit)
//       })
//     }
//   }
// )
