import { Response } from "../types/response"

export const itunesSearch = async (term: string): Promise<Response> => {
  try {
    const req = await fetch(
      `https://itunes.apple.com/search?term=${term}&entity=song&limit=10`, {
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