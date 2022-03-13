import React from "react"

import Header from "./../header/Header"
import Footer from "./../footer/Footer"
import '../../../assets/styles/main.scss'

const Layout = ({ children }) => {

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout