import React from 'react'
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import { Link, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default SharedLayout