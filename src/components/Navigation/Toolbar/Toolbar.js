import React from 'react'
import './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavItems from '../NavItems/NavItems'
import MenuToggle from '../MenuToggle/MenuToggle'

const toolbar = (props) => (
    <header className='Toolbar'>
        <MenuToggle clicked={props.clicked} />
        <Logo height='80%' />
        <nav className='DesktopOnly'>
            <NavItems isAuthenticated = {props.isAuthenticated} />
        </nav>
    </header>
)

export default toolbar