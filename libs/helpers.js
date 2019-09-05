export const prepareEgrn = Object.freeze({
  toQs: (egrn) => egrn.split(':').join('-'),
  fromQs: (egrn) => egrn.split('-').join(':')
})

export function convertUnixTime (UNIXtimestamp, locale = 'ru-RU') {
  const a = new Date(UNIXtimestamp * 1000)
  return a.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
}
