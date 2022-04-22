import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { addProductToCart } from 'store/actions';
import { ProductItem } from './product-item';

export const ProductList = ({ children }) => {
  const productStore = useSelector((state) => state.product);
  const cartStore = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const productList = productStore.productList;
  const inCart = cartStore.inCart;
  const addedIds = inCart.map((item) => item.id);
  const handleAddToCart = (product) => {
    dispatch(addProductToCart(product));
  };

  return (
    <Grid
      container
      spacing={3}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {typeof productList !== 'undefined' && productList?.length ? (
        productList.map((item) => {
          return (
            <ProductItem
              handleAddToCart={handleAddToCart}
              key={item.id}
              product={item}
              inCart={addedIds.includes(item.id)}
            ></ProductItem>
          );
        })
      ) : (
        <></>
      )}
    </Grid>
  );
};
