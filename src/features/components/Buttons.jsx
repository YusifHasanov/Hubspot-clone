import "./components.css";
import React from "react";


export const LoginGoogle=({text})=>{

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





