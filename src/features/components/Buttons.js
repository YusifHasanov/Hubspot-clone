import { useNavigate } from "react-router-dom";
import "./components.css";
import Go from "../../GlobalRoute";
import styles from "../layouts/Registration/LogIn/login.module.css";
import React from "react";
export const ButtonOutlined =({text,path})=>{
    const navigate = useNavigate();
    return(
        <button className={"outlined"} onClick={()=>{Go.to(navigate,path)}}>{text}</button>
    )
}

export const LoginGoogle=({text,path})=>{
    const navigate = useNavigate();
    return(
        <div className={"loginWithGoogle"}>
        <button className={"loginGoogle"}>
            <img
                className={"googleIcon"}
                src={ "https://static.hsappstatic.net/LoginUI/static-1.7206/img/google-logo.png" }
                alt={"googleLoginButton"}
            />
            {text}
        </button>
        </div>
    )
}





