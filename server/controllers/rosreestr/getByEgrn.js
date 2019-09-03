const axios = require('axios')

const getByEgrn = (req, res, API_KEY) => {
  axios
    .get('https://rosreestr.net/api/method/database.get', {
      params: {
        egrn: req.body.query,
        access_token: API_KEY,
        v: '1.0'
      }
    })
    .then(({ data }) => {
      const { response } = data
      if (!response) {
        res.send({})
      }
      return res.send(response.data)
    })
    .catch(err => console.error('GET_ERROR --> ', err))
}

module.exports = getByEgrn
