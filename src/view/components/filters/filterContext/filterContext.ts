import { createContext, useContext } from "react";
import { GenreFilterProps, ViewedFiltersProps } from "../../../../types/types";

const filterContext = createContext<ViewedFiltersProps & GenreFilterProps>(undefined as any)
export const FilterContextProvider = filterContext.Provider
export const useFilterContext = () => useContext(filterContext)