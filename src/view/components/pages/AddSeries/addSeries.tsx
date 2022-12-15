import React, { useCallback, useState } from "react";
import { CreatedSeries, ImgLinkProps, LanguageProps, SeasonsCountProps } from "../../../../types/types";
import { ImgLink } from "../../imgLink";
import { LanguaegeSelect } from "../../languageSelect";
import { SeasonsCount } from "../../seasonsCount";
import "./style.css"
import { useCreateSeriesQuery } from "./useCreateSeriesQuery";

const initialState: CreatedSeries = {
    title: "",
    seasons: 0,
    lang: "RU",
    img: "",
    description: "",
    genre: "",
}

export const AddSeries: React.FC = function(){
    const [formValuesState, setFormValuesState] = useState(initialState)
    const seriesMutation = useCreateSeriesQuery()

    const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value: title} = event.target
        setFormValuesState(prevValues => ({...prevValues, title}))
    }

    const onSeasonsChange = useCallback<SeasonsCountProps["onChange"]>((seasons) => {
        setFormValuesState(prevValues => ({...prevValues, seasons}))
    }, [])

    const onLangChange = useCallback<LanguageProps["onChange"]>((lang) => {
        setFormValuesState(prevValues => ({...prevValues, lang}))
    }, [])

    const onImgChange = useCallback<ImgLinkProps["onChange"]>((img) => {
        setFormValuesState(prevValues => ({...prevValues, img}))
    }, [])

    const onGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const {value: genre} = event.target
        setFormValuesState(prevValues => ({...prevValues, genre}))
    }

    const onDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const {value: description} = event.target
        setFormValuesState(prevValues => ({...prevValues, description}))
    }

    const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        seriesMutation.mutate(formValuesState)
        setFormValuesState(initialState)
        alert("Сериал успешно добавлен!")
    }

    return <form className="add" onSubmit={onFormSubmit} >
        <div className="add-info">
            <div className="add-label">
                <input 
                    onChange={onTitleChange}
                    className="add-label-input" 
                    value={formValuesState.title} 
                    type="text" 
                    autoFocus 
                    placeholder="Введите название сериала"
                    maxLength={30}
                    required
                />
            </div>
            <div className="add-form">
                <div className="add-form-info">
                    <SeasonsCount value={formValuesState.seasons} onChange={onSeasonsChange} />
                    <LanguaegeSelect value={formValuesState.lang} onChange={onLangChange} />
                    <ImgLink value={formValuesState.img} onChange={onImgChange} />
                    <div className="add-form-genre">
                        <select className="select-genre" onChange={onGenreChange} required>
                            <option></option>
                            <option>CARTOON</option>
                            <option>MOVIE</option>
                        </select>
                    </div>
                </div>
                <div className="add-form-description">
                    <textarea 
                        className="add-form-description-textarea" 
                        rows={6} 
                        placeholder="Введите описание сериала"
                        onChange={onDescriptionChange}
                        value={formValuesState.description}
                        required
                    />
                </div>
            </div>
        </div>
        <div className="add-button-block">
            <button className="add-button" type="submit" >Добавить сериал</button>
        </div>
    </form>
}