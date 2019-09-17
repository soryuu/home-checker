const axios = require('axios')
const { MACRO_REGIONS } = require('../../constants')

const search = (req, res) => {
  const { region, city, street, house = '', flat = '' } = req.body.data
  console.log(MACRO_REGIONS)
  const findMacroRegion = (dadataRegion) => {
    const filtered = MACRO_REGIONS.filter(({ name }) => name.includes(dadataRegion))
    if (filtered.length) {
      return filtered[0].id
    }
    return null
  }
  const findRegion = (regions, dadataRegion) => {
    const filtered = regions.filter(({ name }) => name.includes(dadataRegion))
    if (filtered.length) {
      return filtered[0].id
    }
    return null
  }
  const macroRegion = findMacroRegion(region)
  axios.get(`http://rosreestr.ru/api/online/regions/${macroRegion}`)
    .then((resp) => {
      const region = findRegion(resp.data, city)
      axios({
        method: 'GET',
        url: 'http://rosreestr.ru/api/online/address/fir_objects',
        params: {
          macroRegionId: macroRegion,
          RegionId: region,
          street,
          house,
          apartment: flat
        }
      }).then((response) => res.send(response.data))
    })
}

module.exports = search
