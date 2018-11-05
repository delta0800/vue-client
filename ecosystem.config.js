module.exports = {
  apps: [
    {
      name: 'vue-client',
      script: './server/index.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
