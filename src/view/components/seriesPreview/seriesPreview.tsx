import React from "react";
import { SeriesPreviewProps } from "../../../types/types";
import "./style.css"

export const SeriesPreview: React.FC<SeriesPreviewProps> = function(props) {
    const {info, onClick} = props
    const {title, rating, lang, img, description} = info

    const renderRating = () => {
        const realRating = 5 - rating
        return <>
            <span className="series-preview-rating-current">{"⭐".repeat(rating)}</span>
            <span className="series-preview-realRating">{"⭐".repeat(realRating)}</span>
        </>
    }

    const renderLang = () => {
        if (lang === "RU") return "🇷🇺"
        return "🌎"
    }

    const backgroundImage = `url(${img})`

    const onPreviewClick = () => {
        if(onClick) {
            onClick(info)
        }
    }

    return <div className="series-preview" onClick={onPreviewClick}>
        <div className="series-preview-bacground" style={{backgroundImage}}></div>
        <div className="series-preview-rating">{renderRating()}</div>
        <div className="series-preview-lang">{renderLang()}</div>
        <div className="series-preview-title">
            <div>{title}</div>
            <div>{description}</div>
        </div>
    </div>
}
