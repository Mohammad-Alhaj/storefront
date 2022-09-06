import initialState from './initialState.json'




export default function reducer(state = initialState,action){
const   {type} = action
switch (type) {
    case "computers & accessories":
      // console.log(type);
    let result = initialState.filter((ele)=>{
      return ele.category === type
    })
    console.log('result',state);
    return result

    case "book":
      // console.log(type);
    let results = initialState.filter((ele)=> {
      return ele.category === type
    })
    console.log('results',results);

    return results
    
    case "all":
      // let result = initialState.map(e)
      console.log({initialState});
 return initialState
    default:
      return state
}
}


export const computers = (category)=>{
   return {
    type:category,

   
   } 
}
export const book = (category)=>{
    return {
        type:category,
       
       } }
export const all = ()=>{
    return {
        type:'all',
       
       } }