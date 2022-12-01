import React, {useEffect, useState} from 'react';
import styles from './startWith.module.css';
// import starIcon from "../../assets/homepage/cookie (4).png";
// import {TbRegistered} from "react-icons/tb";
// import heartIcon from "../../assets/homepage/cookie (3).png";
// import boxesIcon from "../../assets/homepage/cookie (2).png";
// import cookieIcon from "../../assets/homepage/cookie (1).png";
import {DemoFooter, DemoNavi} from "../GetDemo/GetDemo";
import {useParams} from "react-router-dom";

const data = [
    {
        id: "marketing",
        title: "Marketing Hub",
        sup: "TM",
        free: {
            title: "Start small by converting website visitors into leads.",
            popular: ["Email marketing", "Forms", "Landing pages", "Contact management", "Live chat", "Facebook, Google, and LinkedIn ads", "Traffic and conversion analytics"]
        },
        premium: {
            starter: {
                text: [
                    "Ad retargeting", "Marketing automation", "Landing page reporting"
                ],
                price: 45,
            },
            professional: {
                text: ["Omni-channel marketing automation and custom workflows", "Blogging", "Custom reporting", "Account-based marketing"],
                price: 800,
            },
            enterprise: {
                text: ["Adaptive testing", "Multi-touch revenue attribution", "Sandbox account"],
                price: 3600
            }
        },
        path: "marketing"
    },

];
const StartNavi = () => DemoNavi(true);
const StartFooter = () => DemoFooter();
const StartWith = () => {
    const path = useParams();
    const [pageData, setPageData] = useState({});
    useEffect(() => {
      debugger
        setPageData(data.find((item) => item.id === path.path))
        console.log(path.path)
    })
    if (pageData) {
        return (
            <div className={styles.startWith}>

                <div className={styles.startWithContainer}>
                    <StartNavi/>
                    <div className={styles.contentContainer}>
                        <div className={styles.header}>
                            <div className={styles.headerContainer}>
                                <div className={styles.headerContent}>
                                    <h1>
                                        Get Started With <span className={styles.name}>{pageData.path}</span> Hub
                                        <sup>{pageData.sup}</sup>
                                    </h1>
                                    <p>
                                        Start with free tools and upgrade as you grow, or hit the ground running with
                                        one of our premium editions.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className={styles.content}>
                            <div className={styles.free}>
                                <div className={styles.cartTitle}>
                                    <h4>Free Tools</h4>
                                </div>
                                <div className={styles.cartDescription}>
                                    <p> {pageData.free.title}</p>
                                </div>
                                <div className={styles.features}>
                                    <p>Popular features</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <StartFooter/>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <StartNavi/>
                404
                <StartFooter/>
            </div>
        )
    }
};

export default StartWith;
