import classnames from "classnames";
import React from "react";
import { GenreProps } from "../../../../../types/types";
import { useFilterContext } from "../../filterContext";
import "../style.css"
import { useSeriesGenreQuery } from "./useSeriesGenreQuery";

export const GenreFilter: React.FC<GenreProps> = function(props) {
    const {genreId, lable} = props
    const {currentGenre, onChangeGenre} = useFilterContext()
    const {data: seriesCount = 0} = useSeriesGenreQuery(genreId)    

    const classes = classnames("series-list-filter-button-viewed" , {
        "series-list-filter-button-viewed-selected": genreId === currentGenre
    })

    const onClick = () => {
        onChangeGenre(genreId)
    }

    return (
        <button className={classes} type="button" onClick={onClick}>
            {lable}
            <span className="series-list-filter-button-viewed-count">{seriesCount}</span>
        </button>
    )
}