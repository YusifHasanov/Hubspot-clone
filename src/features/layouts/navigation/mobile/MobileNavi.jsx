import React, {useState} from 'react';
import styles from './mobileNavi.module.css';
import logo from '../../../assets/homepage/navigationLogo.png'
import {SlArrowRight} from "react-icons/sl";
import {RiArrowDownSLine, RiGlobeFill} from "react-icons/ri";
import {IoIosContact} from "react-icons/io";
import Go from "../../../../GlobalRoute";
import {useNavigate} from "react-router-dom";
const MobileNavi = () => {
    const [none, setNone] = useState(true);
    const navigate=useNavigate();
    return (
        <div className={styles.mobileNaviContainer}>
            <img className={styles.logo} src={logo} alt=""/>
            <div className={styles.barICon} onClick={() => {
                setNone(r => !r)
            }}>
                <div className={styles.small}></div>
                <div className={styles.big}></div>
                <div className={styles.small}></div>
            </div>
            <div className={styles.mainSideBar} style={{display: none ? "none" : "block"}}>
                <div>
                    <div className={styles.mainMenuItem}>
                        Software <SlArrowRight className={styles.menuArrow}/>
                    </div>
                    <div className={styles.mainMenuItem}>
                        Pricing <SlArrowRight className={styles.menuArrow}/>
                    </div>
                    <div className={styles.mainMenuItem}>
                        Resources <SlArrowRight className={styles.menuArrow}/>
                    </div>
                    <div className={styles.mainMenuItem}>
                        About <SlArrowRight className={styles.menuArrow}/>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.filled} onClick={()=>{Go.to(navigate,"/getdemo")}}>Get a demo</button>
                        <button className={styles.outlined}>Get started free</button>
                    </div>
                    <div className={styles.sidebarFooter}>
                        <div className={styles.englishContact}>
                        <div>

                            <div><RiGlobeFill className={styles.icon}/> English <RiArrowDownSLine/></div>
                            <div><IoIosContact className={styles.icon}/> Contact Sales</div>
                        </div>
                        </div>
                        <div className={styles.second}>
                            <div>Log in</div>
                            <div>Customer Support</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNavi;
