import { Router, Switch } from '@mui/icons-material';
import { ProductsPage, CartPage, Navbar } from 'pages';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Router exact path="/">
          <ProductsPage />
        </Router>
        <Router exact path="/cart">
          <CartPage />
        </Router>
      </Switch>
    </>
  );
}

export default App;
