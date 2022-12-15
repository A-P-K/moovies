import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createSeriesApi } from "../../../../api";
import { CreatedSeries } from "../../../../types/types";

export function useCreateSeriesQuery() {
    const navi = useNavigate()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (series: CreatedSeries) => createSeriesApi(series),
        onSuccess: async () => {
            navi("/")
            await queryClient.invalidateQueries(["series"])
        }
    })
}