import React from 'react'
import './MenuToggle.css'

const menuToggle = props => {
    return (
        <div className='DrawerToggle MobileOnly' onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default menuToggle