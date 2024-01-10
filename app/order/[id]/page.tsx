import React from 'react';

const OrderPage = ({ params }: { params: { id: string } }) => {
  return <div>Order Page {params.id}</div>;
};

export default OrderPage;
