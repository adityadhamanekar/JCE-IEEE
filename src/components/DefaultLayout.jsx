import React from "react";
import Navbar from "../includes/Navbar";
import Footer from "../includes/Footer";

function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className='content'>{children}</div>
      <Footer />
    </>
  );
}

export default DefaultLayout;
