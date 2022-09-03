import { Tabs,Tab,Box } from '@mui/material';
import * as React from 'react';
import './Categories.css'
import { connect } from 'react-redux';
import {book,computers,all} from '../../store/Prduct'

function Categories(props){
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue) => {
      setValue(newValue);
    };
return(
    <div className='categories'>
     <Box className='tabs' sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="All" onClick={()=>props.all()} />
        <Tab label="Computers & Accessories" onClick={()=>props.computers("computers & accessories")} />
        <Tab label="Books" onClick={()=>props.book("book")}/>
      </Tabs>
    </Box>
    
    </div>
)

}

const mapStateToProps = (state) => ({
  product :state
})
 const mapDispatchToProps  = {book,computers,all}

// if swap between mapdispatchToprops and mapStateToProps give me error ^ ^

export default connect(mapStateToProps , mapDispatchToProps)(Categories)

