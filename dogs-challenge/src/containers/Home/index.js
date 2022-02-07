import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"
import Header from '../../components/Header'

import Dogs from '../../components/Dogs'

export default function HomeScreen() {
    return (
        <div className="home">
            <Header currentPage={1}/>
            <div className='home__container'>
                <Dogs />
            </div>                 
        </div>
    )
}