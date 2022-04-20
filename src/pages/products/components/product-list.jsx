
import Grid from '@mui/material/Grid';
import {sampleData} from 'sample-data';
import ProductItem from './product-item';

export default function ProductList ()
{
    
    return (
    
    <Grid
        container
        item
        spacing={3}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
          
          <Grid item lg ={3} md ={4} sm ={6} sx = {12}>
                {sampleData.map(item=>{
                    return <ProductItem product = {item}></ProductItem>
                })}
          </Grid>
      </Grid>)

}