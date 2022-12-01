import React, {useState} from "react";
import styles from "./getStarted.module.css";
import mobileIcon from './../../../assets/homepage/navigationLogo.png';
import {  LoginGoogle} from "../../../components/Buttons.jsx";
import Regex from "../../../../Regex";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import girl from './../../../assets/getstarted/girl.png'
import hubspotIcon from './../../../assets/homepage/bottomNaviIvon.svg'



const GetStarted = () => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const checkEmail = (data) => {
        setEmail(data);
        setEmailError(false)
        setTimeout(() => {
            Regex.email(data) ? setEmailError(false) : setEmailError(true);
        }, 1000)
    }
    return (
        <div className={styles.getStarted}>
            <div className={styles.desktopIconDiv}>
                <img  className={styles.desktopIcon} src={hubspotIcon} alt=""/>
            </div>
            <div className={styles.getStartedContainer}>
                <div className={styles.iconDiv}><img className={styles.rightIcon} src={mobileIcon} alt=""/></div>

                <motion.div
                    initial={{x: 70, opacity: 0}}
                    animate={{x: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: .6}}
                    viewport={{once: true}}>

                    <div className={styles.formSide}>

                        <h1>Create your free account</h1>
                        <div className={styles.subTitle}>100% free. No credit card needed.</div>
                        <div className={styles.withGoogle}>
                            <LoginGoogle style={{width: "80%"}} className={styles.loginButton}
                                         text={"Continue with Google"}/>
                        </div>
                        <div className={styles.other}>
                            <span>Or, sign up with email</span>
                        </div>
                        <div className={styles.formGroup}>
                            <input value={email} onChange={(e) => {
                                checkEmail(e.target.value.trim())
                            }} className={!emailError ? styles.emailInput : styles.errorEmail}
                                   placeholder={"Email address"}
                                   alt={"email"} type={"text"}/>
                            {emailError ? <div className={styles.error}>Please enter a valid email address</div> : null}
                        </div>
                        <div className={styles.verified}>
                            <button disabled={ emailError} className={styles.verifiedButton}>Verify
                                email <MdOutlineKeyboardArrowRight className={styles.arrowIcon}/></button>
                        </div>
                        <div className={styles.verifiedContainer}>
                            <small>
                                We’re committed to your privacy. HubSpot uses the information you provide to us to
                                contact
                                you about our relevant content, products, and services. You may unsubscribe from these
                                communications at any time. For more information, check out our <Link
                                className={styles.policyLink} target={"_blank"} to={"/privacy-policy"}>Privacy
                                Policy</Link>
                            </small>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{x: 70, opacity: 0}}
                    animate={{x: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: .6,delay:.5}}
                    viewport={{once: true}}>

                    <div className={styles.imageSide}>
                        <div className={styles.imageHeader}>
                            <h4>HubSpot's CRM is 100% free.</h4>
                            <div>No credit card needed.</div>
                        </div>
                        <div className={styles.imageBox}>
                            <img src={girl} alt=""/>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default GetStarted;


