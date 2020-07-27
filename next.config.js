module.exports = {
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/terminy/[slug].js': { page: '/terminy/[slug]' }
    }
  },
}
