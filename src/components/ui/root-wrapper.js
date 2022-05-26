import React from "react";
import { ApolloWrapper } from "../../apollo/ApolloWrapper";
import { CartProvider } from "../../context/CartContext";
import NotifyProvider from "./Notify/NotifyProvider";

export default ({ element }) => {
  return (
    <ApolloWrapper>
      <CartProvider>{element}</CartProvider>
    </ApolloWrapper>
  );
};
