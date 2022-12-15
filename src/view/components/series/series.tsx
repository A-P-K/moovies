import React from "react";
import { SeriesProps } from "../../../types/types";
import { SeriesPreview } from "../seriesPreview";
import { useNavigate } from "react-router-dom"
import "./style.css"
import { PreLoader } from "../preLoader";
import { useSeriesQuery } from "./useSeriesQuery";
import { Series as SeriesType } from "../../../types/types";

export const Series: React.FC<SeriesProps> = function(props) {
    const { genre, viewed } = props
    const navi = useNavigate()
    const {isLoading, data: seriesList} = useSeriesQuery({viewedFilter: viewed})

    const renderSeries = (seriesList: SeriesType[]) => {
        return seriesList.filter(series =>  {
            if(genre === "ALL_GENRE" || genre === series.genre) return series
        }).map(series => {
            return <SeriesPreview key={series.id} info={series} onClick={() => {
                navi(`/series/${series.id}`)
            }} />
        })
    }

    const renderContent = () => {
        if(isLoading || !seriesList) return <PreLoader />
        return <div className="tv-series-list">{renderSeries(seriesList)}</div>
    }
    
    return <div className="tv-series-list-wrapper">{renderContent()}</div>
}

