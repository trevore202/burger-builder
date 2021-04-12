import React, { Component } from 'react';
import { connect } from 'react-redux'
import Auxiliary from '../../hoc/Auxiliary';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import './Layout.css'

class Layout extends Component {

    state={
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState( prevState => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    render() {
        return (
            <Auxiliary>
                <Toolbar clicked={this.sideDrawerToggleHandler} isAuthenticated = {this.props.isAuthenticated} />
                <SideDrawer 
                closed = {this.sideDrawerClosedHandler}
                open={this.state.showSideDrawer}
                isAuthenticated = {this.props.isAuthenticated} />

                <main className='Content'>
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated : state.auth.token !==  null
    }
}


export default connect(mapStateToProps)(Layout);