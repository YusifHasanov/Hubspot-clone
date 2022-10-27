import React from 'react';
import styles from './growing.module.css'
import Go from "../../../../GlobalRoute";
import {useNavigate} from "react-router-dom";

const Growing = () => {
    const navigate=useNavigate();
    return (
        <div className={styles.growingContainer}>
            <div className={styles.growing}>
                <div className={styles.content}>
                    <h2>Start Growing With HubSpot Today</h2>
                    <p>With tools to make every part of your process more human and a support team excited to help you,
                        getting started with inbound has never been easier.
                    </p>
                    <div className={styles.buttons}>
                        <button className={styles.filled} onClick={()=>{Go.to(navigate,"/getstarted")}}>Get a demo</button>
                        <button className={styles.outlined} onClick={()=>{Go.to(navigate,"/getdemo")}}>Get started free</button>
                    </div>
                    <span>Get started with free tools, or get more with our premium software.</span>
                </div>
                <div className={styles.image}>
                    <img src={"https://www.hubspot.com/hubfs/CSOL/module-assets/_cta_contentblock_headshots_headshot_6.png"} alt=""/>
                </div>

            </div>
        </div>
    );
};

export default Growing;
