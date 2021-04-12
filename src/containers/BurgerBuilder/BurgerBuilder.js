import React, { Component } from 'react';
import { connect } from 'react-redux'

import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

import * as actions from '../../store/actions/index'


export class BurgerBuilder extends Component {

    state = {
        purchasing: false
    }

     componentDidMount () {
         this.props.onInitIngredients()
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients).map(
            ingKey => {
                return ingredients[ingKey]
            }
        ).reduce((sum, el) => { return sum + el }, 0)  //the 0 initializes 'sum' parameter
        return sum > 0 
    }

    purchasingHandler = () => {
        if (this.props.isAuthenticated) {
            this.setState({ purchasing: true })
        } else {
            //this.props.onInitPurchase()
            this.props.onSetAuthRedirectPath('/checkout')
            this.props.history.push('/auth')
        }
        
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinueHandler = () => {
        this.props.onInitPurchase()
        this.props.history.push('/checkout')
    }

    render() {
        const disabledInfo = {
            ...this.props.ings
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null

        let burgerAndControls = this.props.err ? <p>ingredients can't be loaded</p> :<Spinner />

        if (this.props.ings) {
            burgerAndControls = (
                <Auxiliary>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        price={this.props.prc}
                        isAuth={this.props.isAuthenticated}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        ordered={this.purchasingHandler} />
                </Auxiliary>
            )
            orderSummary = <OrderSummary
                ingredients={this.props.ings}
                cancel={this.purchaseCancelHandler}
                continue={this.purchaseContinueHandler}
                price={this.props.prc} />
        }


        return (
            <Auxiliary>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} >
                    {orderSummary}
                </Modal>
                {burgerAndControls}
            </Auxiliary>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        ings: state.bgbld.ingredients,
        prc: state.bgbld.totalPrice,
        err: state.bgbld.error,
        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));