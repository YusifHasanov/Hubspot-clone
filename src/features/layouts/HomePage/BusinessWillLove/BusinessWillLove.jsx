import React from 'react';
import styles from './willLove.module.css'
import softwareIcon from "../../../assets/homepage/cookie (5).png";
import starIcon from "../../../assets/homepage/cookie (4).png";
import heartIcon from "../../../assets/homepage/cookie (3).png";
import boxesIcon from "../../../assets/homepage/cookie (2).png";
import cookieIcon from "../../../assets/homepage/cookie (1).png";
import {AiFillCheckCircle} from "react-icons/ai";
import {TbRegistered} from "react-icons/tb";
import Go from "../../../../GlobalRoute";
import {useNavigate} from "react-router-dom";

const cardData = [
    {
        icon: softwareIcon,
        title: "Marketing Hub",
        sup: "TM",
        description: "Marketing software to help you grow traffic, convert more visitors, and run complete inbound marketing campaigns at scale.",
        list: [
            "Lead generation",
            "Marketing automation",
            "Analytics"
        ],
        path: "/started-with/marketing"
    },
    {
        icon: starIcon,
        title: "Sales Hub",
        sup: <TbRegistered style={{fontSize:16}}/>,
        description: "Sales CRM software to help you get deeper insights into prospects, automate the tasks you hate, and close more deals faster.",
        list: [
            "Advanced CRM",
            "Meeting scheduling",
            "Payments"
        ],
        path: "/sales"
    },
    {
        icon: heartIcon,
        title: "Service Hub",
        sup: "TM",
        description: "Customer service software to help you connect with customers, exceed expectations, and turn them into promoters who grow your business.",
        list: [
            "Tickets",
            "Customer feedback",
            "Knowledge base"
        ],
        path: "/service"
    },
    {
        icon: boxesIcon,
        title: "CMS Hub",
        sup: <TbRegistered style={{fontSize:16}}/>,
        description: "Content management software that’s flexible for marketers, powerful for developers, and gives customers a personalized, secure experience.",
        list: [
            "Drag-and-drop editor",
            "SEO recommendations",
            " Website themes"
        ],
        path: "/cms"
    },
    {
        icon: cookieIcon,
        title: "Operations Hub",
        sup: <TbRegistered style={{fontSize:16}}/>,
        description: "Operations software that syncs your apps, cleans and curates customer data, and automates processes — so all your systems and teams work better together.",
        list: [
            "Data sync",
            "Programmable automation",
            "Data quality automation"
        ],
        path: "/operations"
    }


];
const BusinessWillLove = () => {
 const navigate =useNavigate();

    const renderedCards = cardData.map((card, index) => (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                    <img className={styles.headerIcon} src={softwareIcon} alt=""/>
                    <h3>
                        {card.title} <sup>{card.sup}</sup>
                    </h3>
                </div>
                <div className={styles.cardMain}>
                    <p className={styles.mainText}>{card.description}</p>
                    <div className={styles.cardFeatures}>
                        <p>Popular Features</p>
                        <ul>
                            {card.list.map((item, index) => (
                                <li><AiFillCheckCircle className={styles.checkIcon}/>{item}</li>
                            ))}
                        </ul>
                        <div className={styles.buttonBox}>
                            <button onClick={()=>{Go.to(navigate,card.path)}}>Get started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))
    return (
        <div className={styles.willLoveContainer}>
            <div className={styles.willLoveHeader}>
                <h2>The CRM Platform Your Whole Business Will Love</h2>
                <p>HubSpot’s CRM platform has all the tools and integrations you need for marketing, sales, content
                    management, and customer service. Each product in the platform is powerful alone, but the real magic
                    happens when you use them together.
                </p>
                <div className={styles.buttons}>
                    <button className={styles.filled} onClick={()=>{Go.to(navigate,"/getstarted")}}>Get free CRM</button>
                    <button className={styles.outlined} onClick={()=>{Go.to(navigate,"/getdemo")}}>Demo premium CRM</button>
                </div>
            </div>
            <div className={styles.willLoveCards}>
                {renderedCards}

            </div>
        </div>
    );
};

export default BusinessWillLove;
