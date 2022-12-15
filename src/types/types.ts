export type SeriesLang = "RU" | "ENG"

export type SeriesGenre = "MOVIE" | "CARTOON" | "ALL_GENRE"

export type SeriesViewed = "ALL" | "NOT_VIEWED" | "VIEWED"

export type Series = {
    id: string,
    rating: number,
    lang: SeriesLang,
    description: string,
    img: string,
    isViewed: boolean,
    seasons: number,
    title: string,
    genre: string,
}

export type CreatedSeries = Pick<Series, "title" | "seasons" | "lang" | "description" | "img" | "genre">

export type SeriesPreviewProps = {
    info: Series
    onClick?: (series: Series) => void
}

export type GenreProps = {
    genreId: SeriesGenre
    lable: string
}

export type GenreFilterProps = {
    currentGenre: SeriesGenre
    onChangeGenre: (genre: SeriesGenre) => void
}

export type ViewedProps = {
    viewedId: SeriesViewed
    lable: string
}

export type ViewedFiltersProps = {
    currentViewed: SeriesViewed
    onChangeViewed: (viewed: SeriesViewed) => void
}

export type SeriesProps = {
    viewed: SeriesViewed
    genre: SeriesGenre    
}

export type PagesContextBox = {
    page: string
    setPage: (page: string) => void
}

export type CurrentSeries = Series | null

export type MenuLink = {
    onClick?: () => void
    label: string
}

export type MenuProps = {
    links: MenuLink[]
}

export type SeasonsCountProps = {
    value: number
    onChange: (value: number) => void
}

export type LanguageProps = {
    value: SeriesLang
    onChange: (language: SeriesLang) => void
}

export type ImgLinkProps = {
    value: string
    onChange: (url: string) => void
}
