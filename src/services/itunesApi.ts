import { ItunesTypes } from "../types/response";
import SearchParam from "../types/searchParam";

export const itunesSearch = async (searchParams: SearchParam): Promise<ItunesTypes> => {
  try {
    const req = await fetch(
      `https://itunes.apple.com/search?term=${searchParams.term}&entity=${searchParams.entity}&limit=10`
    )
    const { results } = await req.json()
    return results
  } catch (e) {
    console.log('error!')
    throw new Error(e)
  }
}