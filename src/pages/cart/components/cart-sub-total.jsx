import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearCart } from 'actions';

export const CartSubTotal = ({ children }) => {
  const cartStore = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const total = cartStore.total;

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="row d-flex justify-content-end">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-end ">
            <Link to="/cart">
              <button
                className="btn btn-danger text-uppercase  mb-3 px-5"
                type="button"
                onClick={() => {
                  handleClearCart();
                }}
              >
                Clear cart
              </button>
              <button
                className="btn btn-success text-uppercase ms-3 mb-3 px-5"
                type="button"
                onClick={() => {
                  handleClearCart();
                }}
              >
                Buy Now
              </button>
            </Link>
            <h4 className="text-title text-capitalize text-end">
              total: ${total}
            </h4>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
