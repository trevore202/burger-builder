import Layout from './components/Layout/Layout';
import React, { Component } from 'react';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Logout from './containers/Authorization/Logout/Logout'
import * as actions from './store/actions/index'
import asyncComponent from './hoc/asyncComponent/asyncComponent'


const asyncCheckout = asyncComponent(() => {
  return import('./containers/Checkout/Checkout')
})
const asyncOrders = asyncComponent(() => {
  return import('./containers/Orders/Orders')
})
const asyncAuth = asyncComponent(() => {
  return import('./containers/Authorization/Authorization')
})

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignIn()
  }

  render() {

    let routes = (
      <Switch>
        <Route path='/' exact component={BurgerBuilder} />
        <Route path='/auth' component={asyncAuth} />
        <Redirect to='/' />
      </Switch>
    )

    if (this.props.isAuth) {
      routes = (
        <Switch>
          <Route path='/' exact component={BurgerBuilder} />
          <Route path='/auth' component={asyncAuth} />
          <Route path='/checkout' component={asyncCheckout} />
          <Route path='/orders' component={asyncOrders} />
          <Route path='/logout' component={Logout} />
          <Redirect to='/' /> 
        </Switch>
      )
    }

    return (
      <Layout>
        {routes}
      </Layout>

    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignIn: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
