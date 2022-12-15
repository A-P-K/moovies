import React, { useMemo } from "react";
import { Outlet, useNavigate } from "react-router-dom"
import { MenuLink } from "../../types/types";
import { Menu } from "../components/menu";
import "./style.css"

export const Layout: React.FC<React.PropsWithChildren> = function() {
    const navi = useNavigate()

    const links: MenuLink[] = useMemo(() => [
        {label: "все сериалы", onClick: () => navi("/")},
        {label: "добавить сериал", onClick: () => navi("/add")}
    ], [])

    return <div className="layout-container">
        <div className="layout-content">
            <Menu links={links} />
            <Outlet />
        </div>
    </div>
}