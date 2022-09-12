import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"; 
const serverSlice = createSlice({
  name:'server',
  initialState: [],
  reducers:{
    getAction(state,action) {
    
      return action.payload
    },
    getDataById(state,action) {
      console.log('getDataById',action);
      console.log('getDataById',state);
      return action.payload
    },
    computers(state,action){
      let result = state.filter((ele) => {
        return ele.category === action.type;
      });
    //   console.log("result", state);
      return result;
    },
    book(state,action){
      let results = state.filter((ele) => {
        return ele.category === action.type;
      });
      console.log("results", results);

      return results;
    },
    all(state,action){
      return state;
    }
  }
}) 



const API = 'https://todoappmohammadalhaj.herokuapp.com/api/v1'


export const getDataApi= ()=> async(dispatch,state)=>{
let request = await axios.get(`${API}/myStore`)
dispatch(getAction(request.data))

}




export const updateDataApi = (ele)=> async(dispatch,state)=>{
  let request = await axios.put(`${API}/myStore/${ele.id}`,{
        
    category:ele.category,
    name: ele.name,
    description:  ele.description,
   image:ele.image,
   price:ele.price,
   amount:ele.amount - 1
  })
  return request

}

export const getById =(id)=> async(state,dispatch)=>{
  let request = await axios.get(`${API}/myStore/${id}`)
  console.log('getById',request.data);
 return request.data
  // let data = await 
  // return data
  // dispatch(getDataById(request.data))
}




export const {getAction,all,getDataById,computers,book} = serverSlice.actions
export default serverSlice.reducer




// const initialState = [];

// export default function server(state = initialState, action) {
//   const { type, payload } = action;
//   // CRUD methods API
//   switch (type) {
//     case "GET":
//       return payload;
//     // case "PUT":
//     //     console.log('payload PUT',payload);
//     //   return [...state]

      
//     // category
//     case "computers & accessories":
//         console.log("state computer",state);
//       let result = state.filter((ele) => {
//         return ele.category === type;
//       });
//     //   console.log("result", state);
//       return result;

//     case "book":
//         console.log("state book",state);

//       let results = state.filter((ele) => {
//         return ele.category === type;
//       });
//       console.log("results", results);

//       return results;

//     case "all":
//         console.log("state all",state);
//         console.log({initialState});
//       console.log({ state });
//       return state;
//     default:
//       return state;
//   }
// }



