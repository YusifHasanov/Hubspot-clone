import React from 'react';
import styles from './bottomnavi.module.css';
import desktopIcon from '../../../assets/homepage/bottomNaviIvon.svg'
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import {TbArrowNarrowRight} from "react-icons/tb";
import softwareIcon from "../../../assets/homepage/cookie (5).png";
import starIcon from "../../../assets/homepage/cookie (4).png";
import heartIcon from "../../../assets/homepage/cookie (3).png";
import boxesIcon from "../../../assets/homepage/cookie (2).png";
import cookieIcon from "../../../assets/homepage/cookie (1).png";
import Go from "../../../../GlobalRoute";
import {useNavigate} from "react-router-dom";


const BottomNavi = () => {
    const navigate=useNavigate();
    const boxes = [
        {
            icon: softwareIcon,
            title: "Marketing Hub",
            p: "Marketing automation software.",
            span: "Free and premium plans"
        },
        {
            icon: starIcon,
            title: "Sales Hub",
            p: "Sales CRM software.",
            span: "Free and premium plans"
        },
        {
            icon: heartIcon,
            title: "Service Hub",
            p: "Customer service software.",
            span: "Free and premium plans"
        },
        {
            icon: boxesIcon,
            title: "Commerce Hub",
            p: "Ecommerce software.",
            span: "Free and premium plans"

        },
        {
            icon: cookieIcon,
            title: "Free Tools",
            p: "Free marketing and sales tools.",
            span: "Free forever"
        }
    ];
    const renderedBoxes = boxes.map((box, id) => (
        <div className={styles.gridBox}>
            <div className={styles.iconBox}>
                <img src={box.icon} alt=""/>
            </div>
            <div className={styles.contentContainer}>
                <h4>
                    {box.title}
                </h4>
                <p>{box.p}<span
                >{box.span} <TbArrowNarrowRight className={styles.rArrow}/></span></p>
            </div>
        </div>
    ))


    return (
        <div className={styles.bottomNavi}>
            <div className={styles.left}>
                <img src={desktopIcon} className={styles.logo} alt="logo"/>
            </div>
            <div className={styles.submenu}>
                <ul className={styles.leftList}>
                    <li className={styles.software}>Software <MdOutlineKeyboardArrowDown className={styles.arrow}/>
                        <div className={styles.softwareSubmenu}>
                            <div className={styles.headerContainer}>
                                <h2>The HubSpot CRM Platform</h2>
                                <p>All of HubSpot’s marketing, sales CRM, customer service, CMS, and operations software
                                    on one platform.</p>
                            </div>
                            <div className={styles.buttonsContainer}>
                                <button>Free HubSpot CRM <TbArrowNarrowRight/></button>
                                <button>Owerview of all products <TbArrowNarrowRight/></button>
                            </div>
                            <div className={styles.boxesContainer}>
                                {renderedBoxes}
                            </div>
                            <div className={styles.footer}>
                                <h3>App Marketplace</h3>
                                <p>Connect your favorite apps to HubSpot.
                                    <span>See all integrations <TbArrowNarrowRight className={styles.rArrow}/></span>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>Pricing</li>
                    <li>Resources <MdOutlineKeyboardArrowDown className={styles.arrow}/></li>
                </ul>
                <ul>
                    <li>
                        <button className={styles.sublistButtonFill} onClick={()=>{Go.to(navigate,"getdemo")}}>Get a demo</button>
                    </li>
                    <li>
                        <button className={styles.sublistButton} onClick={()=>{Go.to(navigate,"/getstarted")}}>Get started free</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default BottomNavi;
