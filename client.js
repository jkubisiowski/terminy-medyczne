const sanityClient = require('@sanity/client')

module.exports = sanityClient({
  projectId: 'v7kdpo5q', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: false // `false` if you want to ensure fresh data
})
