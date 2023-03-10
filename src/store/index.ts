import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../ducks/rootReducer";
 
export const store = configureStore({reducer: rootReducer})