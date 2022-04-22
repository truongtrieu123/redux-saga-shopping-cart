import React from 'react';

export const EmptyCart = ({ children }) => {
  return (
    <React.Fragment>
      <div className="col-10 mx-auto my-2 text-center text-title text-capitalize">
        <h1>there is no product in your cart</h1>
      </div>
    </React.Fragment>
  );
};
