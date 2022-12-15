import { useQuery } from "@tanstack/react-query"
import { getAllSeriesApi } from "../../../../../api"
import { Series, SeriesViewed } from "../../../../../types/types"

const getSeriesViewed = (series: Record<string, Series>, filterViewed: SeriesViewed) => {
    const seriesValue = Object.values(series)

    return seriesValue.filter(({ isViewed }) => {
        
        switch (filterViewed){
            case "VIEWED":
                return isViewed
            case "NOT_VIEWED":
                return !isViewed
            default:
                return true
        }
    })
}

export function useSeriesViewedQuery(filter: SeriesViewed) {
    return useQuery({
        queryKey: ["series"],
        queryFn: () => getAllSeriesApi(),
        select: (data) => getSeriesViewed(data, filter).length
    })
}