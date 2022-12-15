import classNames from "classnames";
import React, { useRef } from "react";
import { LanguageProps, SeriesLang } from "../../../types/types";
import "./style.css"

export const LanguaegeSelect: React.FC<LanguageProps> = function(props) {
    const {value, onChange} = props
    const languagesRef = useRef<SeriesLang[]>(["RU", "ENG"])

    const renderButtons = () => {
        return languagesRef.current.map((lang) => {
            const isSelected = lang === value
            const onClick = () => onChange(lang)

            const classes = classNames("languageSelect-button", {
                "languageSelect-button-selected": isSelected
            })

            return (
                <button 
                    key={lang}
                    className={classes} 
                    type="button"
                    onClick={onClick}
                    disabled={isSelected}>
                    {lang}
                </button>
            )
        })
    }

    return <div className="language-wrapper" >{renderButtons()}</div>
}