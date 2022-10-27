import React from 'react';
import Header from "./header/Header";
import BusinessWillLove from "./BusinessWillLove/BusinessWillLove";
import Community from "./community/Community";
import Customers from "./customers/Customers";
import Growing from "./Growing/Growing";

const HomePage = () => {
    return (
        <div style={{overflow:"hidden"}}>
            <Header/>
            <BusinessWillLove/>
            <Community/>
            <Customers/>
            <Growing/>
        </div>
    );
};

export default HomePage;
