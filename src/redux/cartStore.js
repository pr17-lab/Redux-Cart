import { configureStore } from "@reduxjs/toolkit"
import productSlice from "./slices/productSlice"
import wishlistSlice from "./slices/wishListSlice"
import cartSlice from "./slices/cartSlice"

const cartStore = configureStore({
    reducer: {
        productReducer: productSlice,
        WishlistReducer: wishlistSlice,
        cartReducer: cartSlice
    }
})

export default cartStore