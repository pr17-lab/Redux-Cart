import { createSlice } from "@reduxjs/toolkit";
import { create } from "axios";

const cartSlice = createSlice({

    name: "cart",
    initialState: [],
    reducers: {
        // add to cart - view and wishlist component
        addCart: (state, action) => {
            const exitsingItem = state.find(item => item.id == action.payload)

            if (exitsingItem) {

                exitsingItem.quantity += 1
                exitsingItem.totalprice = exitsingItem.quantity * exitsingItem.price

                const remainingItem = state?.filter(item => item.id != exitsingItem.id)

                state = [...remainingItem, exitsingItem]

            } else {
                state.push({ ...action.payload, quantity: 1, totalprice: action.payload.price })
            }
        },
        // remove cart item
        removeCartItem: (state, action) => {
            return state.filter(item => item.id != action.payload)
        },
        incrementCart: (state, action) => {
            const existingProduct = state.find(item => item.id == action.payload)
            const remainingProduct = state.filter(item => item.id != action.payload)

            existingProduct.quantity += 1
            existingProduct.totalprice = existingProduct.quantity * existingProduct.price
            state = [...remainingProduct, existingProduct]
        },
        decrementCart: (state, action) => {
            const existingProduct = state.find(item => item.id == action.payload)
            const remainingProduct = state.filter(item => item.id != action.payload)

            existingProduct.quantity -= 1
            existingProduct.totalprice = existingProduct.quantity * existingProduct.price
            state = [...remainingProduct, existingProduct]
        },
        emptyCart:(state)=>{
            return []
        }
    }

})

export const { addCart, removeCartItem, incrementCart, decrementCart, emptyCart } = cartSlice.actions
export default cartSlice.reducer