import numeral from 'numeral'

const convertToZeros = (decimals = 0) => '0'.repeat(decimals)

export const normalizeCurrency = (value = '', decimals = 0) => {
  const num = `${value}`.replace(/[^\d]/g, '')
  return !num.length ? 0 : num / Number(`1${convertToZeros(decimals)}`)
}

export const formatCurrency = (value = '', prefix = '$', decimals = 0) =>
  `${prefix} ${numeral(value).format(`0,0.${convertToZeros(decimals)}`)}`
