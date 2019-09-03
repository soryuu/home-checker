export const prepareEgrn = Object.freeze({
  toQs: egrn => egrn.split(':').join('-'),
  fromQs: egrn => egrn.split('-').join(':')
})
