const express = require('express')
const consola = require('consola')
const axios = require('axios')
const bodyParser = require('body-parser')
const { Nuxt, Builder } = require('nuxt')
const app = express()

const API_KEY = '3d5ad0ad1c2071c0873926dc5d6535d26fb759ad'

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.post('/api/kladr', (req, res) => {
    axios({
      method: 'POST',
      url: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
      headers: {
        "Authorization": `Token ${API_KEY}`,
        "Content-Type": "application/json",
        "responseType": "json"
      },
      data: {
        query: req.body.query
      }
    }).then(({ data }) => res.send(data))
  })
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
