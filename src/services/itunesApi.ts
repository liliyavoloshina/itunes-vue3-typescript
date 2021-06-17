import { Album, Artist, Response, Song } from "../types/response"
import { SearchParams } from "../types/searchParams"

export const itunesSearch = async (searchParams: SearchParams): Promise<Response<Song | Artist | Album>> => {
  try {
    const req = await fetch(
      `https://itunes.apple.com/search?term=${searchParams.term}&entity=${searchParams.entity}&limit=10`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }
    )
    const { results } = await req.json()
    return results
  } catch (e) {
    throw new Error(e)
  }
}