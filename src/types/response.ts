export interface Response<T> {
	resultCount: number
	results: Array<Song> | Array<Artist> | Array<Album>
}

export interface Song {
	wrapperType: string
	kind: string
	artistId: number
	collectionId: number
	trackId: number
	artistName: string
	collectionName: string
	trackName: string;
	collectionCensoredName: string
	trackCensoredName: string
	artistViewUrl: string
	collectionViewUrl: string
	trackViewUrl: string
	previewUrl: string
	artworkUrl30: string
	artworkUrl60: string
	artworkUrl100: string
	collectionPrice: number
	trackPrice: number
	releaseDate: string
	collectionExplicitness: string
	trackExplicitness: string
	discCount: number
	discNumber: number
	trackCount: number
	trackNumber: number
	trackTimeMillis: number
	country: string
	currency: string
	primaryGenreName: string
	contentAdvisoryRating?: string
	isStreamable: boolean
}

export interface Artist {
	wrapperType: string
	artistType: string
	artistName: string
	artistLinkUrl: string
	artistId: number
	amgArtistId?: number
	primaryGenreName: string
	primaryGenreId: number
}

export interface Album {
	wrapperType: string
	collectionType: string
	artistId: number
	collectionId: number
	artistName: string
	collectionName: string
	collectionCensoredName: string
	collectionViewUrl: string
	artworkUrl60: string
	artworkUrl100: string
	collectionPrice: number
	collectionExplicitness: string
	trackCount: number
	copyright: string
	country: string
	currency: string
	releaseDate: string
	primaryGenreName: string
	amgArtistId?: number
	artistViewUrl?: string
}

