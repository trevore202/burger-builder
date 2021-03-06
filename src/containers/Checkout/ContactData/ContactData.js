import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import './ContactData.css'
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'

import { connect } from 'react-redux'

import * as actions from '../../../store/actions/index'

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zip: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Zip Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ]
                },
                value:'fastest',
                valid: true
            }
        },
        formisValid: false
    }

    orderHandler = (event) => {
        event.preventDefault()
        const formData = {}
        for (let formElementID in this.state.orderForm) {
            formData[formElementID] = this.state.orderForm[formElementID].value
        }
        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            orderData: formData,
            userId: this.props.userId
        }
        this.props.OnOrderSubmit(order, this.props.token)
    }

    checkValidity(value, rules) {
        let isValid = true
        if (!rules) {
            return true
        }
        if (rules.required) {
            isValid = value.trim() !== ''
        }
        if (isValid && rules.minLength) {
            isValid = value.length >= rules.minLength
        }
        if (isValid && rules.maxLength) {
            isValid = value.length <= rules.maxLength
        }

        return isValid
    }

    inputChangedHandler = (event, inputID) => {
        //create copy of the state so you don't chang the state object
        const updatedOrderForm = {
            ...this.state.orderForm
        }
        //creates deep copy
        // or copy of the objects within the state. (nested objects in the updatedOrderForm 
        // variable are still pointing to the same object that the state is pointing to)
        const updatedFormElement = { ...updatedOrderForm[inputID] }

        //update value of the nested object copy
        updatedFormElement.value = event.target.value

        //validation of the value
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.touched = true

        //change the value in the whole state copy to the new element
        updatedOrderForm[inputID] = updatedFormElement
        
        let formisValid = true
        for (let inputIDs in updatedOrderForm) {
            formisValid = updatedOrderForm[inputIDs].valid && formisValid
        }

        //set new state
        this.setState({
            orderForm: updatedOrderForm,
            formisValid: formisValid
        })

    }

    render() {
        const formElementsArray = []
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }

        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(
                    formElement => (
                        <Input
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            invalid={!formElement.config.valid}
                            shouldValidate={formElement.config.validation}
                            touched={formElement.config.touched}
                            changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                    )
                )}
                <Button
                    btnType='Success'
                    clicked={this.orderHandler}
                    disabled={!this.state.formisValid}
                >ORDER NOW</Button>
            </form>
        )
        if (this.props.loading) {
            form = <Spinner />
        }
        return (
            <div className='ContactData'>
                <h4>Enter Contact Information</h4>
                {form}
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        ings: state.bgbld.ingredients,
        price: state.bgbld.totalPrice,
        loading: state.ord.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        OnOrderSubmit: (order, token) => dispatch(actions.tryPurchaseBurger(order, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios))