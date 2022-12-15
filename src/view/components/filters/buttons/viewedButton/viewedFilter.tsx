import classnames from "classnames";
import React, { memo } from "react";
import { ViewedProps, ViewedFiltersProps } from "../../../../../types/types";
import { useFilterContext } from "../../filterContext";
import "../style.css"
import { useSeriesViewedQuery } from "./useSeriesViewedQuery";

const ViewedFilterView: React.FC<ViewedProps & ViewedFiltersProps> = memo(function(props) {
    const { viewedId, lable, currentViewed, onChangeViewed } = props
    const {data: seriesCount = 0} = useSeriesViewedQuery(viewedId)
    

    const classes = classnames("series-list-filter-button-viewed", {
        "series-list-filter-button-viewed-selected": viewedId === currentViewed
    })
    
    const onClick = () => {
        onChangeViewed(viewedId)
    }

    return <button className={classes} type="button" onClick={onClick}>
        {lable}
        <span className="series-list-filter-button-viewed-count">{seriesCount}</span>
    </button>
}, (prevPops, nextProps) => {
    return prevPops.currentViewed !== prevPops.viewedId && nextProps.currentViewed !== nextProps.viewedId
})

export const ViewedFilter: React.FC<ViewedProps> = function(props) {

    return <ViewedFilterView {...props} {...useFilterContext()} />
}
