import { createSlice } from "@reduxjs/toolkit";



const initialState ={
    items :[]
}


localStorage.getItem("items")!==null?
initialState.items = JSON.parse(localStorage.getItem("items"))
:initialState.items=[]





const ProductSlice = createSlice({
    name:"Product",
    initialState ,
    reducers:{
        addToCart:(state,action)=>{
            state.items.push(action.payload)
            localStorage.setItem("items",JSON.stringify(state.items))
    }, removeFromCart :(state,action)=>{
        const itemId = action.payload.id;
        let removed = false;
        state.items = state.items.filter((item) => {
            if (!removed && item.id === itemId) {
                removed = true;
                return false;
            }
            return true
        });
        localStorage.setItem("items",JSON.stringify(state.items))

    }
}})



export default ProductSlice;
