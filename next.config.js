const client = require('./client')

module.exports = {
  generateEtags: false,
  exportPathMap: async function (defaultPathMap) {
    const paths = await client
      .fetch('*[_type == "term" && defined(slug)].slug.current')
      .then(data =>
        data.reduce(
          (acc, slug) => ({
            '/': { page: '/' },
            ...acc,
            [`/term/${slug}`]: { page: '/term/[slug]', query: { slug } }
          }),
          defaultPathMap
        )
      )
      .catch(console.error)
    return paths
  }
}
