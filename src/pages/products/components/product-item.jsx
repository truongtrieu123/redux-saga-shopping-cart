import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export const ProductItem = ({ handleAddToCart, product, inCart, children }) => {
  const { title, img, price } = product;

  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Card sx={{ width: '100%' }}>
        <CardMedia
          component="img"
          height="270"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" align="center" component="div">
            {title}
          </Typography>
          <Typography variant="body2" align="center" color="text.secondary">
            ${price}
          </Typography>
        </CardContent>
        <CardActions>
          <Box width="100%" display="flex" justifyContent="center">
            {inCart ? (
              <Button size="small" variant="contained" color="secondary">
                In cart
              </Button>
            ) : (
              <Button
                size="small"
                variant="contained"
                onClick={() => handleAddToCart(product)}
                color="primary"
              >
                Add to cart
              </Button>
            )}
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
};
