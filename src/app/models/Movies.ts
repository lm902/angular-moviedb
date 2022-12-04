import appSettings from '../../appSettings.json'
import MovieListCategory from './MovieListCategory'
import MovieResultObject from './MovieResultObject.js'
import MovieDetailResultObject from './MovieDetailResultObject.js'

export interface MovieQueryResult {
  page: number
  results: MovieResultObject[]
  total_results: number
  total_pages: number
}

export interface QueryParams {
  [index: string]: any
  page?: number
  query?: string
}

export interface Genre {
  id: number
  name: string
}

export interface GenresQueryResult {
  genres: Genre[]
}

export default {
  async query<T> (method: string, params?: QueryParams): Promise<T> {
    if (params != null) {
      for (const [key, value] of Object.entries(params)) {
        if (value == null) {
          delete params[key] // eslint-disable-line
        }
      }
    }
    const response = await fetch(`${appSettings.base as string}${method}?${Object.entries({
      api_key: appSettings.api_key, language: window.navigator.language, ...params
    }).map(x => x.join('=')).join('&')}`)
    return await response.json()
  },

  async list (category: MovieListCategory, page: number = 1): Promise<MovieQueryResult> {
    switch (category) {
      case MovieListCategory.NowPlaying:
        return await this.query('/movie/now_playing', { page })
      case MovieListCategory.Popular:
        return await this.query('/movie/popular', { page })
      case MovieListCategory.TopRated:
        return await this.query('/movie/top_rated', { page })
      case MovieListCategory.Upcoming:
        return await this.query('/movie/upcoming', { page })
      default:
        throw new RangeError('Category out of range')
    }
  },

  async search (query: string, page: number = 1): Promise<MovieQueryResult> {
    return await this.query('/search/movie', { query, page })
  },

  get genres (): Promise<GenresQueryResult> {
    return this.query('/genre/movie/list')
  },

  async discover (year?: number, genreIds?: number[], page: number = 1): Promise<MovieQueryResult> {
    return await this.query('/discover/movie', { year, with_genres: genreIds?.join(','), page })
  },

  async detail (id: string): Promise<MovieDetailResultObject> {
    return await this.query('/movie/' + id)
  }
}
