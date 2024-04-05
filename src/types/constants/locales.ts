export type Locale = {
  en: LocaleDetail
  id: LocaleDetail
}

type LocaleDetail = {
  locales: Locales
  currency: CurrencyDetail
}

export type Locales = 'en-US' | 'id-ID'

export type CurrencyDetail = 'IDR' | 'USD'
