import React from "react";

import Header from "./../header/Header";
import Footer from "./../footer/Footer";
import "../../../assets/styles/main.scss";
import NotifyProvider from "../Notify/NotifyProvider";

const Layout = ({ children }) => {
  return (
    <>
      <NotifyProvider>
        <Header />
        {children}
        <Footer />
      </NotifyProvider>
    </>
  );
};

export default Layout;
