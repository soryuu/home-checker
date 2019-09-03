const axios = require('axios')

const hint = (req, res, API_KEY) => {
  axios
    .get('https://rosreestr.net/api/method/database.hint', {
      params: {
        request: req.body.query,
        access_token: API_KEY,
        v: '1.0'
      }
    })
    .then(({ data }) => {
      const { response } = data
      if (!response) {
        res.send({ count: 0, items: [] })
      }
      return res.send(response.data)
    })
    .catch((err) => console.error('HINT_ERROR --> ', err))
}

module.exports = hint
