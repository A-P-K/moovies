import classNames from "classnames";
import React, { useMemo, useRef, useState } from "react";
import { SeasonsCountProps } from "../../../types/types";
import "./style.css"

export const SeasonsCount: React.FC<SeasonsCountProps> = function(props) {
    const {value, onChange} = props
    const buttonsCount = useRef(4)
    const isInputTouched = useRef(false)
    const initialValue = useRef(value)
    const [temporaryInputValue, setTemporaryInputValue] = useState("")
    const isInputSelected = buttonsCount.current < value 

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        const {value: inputValue} = event.target
        const nummericNumber = Number(inputValue)

        const canChange = () => {
            if(nummericNumber === 0 && isInputTouched.current) return true
            return nummericNumber && nummericNumber > buttonsCount.current
        }

        if(canChange()) {
            setTemporaryInputValue("")
            if(nummericNumber === 0){
                isInputTouched.current = false
                onChange(initialValue.current)
            } else {
                isInputTouched.current = true
                onChange(nummericNumber)
            }
        } else {
            setTemporaryInputValue(inputValue)
        }
    }

    const onInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const {value} = event.target
        const nummericValue = Number(value)
        setTemporaryInputValue("")
        if(nummericValue && nummericValue <= buttonsCount.current){
            onChange(nummericValue)
        }
    }

    const inputValue = useMemo(() => {
        if(temporaryInputValue) return temporaryInputValue
        if(value <= buttonsCount.current) return ""
        return String(value)
    }, [value, temporaryInputValue])

    const renderButtons = () => {
        const buttonList = [1, 2, 3, 4]

        return buttonList.map((buttonValue) => {
            const onButtonClick = () => {
                onChange(buttonValue)
            }

            const isSelected = buttonValue === value
            const buttonClasses = classNames("seasonsCount-button", {"seasonsCount-selekted": isSelected})

            return (
                <button
                    key={buttonValue}
                    disabled={isSelected}
                    className={buttonClasses}
                    onClick={onButtonClick}>
                    {buttonValue}
                </button>
            )
        })
    }

    const inputClasses = classNames("seasonsCount-input", {"seasonsCount-selekted": isInputSelected})

    return <div className="seasonsCount-wrapper" >
        {renderButtons()}
        <input 
            onBlur={onInputBlur} 
            value={inputValue } 
            className={inputClasses} 
            maxLength={2} 
            onChange={onInputChange} 
            placeholder="..."
        />
    </div>
}