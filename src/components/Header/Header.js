import { connect } from "react-redux";

import './Header.css'

 function Header(props){
    return(
    <div className='header'>

<h1>MY store</h1>
<div>Cart ({props.itemNumber.count})</div>


    </div>
    )

}
const mapStateToProps = (state) => ({
    itemNumber :state.CartReducer
  })

  export default connect(mapStateToProps)(Header)