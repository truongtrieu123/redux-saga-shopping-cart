import {Box, Container} from '@mui/material';
import ProductList from './components';

export const ProductsPage = ()=>{
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
            <ProductList />
        </Container>
      </Box>
    )
}