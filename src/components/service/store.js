import {configureStore} from "@reduxjs/toolkit"
import productReducers from "./products"

export default configureStore({
    reducer:{
        products:productReducers
    }
})