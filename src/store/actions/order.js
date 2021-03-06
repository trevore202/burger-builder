import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'

const purchaseBurger = () => {
    return {
        type: actionTypes.PURCHASE_BURGER
    }
}

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}

export const tryPurchaseBurger = (order, token) => {
    return dispatch => {
        dispatch(purchaseBurger()) //sets the state to loading
        axios.post('/orders.json?auth=' + token, order).then(
            res => {
                window.localStorage.removeItem('burger')
                dispatch(purchaseBurgerSuccess(res.data.name, order))
            }
        ).catch(
            error => {
                dispatch(purchaseBurgerFail(error))
            }
        )
    }
}

const purchaseBurgerSuccess = (id, order) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        id: id,
        orderData: order
    }
}

const purchaseBurgerFail = (error) => {
    return{
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
}


export const fetchOrdersSuccess = orders => {
    return{
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}

export const fetchOrdersFail = error => {
    return{
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    }
}

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrdersStart())
        const queryParams = '?auth=' + token +  '&orderBy="userId"&equalTo="' + userId + '"'
        axios.get('/orders.json' + queryParams).then( response => {
            const fetchedOrders = []
            for (let key in response.data)
                fetchedOrders.push( {...response.data[key], id:key} )
            dispatch(fetchOrdersSuccess(fetchedOrders))
    
        }).catch( error =>{
            dispatch(fetchOrdersFail(error))
        })
    }
}