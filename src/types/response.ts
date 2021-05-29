export interface ItunesTypes {
	resultCount: number
	results: Array<ResponseResult>
}

export interface ResponseResult {
	wrapperType: string
	collectionType: string
	artistId: number
	collectionId: number
	amgArtistId?: number
	artistName: string
	collectionName: string
	collectionCensoredName: string
	artistViewUrl: string
	collectionViewUrl: string
	artworkUrl60: string
	artworkUrl100: string
	collectionPrice: number
	collectionExplicitness: string
	contentAdvisoryRating?: string
	trackCount: number
	copyright: string
	country: string
	currency: number
	releaseDate: string
	primaryGenreName: string
}
