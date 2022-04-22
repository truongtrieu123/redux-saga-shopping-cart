import { WindowSharp } from '@mui/icons-material';
import { Box, Container } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CartColumns, CartSubTotal, CartList, EmptyCart } from './components';

export const CartPage = () => {
  const cartStore = useSelector((state) => state.cart);
  const inCart = cartStore.inCart;


  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {typeof inCart !=='undefined' && inCart.length  ? (
          <>
            <CartColumns></CartColumns>
            <CartList></CartList>
            <CartSubTotal></CartSubTotal>
          </>
        ) : (
          <EmptyCart />
        )}
      </Container>
    </Box>
  );
};
