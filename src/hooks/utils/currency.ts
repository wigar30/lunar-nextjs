import { LOCALES } from '@/constans/locales'
import { Locale } from '@/types/constants/locales'

export const useCurrency = (currency: keyof Locale) => {
  const convertToCurrency = (price: number) => {
    const currencies = new Intl.NumberFormat(LOCALES[currency].locales, { currency: LOCALES[currency].currency, style: 'currency', currencyDisplay: 'symbol' }).formatToParts(price)
    return {
      currency: currencies.find((item) => item.type === 'currency')?.value || '',
      value: currencies
        .slice(1, currencies.length - 2)
        .map((item) => item.value)
        .join(''),
      fraction: currencies
        .slice(-1)
        .map((item) => item.value)
        .join('')
    }
  }

  return {
    convertToCurrency
  }
}
