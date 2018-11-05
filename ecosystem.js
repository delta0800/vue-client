module.exports = {
  apps: [
    {
      name: 'vueblog',
      script: 'server/index.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
