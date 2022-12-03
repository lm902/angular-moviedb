export default interface MovieResultObject {
  poster_path: string | null
  adult: boolean
  overview: string | null
  release_date: string
  genre_ids?: number[]
  id: number
  original_title: string
  original_language: string
  title: string
  backdrop_path: string | null
  popularity: number
  vote_count: number
  video: boolean
  vote_average: number
}
