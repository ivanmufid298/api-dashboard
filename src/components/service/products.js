import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"


export const getProducts = createAsyncThunk('getProducts', async(arg)=>{

    const result = await fetch('https://fakestoreapi.com/products?limit=10')
    .then(res => res.json())
    return result

})

const products = createSlice ({
    name:'products',
    initialState:{
        products:[],
        cart:[],
        loading:false,
        error:null
    },
    reducers:{
        addToCart:(state,action)=>{
            let oldItems = state.cart.filter(val=> val.id!==action.payload.id)
            let newItems = state.cart.filter(val => val.id===action.payload.id)
            let newQty = newItems.length?newItems[0]?.qty+1:1
            newItems.length?newItems[0]={...action.payload, qty:newQty}:newItems=[{...action.payload, qty:newQty}]
            oldItems.push(newItems[0])
            state.cart=oldItems
        },
        deleteItem:(state,action)=>{
            state.cart=state.cart.filter(val=> val.id!==action.payload)
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getProducts.fulfilled, (state,actions) => {
            state.products=actions.payload
        })
    }
})

export  const {addToCart,deleteItem} = products.actions
export default products.reducer