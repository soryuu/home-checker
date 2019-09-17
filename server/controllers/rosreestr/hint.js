const axios = require('axios')
const { DADATA_API_KEY } = require('../../constants')

const hint = (req, res) => {
  axios({
    method: 'POST',
    url: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
    headers: {
      'Authorization': `Token ${DADATA_API_KEY}`
    },
    data: {
      query: req.body.query
    }
  }).then(({ data: { suggestions } }) => res.send(suggestions))
}

module.exports = hint
