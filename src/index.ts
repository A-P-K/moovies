import { renderApp } from "./view";
import { store } from "./store"
import "./css/index.css"


import { worker } from "./mocks"
worker.start()

renderApp(store)