import React from 'react';
import styles from "./topNavi.module.css";
import {RiGlobeFill} from "react-icons/ri";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import {IoIosContact} from "react-icons/io";
import {BiSearchAlt2} from "react-icons/bi";
import {useNavigate} from "react-router-dom";
import Go from "../../../../GlobalRoute";

const TopNavi = () => {
    const navigate=useNavigate();
    return (
        <div className={styles.topNaviContainer}>
            <div className={styles.left}>
                <ul className={styles.rightList}>
                    <li>
                        <RiGlobeFill className={styles.icon}/> English <MdOutlineKeyboardArrowDown className={styles.arrow}/>
                    </li>
                    <li>  <IoIosContact className={styles.icon}/> Contact Sales</li>
                </ul>
            </div>
            <div className={styles.right}>
                <ul className={styles.leftList}>
                    <li><BiSearchAlt2 className={styles.searchIcon}/></li>
                    <li onClick={()=>{Go.to(navigate,"/login")}}>Log in</li>
                    <li>Customer Support</li>
                    <li>About <MdOutlineKeyboardArrowDown className={styles.arrow}/></li>
                </ul>
            </div>
        </div>
    );
};

export default TopNavi;
