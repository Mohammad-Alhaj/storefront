import { connect } from "react-redux"
import './SimpleCart.css'
import { deleteFromCart } from "../../store/Carts"
function SimpleCart (props) {
    return(
        <div className="cart">
        {
            // console.log(props.cartObject.object)
            props.cartObject.object.map((ele,idx)=>
            <div className="items">
            <h3 key={idx}>{ele.name}</h3>
            <p onClick={()=>props.deleteFromCart(ele.id)} >X</p>
            </div>
            )
          
        }
        </div>
    )
}

const mapStateToProps =(state)=>({

    cartObject:state.CartReducer
})
const mapdispatchToprops = {deleteFromCart}



export default connect(mapStateToProps,mapdispatchToprops)(SimpleCart)