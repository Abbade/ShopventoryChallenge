import React, { useState } from 'react'
import './index.scss'


export default function Loader({loading}) {

    return loading ? (
        <div className='loader'>
        </div>
    ) : ''
}
