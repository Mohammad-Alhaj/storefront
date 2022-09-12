import React from 'react';
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Products.css'
import { connect } from "react-redux";
import {getDataApi,updateDataApi} from '../../store/getDataApi'
import { increment ,addToCard} from '../../store/Carts';
import {Link} from 'react-router-dom'

 function Products({increment,addToCard,getDataApi,updateDataApi,product}){


useEffect(() => {
  console.log('outside the useEffect')
 getDataApi()

}, [getDataApi])



    return(
    <div className='products'>
     { console.log(product)}
      {
      product.map((ele,idx)=>
      <Link to={`${ele.id}`} key={ele.id}>
     <Card key={idx} sx={{ maxWidth: 345 }}>
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
        {ele.amount>0?<Button size="small" onClick={()=>{
     updateDataApi(ele)
     getDataApi()
          getDataApi()
        addToCard(ele)
        getDataApi()

          
        }
        }
          >add to cart</Button>:<p style={{backgroundColor:'red',padding:"5px",
        borderRadius:"5px",color:'white'
        
        }}>out of stock</p>
          }
        <Typography >In stock : {ele.amount}</Typography>
        {/* <Button onClick={()=>} >re render </Button> */}
      </CardActions>
    </Card>
    </Link>
   
)

}
   
    </div>
    )
}

const mapStateToProps = (state) => ({
    product :state.server,
})

const mapdispatchToprops = {increment,addToCard,getDataApi,updateDataApi}

export default connect(mapStateToProps,mapdispatchToprops)(Products)