import { configureStore } from "@reduxjs/toolkit"
import productSlice from "./slices/productSlice"
import wishlistSlice from "./slices/wishListSlice"

const cartStore = configureStore({
    reducer: {
        productReducer: productSlice,
        WishlistReducer: wishlistSlice,
        cartReducer: {}
    }
})

export default cartStore