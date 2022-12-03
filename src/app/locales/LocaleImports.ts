/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import en_US from './en_US'
import zh_CN from './zh_CN'
import zh_TW from './zh_TW'

export interface LocaleDefinition {
  nav_home: string
  nav_about: string
  nav_discover: string
  nav_my: string
  nav_favorites: string
  nav_rated: string
  nav_search: string
  popular: string
  top_rated: string
  upcoming: string
  now_playing: string
  finding_movies: string
  favorite: string
  unfavorite: string
  about_text: string
  about_repo: string
  back: string
  homepage: string
  genres: string
  overview: string
  production_companies: string
  production_countries: string
  release_date: string
  revenue: string
  runtime: string
  minutes: string
  spoken_languages: string
  status: string
  rating: string
  rating_body: string
  loading: string
  year: string
  condition_prompt: string
  find: string
  search_result_title: string
  search_no_keyword: string
  attribution: string
  unspecified: string
  no_favorites: string
  like: string
  dislike: string
  liked: string
  no_liked: string
  disliked: string
  no_disliked: string
}

export const locales: { [index: string]: LocaleDefinition } = {
  en_US, en: en_US, zh_CN, zh: zh_CN, zh_TW, zh_HK: zh_TW
}

export const LocaleImports = {
  get current (): LocaleDefinition {
    const fblist: string[] = window.navigator.languages ? [...window.navigator.languages] : []
    window.navigator.language && !fblist.includes(window.navigator.language) && fblist.push(window.navigator.language)
    for (const lang of fblist) {
      if (locales[lang.replace('-', '_')]) {
        return locales[lang.replace('-', '_')]
      }
    }
    return en_US
  }
}

const locale = LocaleImports.current
export default locale
