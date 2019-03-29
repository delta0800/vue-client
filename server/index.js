const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')
const session = require('express-session')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const axios = require('axios')
app.use(bodyParser.json())
app.set('port', port)
app.use(
  session({
    secret: 'super-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 * 60 }
  })
)
// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)
  // 登录存储 session
  app.post('/api/user/login', function(req, res) {
    axios.post('http://localhost:4000/user/login', req.body).then(result => {
      if (result.status === 200) {
        req.session.user = result.data.data
        res.status(result.status).json(result.data)
      }
    })
  })

  app.get('/api/user/logout', function(req, res) {
    try {
      req.session.user = null
      res.status(200).json({
        code: 0,
        msg: '请求成功',
        data: {
          message: '退出成功'
        }
      })
    } catch (e) {
      res.status(200).json({
        code: -1,
        msg: '请求成功',
        data: {
          message: '退出失败'
        }
      })
    }
  })

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
