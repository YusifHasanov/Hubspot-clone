import React from 'react';
import styles from './header.module.css';
import headerBg from '../../../assets/homepage/headerBackground.png'
import {useNavigate} from "react-router-dom";
import Go from "../../../../GlobalRoute";
const Header = () => {
    const navigate=useNavigate();
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <div className={styles.contentSide}>
                    <p className={styles.contentSubHeader}>HubSpot CRM Platform</p>
                    <h1 className={styles.contentHeader}>Powerful, <br/>not overpowering </h1>
                    <p className={styles.contentText}>Finally, a CRM platform that’s both
                        powerful and easy to use. Create delightful customer experiences. Have a delightful time doing
                        it.
                    </p>
                    <div className={styles.buttons}>
                        <button className={styles.buttonFill} onClick={()=>{Go.to(navigate,"/getdemo")}}>Get a demo</button>
                        <button className={styles.buttonOutlined} onClick={()=>{Go.to(navigate,"/getstarted")}}>Get started free</button>
                    </div>
                    <p className={styles.afterButtons}>Get started with free tools,or get more with our premium software</p>
                </div>
                <div className={styles.imageSide}>
                    <div className={styles.imagebox}>
                        <img className={styles.headerBackground} src={headerBg} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
