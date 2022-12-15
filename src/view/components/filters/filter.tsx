import React from "react";
import { GenreFilter } from "./buttons/genreButton";
import { ViewedFilter } from "./buttons/viewedButton/viewedFilter";
import "./style.css"

export const Filter: React.FC = function() {

    return (
        <div className="series-list-filter-wrapper">
            <div className="series-list-filter">
                <ViewedFilter 
                    viewedId="ALL" 
                    lable="ВСЕ" />
                <ViewedFilter 
                    viewedId="NOT_VIEWED" 
                    lable="НЕПРОСМОТРЕННЫЕ" />
                <ViewedFilter 
                    viewedId="VIEWED" 
                    lable="ПРОСМОТРЕННЫЕ" />
            </div>
            <div className="series-list-filter">
                <GenreFilter
                    genreId="ALL_GENRE"
                    lable="ВСЕ ЖАНРЫ" />
                <GenreFilter
                    genreId="MOVIE"
                    lable="ФИЛЬМЫ" />
                <GenreFilter
                    genreId="CARTOON"
                    lable="МУЛЬТФИЛЬМЫ" />
            </div>
        </div>
    )
}