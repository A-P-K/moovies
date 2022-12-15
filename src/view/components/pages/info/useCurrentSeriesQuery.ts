import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getSeriesApi } from "../../../../api"

export function useCurrentSeriesQuery() {
    const {seriesID} = useParams<"seriesID">()

    return useQuery({
        queryKey: ["series", seriesID],
        queryFn: () => getSeriesApi(seriesID as string)
    })
}