import {Box, Container} from '@mui/material';
import CartDetail from './components';

export const CartPage = ()=>{
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
            <CartDetail />
        </Container>
      </Box>
    )
}