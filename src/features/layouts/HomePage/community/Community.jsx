import React from 'react';
import styles from './community.module.css';

const Community = () => {
    return (
        <div className={styles.communityContainer}>
            <div className={styles.communityHeader}>
                <h2>Learn and grow with award-winning support and a thriving community behind you.</h2>
                <p>You don't have to go it alone. Master the inbound methodology and get the most out of your tools with
                    HubSpot's legendary customer support team and a community of thousands of marketing and sales pros
                    just like you.
                </p>
            </div>
            <div className={styles.communityBoxes}>
                <div className={styles.content}>
                    <div className={styles.item}>
                        <div>
                            <img
                                src="https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_agency.svg"
                                alt=""/>
                        </div>
                        <div>
                            <p className={styles.number}>150<sup>+</sup></p>
                            <p className={styles.text}>HubSpot user groups </p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div>
                            <img
                                src="https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_blog.svg"
                                alt=""/>
                        </div>
                        <div>
                            <p className={styles.number}>7M<sup>+</sup></p>
                            <p className={styles.text}>monthly visits</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div>
                            <img
                                src="https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_academy.svg"
                                alt=""/>
                        </div>
                        <div>
                            <p className={styles.number}>453K<sup>+</sup></p>
                            <p className={styles.text}>certified professionals</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div>
                            <img
                                src="https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_inbound.svg"
                                alt=""/>
                        </div>
                        <div>
                            <p className={styles.number}>70K</p>
                            <p className={styles.text}>registered attendees</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div>
                            <img src={"https://cdn2.hubspot.net/hubfs/53/HubSpot-App-Marketplace-White.png"} alt={""}/>
                        </div>
                        <div>
                            <p className={styles.number}>1,160<sup>+</sup></p>
                            <p className={styles.text}>integrations</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div>
                            <img
                                src="https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_globe.svg"
                                alt=""/>
                        </div>
                        <div>
                            <p className={styles.number}>6<sup>+</sup></p>
                            <p className={styles.text}>languages</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div>
                            <img
                                src="https://www.hubspot.com/hubfs/assets/hubspot.com/parrotdad/homepage/homepage_community_followers.svg"
                                alt=""/>
                        </div>
                        <div>
                            <p className={styles.number}>3.1M<sup>+</sup></p>
                            <p className={styles.text}>social followers</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div>
                            <img src="https://cdn2.hubspot.net/hubfs/53/Lists.svg" alt=""/>
                        </div>
                        <div>
                            <p className={styles.number}>150,000<sup>+</sup></p>
                            <p className={styles.text}>customers</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Community;
