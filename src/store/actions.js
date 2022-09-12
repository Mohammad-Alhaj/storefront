// import axios from "axios";
// // const {useEffect} from ''
// const API = 'https://todoappmohammadalhaj.herokuapp.com/api/v1'
// // useEffect

// export const getDataApi = ()=>{
//     // React.useEffect(()=>{
//     //     console.log('useEffect');

//    return (dispatch)=>{

//      axios.get(`${API}/myStore`).then((request)=>{
        
//         dispatch(getAction(request.data))
//         console.log('From getDataApi', request.data);
//         return request.data
//         }).catch((err)=>{
//         console.log(`Error,${err.message}`);
//         })
         
//         }
// } 



// // },[])
// const getAction = (payload)=>{
//     return{
//         type:"GET",
//         payload:payload
//     }
// }


// // Update amount...

// export const updateDataApi = (ele)=>{
     
//  console.log('ele from put method',ele.id);
//  return ()=>{
//       axios.put(`${API}/myStore/${ele.id}`,{
       
//         category:ele.category,
//         name: ele.name,
//         description:  ele.description,
//        image:ele.image,
//        price:ele.price,
//        amount:ele.amount - 1
 
//     }).then((request)=>{
//          console.log(request);
//          return request
//          }).catch((err)=>{
//          console.log(`Error,${err.message}`);
//          })
          
//          }}


//  const updateAction = (payload)=>{
//      return{
//          type:"PUT",
//          payload:payload
//      }
//  }

