import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomeScreen from './containers/Home'



export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<HomeScreen />}/>
            </Routes>
        </BrowserRouter>
    )
}