import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        count:0,
        object:[]
    },
    reducers:{
        increment(state,action){
            return { count: state.count+1}
            // return {...state,count:state.count+1}
        },
        addToCard(state,action){
            return{
                count:state.count+1,
                object: [...state.object,action.payload]
                // [...state.object,payload]
            }
        },
        deleteFromCart(state,action){
            let result = state.object.filter(ele=>ele.id !== action.payload)

        return{
            count:state.count - 1,
            object: result
            // [...state.object,payload]
        }
        },
    }
})



export const {increment,addToCard,deleteFromCart} = cartSlice.actions
export default cartSlice.reducer












// const initialState ={
//     count: 0,
//     object:[]
// }
// export default function CartReducer(state =initialState ,action) {
//     const {type,payload} = action

// switch (type) {
//     case 'INCREMENT':

//         return{
//             count: state.count+1
//         }
//     case 'ADDTOCARD':


//         return{
//             count:state.count+1,
//             object: [...state.object,payload]
//             // [...state.object,payload]
//         }
//     case 'DELETEFROMCART':
//         let result = state.object.filter(ele=>ele.id !== payload)

//         return{
//             count:state.count - 1,
//             object: result
//             // [...state.object,payload]
//         }
      

//     default:
//        return state
// }
// }



// export const increment = ()=>{
//     return{
//         type:'INCREMENT'
//     }
    
// }

// export const addToCard = (payload)=>{
//     return{
//         type:'ADDTOCARD',
//         payload:payload
//     }
    
// }

// export const deleteFromCart = (id)=>{
//     return{
//         type:'DELETEFROMCART',
//         payload:id
//     }
    
// }