
const initialState ={
    count: 0,
    object:[]
}
export default function CartReducer(state =initialState ,action) {
    const {type,payload} = action

switch (type) {
    case 'INCREMENT':

        return{
            count: state.count+1
        }
    case 'ADDTOCARD':


        return{
            count:state.count+1,
            object: [...state.object,payload]
            // [...state.object,payload]
        }
    case 'DELETEFROMCART':
        let result = state.object.filter(ele=>ele.id !== payload)

        return{
            count:state.count - 1,
            object: result
            // [...state.object,payload]
        }
      

    default:
       return state
}
}



export const increment = ()=>{
    return{
        type:'INCREMENT'
    }
    
}

export const addToCard = (payload)=>{
    return{
        type:'ADDTOCARD',
        payload:payload
    }
    
}

export const deleteFromCart = (id)=>{
    return{
        type:'DELETEFROMCART',
        payload:id
    }
    
}