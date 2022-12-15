import React from "react";
import { ImgLinkProps } from "../../../types/types";
import "./style.css"

export const ImgLink: React.FC<ImgLinkProps> = function(props) {
    const {value, onChange} = props

    const backgroundImage = `url(${value})`

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target
        onChange(value)
    }

    return (
        <div className="imgLink-wrapper" >
            <input className="imgLink-input" onChange={onInputChange} value={value} placeholder="Вставьте ссылку на картинку" required/>
            <div className="imgLink-img" style={{backgroundImage}}/>
        </div>
    )
}