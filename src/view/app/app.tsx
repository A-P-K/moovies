import React from "react";
import { Routes, Route } from "react-router-dom"
import { AddSeries } from "../components/pages/AddSeries";
import { Info } from "../components/pages/info";
import { TVSeriesList } from "../components/pages/TVSeriesList";
import { Layout } from "../layout";

export const App: React.FC = function(){
    return <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<TVSeriesList />} />
            <Route path="series/:seriesID" element={<Info />} />
            <Route path="add" element={<AddSeries />} />
        </Route>
    </Routes>
}