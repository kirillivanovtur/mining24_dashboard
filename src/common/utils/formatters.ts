export function cleanStringWithNumberVal(val: string) {
  if (val === undefined) return '';
  return `${Number(val)}`
    .replace(/[- ]/g, '')
    .replace(/\\,/g, '.')
    .replace(/^([^\\.]*\.)|\./g, '$1');
}

export function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export const formatNumber = (number: number | string, minPrecision = 2, maxPrecision = 2) => {
  const newNumber = Number(number);
  const options = {
    minimumFractionDigits: minPrecision,
    maximumFractionDigits: maxPrecision,
  }
  return newNumber.toLocaleString(undefined, options)
}
