import React from "react";
import styles from "./getStarted.module.css";
import mobileIcon from './../../../assets/homepage/navigationLogo.png';
import {ButtonOutlined, LoginGoogle} from "../../../components/Buttons";
const GetStarted = () => {
  return (
    <div className={styles.getStarted}>
      <div className={styles.getStartedContainer}>
        <div className={styles.iconDiv}> <img className={styles.rightIcon} src={mobileIcon} alt="" /></div>
            <div className={styles.formSide}>
                <h1>Create your free account</h1>
                <div className={styles.subTitle}>100% free. No credit card needed.</div>
                <div className={styles.withGoogle}>
                   <LoginGoogle style={{width:"80%"}} className={styles.loginButton} text={"Continue with Google"}/>
                </div>
                <div className={styles.other}>
                    <span>Or, sign up with email</span>
                </div>
            </div>
            <div className={styles.imageSide}></div>
      </div>
    </div>
  );
};

export default GetStarted;

/*

 <motion.div
                    initial={{y: 70, opacity: 0}}
                    animate={{y: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: .6}}
                    viewport={{once: true}}>

     </motion.div>
*/
