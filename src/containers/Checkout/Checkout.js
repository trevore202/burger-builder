import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import { Route, Redirect } from 'react-router-dom'
import ContactData from './ContactData/ContactData'
import { connect } from 'react-redux'

class Checkout extends Component {

    purchaseContinueHandler = () => {
        this.props.history.push('/checkout/contact-data')
    }

    cancelPurchaseHandler = () => {
        this.props.history.goBack()
    }

    render() {
        let summary = <Redirect to='/' />
        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Redirect to='/' /> : null
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary ingredients={this.props.ings}
                        cancel={this.cancelPurchaseHandler}
                        continue={this.purchaseContinueHandler} />
                    <Route path={this.props.match.path + '/contact-data'} component={ContactData} />
                </div>
            )
        }
        return (
            <div>{summary}</div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.bgbld.ingredients,
        purchased: state.ord.purchased
    }
}

export default connect(mapStateToProps)(Checkout)