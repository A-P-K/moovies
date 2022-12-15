import { useQuery } from "@tanstack/react-query";
import { getAllSeriesApi } from "../../../../../api";
import { Series, SeriesGenre } from "../../../../../types/types";

const getSeriesGenre = (series: Record<string, Series>, filterGenre: SeriesGenre) => {
    const seriesValue = Object.values(series)

    return seriesValue.filter(series =>  {
        if(filterGenre === "ALL_GENRE" || filterGenre === series.genre) return series
    })
}

export function useSeriesGenreQuery(filter: SeriesGenre) {
    return useQuery({
        queryKey: ["series"],
        queryFn: () => getAllSeriesApi(),
        select: (data) => getSeriesGenre(data, filter).length
    })
} 