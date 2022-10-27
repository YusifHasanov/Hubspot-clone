import React from 'react';
import Navigation from "../layouts/navigation/Navigation";
import HomePage from "../layouts/HomePage/HomePage";
import Footer from "../layouts/footer/Footer";
import {Route, Routes} from "react-router-dom";
import GetDemo from "../layouts/GetDemo/GetDemo";
import LogIn from "../layouts/Registration/LogIn/LogIn";
import GetStarted from '../layouts/Registration/SignUp/GetStarted';
import StartWith from "../layouts/StartWith/StartWith";


const Dashboard = () => {
    return (
        <div>
            <Routes>
                //HomePage
                <Route path={"/"} element={
                    <>
                        <Navigation/>
                        <HomePage/>
                        <Footer/>
                    </>
                }/>
                //GetDemo
                <Route path={"/getdemo"} element={<GetDemo/>}/>
                //Login
                <Route path={"/login"} element={<LogIn/>}/>
                //Get Started
                <Route path={"/getstarted"} element={<GetStarted/>}/>
                //Started with
                <Route path={"/started-with/:path"} element={<StartWith/>}/>
            </Routes>

        </div>
    );
};

export default Dashboard;
