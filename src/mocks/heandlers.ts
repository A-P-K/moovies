import { rest } from "msw"
import { CreatedSeries, Series } from "../types/types"
import { initialSeries } from "./initialSeries"

const hendleGetAllSeries = rest.get("/series", (req, res, context) => {
    const localStorageSeries = localStorage.getItem("series")
    const series = JSON.parse(localStorageSeries!) || initialSeries

    return res(context.status(200), context.delay(2000), context.json(series))
})

const hendleGetSeries = rest.get("/series/:seriesID", (req, res, context) => {
    const localStorageSeries = localStorage.getItem('series')
    const series = JSON.parse(localStorageSeries as string) as Record<string, Series>  || initialSeries 
    const seriesID = req.params.seriesID as string 
    
    return res(context.status(200), context.delay(2000), context.json(series[seriesID]))
})

const heandleAddSeries = rest.post("/series", async(req, res, context) => {
    const localStorageSeries = localStorage.getItem("series")
    const series = JSON.parse(localStorageSeries!) || initialSeries

    const newSeries: CreatedSeries = await req.json()
    const id = (Math.random() * Date.now()).toFixed()

    series[id] = {
        ...newSeries,
        id,
        isViewed: false,
        rating: 0,
    } as Series

    localStorage.setItem("series", JSON.stringify(series))

    return res(context.status(200), context.delay(2000))
    
})

export const hendlers = [hendleGetAllSeries, hendleGetSeries, heandleAddSeries]