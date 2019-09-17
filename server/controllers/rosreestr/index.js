const hint = require('./hint')
const search = require('./search')
const getByEgrn = require('./getByEgrn')

const API_KEY = '00-45675145fa7e9837f4-0c5-d7646b8e-9837f4-fe824567' // todo: вынести в /libs/constants

const generateError = ({ res }) => {
  return res.status(404).send(`Wrong route params.`)
}

const rosreestr = (req, res, next) => {
  switch (req.params.type) {
    case 'hint':
      return hint(req, res)
    case 'search':
      return search(req, res)
    case 'getByEgrn':
      return getByEgrn(req, res, API_KEY)

    default:
      return generateError({ res })
  }
}

module.exports = rosreestr
