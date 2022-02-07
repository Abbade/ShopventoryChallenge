import React, { useState } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

export default function Header({ currentPage }) {

    return (
        <div className="header">
            <div className="header__container">

                <Link className="header__logo header__md" to="/">Dog App</Link>
                <Link className="header__logo header__sm" to="/">Dog's R Us</Link>

                <div className={'header__menu'}>
                    <Link className='header__menu__link--selected' to="/">Home</Link>

                    <Link className='header__menu__link--selected' to="/about">About</Link>

                    <Link className='header__menu__link--selected' to="/contact">Contact</Link>
                </div>

             
                <div className="subheader__container">
                    <div className='presentations__container'>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel libero viverra, 
                            tincidunt diam nec, finibus est. Fusce vestibulum lacus et sodales accumsan. Donec orci nunc,
                            feugiat sit amet ligula quis, egestas pharetra tellus. Integer.
                        </span>
                    </div>
                    <div className='video__container'>
                        <iframe className='video__link' title='Video with dogs' src="https://www.youtube.com/embed/s_uiya1WsQ0" >
                            Video with dogs
                        </iframe>
                    </div>
                </div>
          
                
            </div>      
        </div>
    )
}
