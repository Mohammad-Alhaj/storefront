import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Products.css'
import { connect } from "react-redux";
 function Products(props){

    return(
    <div className='products'>
     { console.log(props.product)}
      {
       props.product.map((ele,idx)=>
       
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
        <Button size="small">add to cart</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
   
)
}
   
    
    </div>
    )
}

const mapStateToProps = (state) => ({
    product :state
})

export default connect(mapStateToProps)(Products)