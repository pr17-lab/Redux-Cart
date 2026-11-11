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

                state = [...remainingItem,exitsingItem]

            } else {
                state.push({ ...action.payload, quantity: 1, totalprice: action.payload.price })
            }
        }
    }

})

export const {addCart} = cartSlice.actions
export default cartSlice.reducer