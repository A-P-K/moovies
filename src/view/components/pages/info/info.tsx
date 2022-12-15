import React from "react";
import { Series } from "../../../../types/types";
import { PreLoader } from "../../preLoader";
import "./style.css"
import { useCurrentSeriesQuery } from "./useCurrentSeriesQuery";

export const Info: React.FC = function() {
    const {isLoading, data: currentSeries} = useCurrentSeriesQuery()

    if(!currentSeries || isLoading) return <PreLoader />

    const {id, title, img, rating, seasons, isViewed, lang, genre} = currentSeries

    const backgroundImage = `url(${img})`

    const renderPoints = () => {
        const pointsHash = {id, rating, seasons, isViewed, lang, genre}
        const keysToPfrasePointsHash: Record<string, string> = {
            id: "ID",
            rating: "Рейтинг",
            seasons: "Количество сезонов",
            isViewed: "Статус просмотра",
            lang: "Язык",
            genre: "Жанр",
        }

        const renderPointValue = <K extends keyof Series>(key: K, value: Series[K]): React.ReactNode => {
            if(key === "id") return value as string
            if(key === "lang") return value === "RU" ? "Русский" : "Английский"
            if(key === "seasons") return Object.values(value).length
            if(key === "rating") return value as string
            if(key === "isViewed") return value ? "просмотренно" : "непросмотренно"
            if(key === "genre") return value as string
        }

        return Object.entries(pointsHash).map(([key, value]) => {
            return <div className="info-preview-point" key={key}>
                <span>{keysToPfrasePointsHash[key]}:</span>
                <span>{renderPointValue(key as keyof Series, value)}</span>
            </div>
        })
    }

    return <div className="info">
        <div className="info-preview">
            <div className="info-preview-banner" style={{backgroundImage}}></div>
            <div className="info-preview-info">
                <h1 className="info-preview-lable">{title}</h1>
                {renderPoints()}
            </div>
        </div>
        <div className="info-description">{currentSeries.description}</div>
        <div>
            <video controls width="1000px" height="600px"></video> 
        </div>
    </div>
}