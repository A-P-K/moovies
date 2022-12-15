import { useSelector as ReactReduxUseSelector } from "react-redux"

export const useSelector = function<T> (selector: (state: any) => T){
    return ReactReduxUseSelector(selector)
}