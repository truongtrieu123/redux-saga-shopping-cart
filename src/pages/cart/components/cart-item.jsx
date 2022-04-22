import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

export const CartItem = ({
  incrementProduct,
  decrementProduct,
  removeProduct,
  product,
  children,
}) => {
  const { img, title, price, amount } = product;

  return (
    <React.Fragment>
      <div className="container-fluid text-center d-flex-block text-capitalize justify-content-between">
        <div className="row">
          <div className="col-10 mx-auto col-lg-2">
            <img
              alt="alt"
              src={img}
              className="mx-auto mb-1"
              style={{ width: '5rem', height: '5rem' }}
            ></img>
          </div>
          <div className="col-10 mx-auto col-lg-2 mt-2 mb-1">
            <p>{title}</p>
          </div>
          <div className="col-10 mx-auto col-lg-2 mt-2 mb-1">
            <p>${price}</p>
          </div>
          <div className="col-10 mx-auto col-lg-2 mt-2 mb-1">
            <span
              className="btn btn-black ms-1"
              onClick={() => {
                decrementProduct(product);
              }}
            >
              -
            </span>
            <span className="btn btn-black ms-1">{amount}</span>
            <span
              className="btn btn-black ms-1"
              onClick={() => {
                incrementProduct(product);
              }}
            >
              +
            </span>
          </div>
          <div className="col-10 mx-auto col-lg-1  mt-2 mb-1">
            <IconButton
              onClick={() => {
                removeProduct(product);
              }}
            >
              <DeleteIcon  sx={{ color: 'red' }}/>
            </IconButton>
          </div>

          <div className="col-10 mx-auto col-lg-1 mt-2 mb-1">
            <p>{amount * price}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
