// import axios from "axios"
import { initialSeries } from "../mocks/initialSeries"
import { CreatedSeries, Series } from "../types/types"

// function makeGetRequest<R = void>(url: string): Promise<R> {
//     return axios.get<R>(url).then(({data}) => data)
// }

// function makePostRequest<R = void>(url: string, postData?: any): Promise<R> {
//     return axios({method: "POST", url, data: postData}).then(({data}) => data)
// }

export const getAllSeriesApi = () => {
    // return makeGetRequest<Record<string, Series>>("/series")
    return new Promise((resolve) => {
        setTimeout(() => {
            const localStorageSeries = localStorage.getItem("series")
            const series = JSON.parse(localStorageSeries!) || initialSeries

            resolve(series)
        }, 1500)
    })
}

export const getSeriesApi = (seriesID: string) => {
    // return makeGetRequest<Series>(`/series/${seriesID}`)
    return new Promise((resolve) => {
        setTimeout(() => {
            const localStorageSeries = localStorage.getItem('series')
            const series = JSON.parse(localStorageSeries as string) as Record<string, Series>  || initialSeries 

            resolve(series[seriesID])
        }, 1500)
    })
}

export const createSeriesApi = (newSeries: CreatedSeries) => {
    // return makePostRequest("/series", series)
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            const localStorageSeries = localStorage.getItem("series")
            const series = JSON.parse(localStorageSeries!) || initialSeries
        
            const id = (Math.random() * Date.now()).toFixed()
        
            series[id] = {
                ...newSeries,
                id,
                isViewed: false,
                rating: 0,
            } as Series
        
            localStorage.setItem("series", JSON.stringify(series)) 

            resolve()
        }, 1500)
    })
}