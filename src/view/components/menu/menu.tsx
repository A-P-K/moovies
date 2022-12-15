import React from "react";
import { MenuProps } from "../../../types/types";
import "./style.css"

export const Menu: React.FC<MenuProps> = function(props) {
    const {links} = props

    const renderLinks = () => {
        return links.map(({label, onClick}) => {
            return (
                <span key={label} className="menu-item" onClick={onClick}>
                    {label}
                </span>
            )
        })
    }
    
    return <div className="menu">
        <div className="menu-logo">СЕРИАЛЫ on-line</div>
        <div className="menu-items">{renderLinks()}</div>
    </div>
}