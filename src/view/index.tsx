import { createRoot } from "react-dom/client"
import React from "react"
import { Provider } from "react-redux"
import { Store } from "redux"
import { BrowserRouter } from "react-router-dom"
import { App } from "./app"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient({
    defaultOptions:{
        queries: {
            staleTime: Infinity,
            refetchOnWindowFocus: false,
        }
    }
})

export function renderApp(store: Store) {
    const elem = document.getElementById('app')

    if(!elem){
        throw new Error("Root Element не найден")
    }
    
    const root = createRoot(elem)
    const app = ( 
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
            <ReactQueryDevtools />
        </QueryClientProvider>
    )
    root.render(app)
}