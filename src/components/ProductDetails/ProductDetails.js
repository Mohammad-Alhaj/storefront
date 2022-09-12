import {useParams} from 'react-router-dom'
import { getById } from '../../store/getDataApi'
import { connect } from "react-redux";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function ProductDetails(props) {

    const {id} = useParams()
    // const getID = async() =>{
    //     let data = await  props.getById(id)
    //     console.log(data);
    // }
    
   console.log('ggggggg',props.getById(id));
return(
<>
{console.log("ddddd",id)}
{ props.product.map((ele,idx)=>
    ele.id == id?
   ( <Card key={idx} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="280"
        image = {ele.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {ele.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {ele.description}
        </Typography>
      </CardContent>
      <CardActions>  
      <Button size="small" >add to cart</Button>
       
        <Typography >In stock : {ele.amount}</Typography>

      </CardActions>
    </Card>):null
    )
}

</>
)
}

const mapStateToProps = (state) => ({
    product :state.server
  })
   const mapDispatchToProps  = {getById}
  
  // if swap between mapdispatchToprops and mapStateToProps give me error ^ ^
  
  export default connect(mapStateToProps , mapDispatchToProps)(ProductDetails)

