const express = require('express')
const consola = require('consola')
const bodyParser = require('body-parser')
const { Nuxt, Builder } = require('nuxt')
const app = express()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

const routes = require('./routes')

async function start () {
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  app.use(routes)
  app.use('/api', routes)

  // app.post('/api/hint', (req, res) => {
  //   axios.get('https://rosreestr.net/api/method/database.hint', {
  //     params: {
  //       request: req.body.query,
  //       access_token: API_KEY,
  //       v: '1.0'
  //     }
  //   })
  //     .then(({ data }) => {
  //       const { response } = data
  //       if (!response) {
  //         res.send({ count: 0, items: [] })
  //       }
  //       return res.send(response.data)
  //     })
  //     .catch(err => console.error('HINT_ERROR --> ', err))
  // })
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
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
