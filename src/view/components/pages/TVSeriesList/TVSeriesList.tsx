import React, { useState } from "react";
import { SeriesGenre, SeriesViewed } from "../../../../types/types";
import { Filter } from "../../filters";
import { FilterContextProvider } from "../../filters/filterContext";
import { Series } from "../../series";
import "./style.css"

export const TVSeriesList: React.FC = function() {
    const [viewedState, setViewedState] = useState<SeriesViewed>("ALL")
    const [genreState, setGenreState] = useState<SeriesGenre>("ALL_GENRE")
   
    return <div className="home-page">
        <FilterContextProvider value={{
                currentViewed: viewedState, 
                onChangeViewed: setViewedState,
                currentGenre: genreState,
                onChangeGenre: setGenreState
            }}>
            <Filter />
            <Series viewed={viewedState} genre={genreState} />
        </FilterContextProvider>
    </div>
}