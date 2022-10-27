import React from 'react';
import styles from './customers.module.css';

const Customers = () => {
const iconLinks=[
    "https://f.hubspotusercontent00.net/hubfs/53/1200px-WWF_logo_svg%20(1).png",
    "https://f.hubspotusercontent00.net/hubfs/53/trello-logo-blue%20(1).png",
    "https://www.hubspot.com/hubfs/Reddit%20Logo%20for%20HS%20website%20(1).png",
    "https://www.hubspot.com/hubfs/WW%20Logo%20for%20HS%20Website%20(2).png",
    "https://f.hubspotusercontent00.net/hubfs/53/soundcloud.png",
    "https://www.hubspot.com/hubfs/Momentive%20Logo%20for%20HS%20website.png",
    "https://www.hubspot.com/hubfs/DoorDash%20Logo%20for%20HS%20Website-1.png",
    "https://www.hubspot.com/hubfs/Eventbrite%20Logo%20for%20HS%20Website-1.png"
]
const renderedIcons=iconLinks.map((link,id)=>(
    <div className={styles.iconbox}>
        <img src={link} alt=""/>
    </div>
))
    return (
        <div className={styles.customersContainers}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h2>150,000+</h2>
                    <p>customers in over <strong>120</strong> countries growing their businesses with HubSpot</p>
                </div>
                <div className={styles.icons}>
                    {renderedIcons}
                </div>
            </div>
        </div>
    );
};

export default Customers;
