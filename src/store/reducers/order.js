import * as actionTypes from '../actions/actionTypes'

const initialState = {
    orders: [],
    purchased: null,
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(actionTypes.PURCHASE_BURGER_SUCCESS):
            const newOrder = {
                ...action.orderData,
                id: action.id
            }
            return {
                ...state,
                loading: false,
                purchased: true,
                orders: state.orders.concat(newOrder)
            }
        case(actionTypes.PURCHASE_BURGER_FAIL):
            return {
                ...state,
                purchased: false,
                loading: false
            }
        case (actionTypes.PURCHASE_BURGER):
            return{
                ...state,
                loading: true
            }
        case(actionTypes.PURCHASE_INIT):
            return{
                ...state,
                purchased: false
            }
        case actionTypes.FETCH_ORDERS_START:
            return{
                ...state,
                loading:true
            }
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return{
                ...state,
                orders: action.orders,
                loading: false
            }
        case actionTypes.FETCH_ORDERS_FAIL:
            return {
                ...state,
                loading:false
            }
        default:
            return state
    }
}

export default reducer