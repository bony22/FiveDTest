import {ADD_INFO,FETCH_INFO,ADD_TO_CART,FETCH_CART,REMOVE_FROM_CART} from './ActionType'
    

export const addInfo = (data) =>({

    type: ADD_INFO,
    payload: data
})

export const fetchInfo = (data) =>({

    type: FETCH_INFO,
    payload: data
})



export const addToCart = (data) =>({

    type: ADD_TO_CART,
    payload: data
})

export const fetchCart = (data) =>({

    type: FETCH_CART,
    payload: data
})

export const deleteCart = (data) =>({

    type: REMOVE_FROM_CART,
    payload: data
})





























