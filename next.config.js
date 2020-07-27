const client = require('./client')

module.exports = {
  generateEtags: true,
  exportPathMap: async function (defaultPathMap,
    {dev, dir, outDir, distDir, buildId}) {
    const pathsTerms = await client
      .fetch('*[_type == "term" && defined(slug)].slug.current')
      .then(data =>
        data.reduce(
          (acc, slug) => ({
            '/': {page: '/'},
            ...acc,
            [`/terminy/...${slug}`]: {page: '/terminy/[slug]', query: {slug}}
          }),
          defaultPathMap
        )
      )
      .catch(console.error)
    const pathsCategories = await client
      .fetch('*[_type == "category" && defined(slug)].slug.current')
      .then(data =>
        data.reduce(
          (acc, slug) => ({
            '/': {page: '/'},
            ...acc,
            [`/kategorie/...${slug}`]: {page: '/kategorie/[slug]', query: {slug}}
          }),
          defaultPathMap
        )
      )
      .catch(console.error)
    return {

      ...pathsTerms, ...pathsCategories
    }
  }
}
