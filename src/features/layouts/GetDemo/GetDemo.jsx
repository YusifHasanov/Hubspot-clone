import React, {useState} from 'react';
import styles from './demo.module.css';
import icon from './../../assets/godemo/navi.png'
import {CgClose} from "react-icons/cg";
import {TiArrowSortedDown} from "react-icons/ti";
import topLeft from './../../assets/godemo/topLeft.png'
import topRight from './../../assets/godemo/topRight.png'
import { AiOutlineCheck} from "react-icons/ai";
import {BsCheck2} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import Go from "../../../GlobalRoute";

const data = [
    {
        title: "Americas",
        data: [
            {
                title: "U.S. and Canada",
                phone: ["+1 888 888 8888", "+1 888 888 8888"],
                language: "English"
            },
            {
                title: "Brazil",
                phone: ["+55 11 8888 8888"],
                language: "Portuguese"
            },
            {
                title: "Chile",
                phone: ["+56 2 8888 8888"],
                language: "Spanish"
            },
            {
                title: "Colombia",
                phone: ["+57 1 8888 8888"],
                language: "Spanish"
            },
            {
                title: "Mexico",
                phone: ["+52 55 8888 8888"],
                language: "Spanish"
            }
        ]
    },
    {
        title: "Europe",
        data: [
            {
                title: "Austria",
                phone: ["+43 1 8888 8888"],
                language: "German"

            },
            {
                title: "Belgium",
                phone: ["+32 2 8888 8888"],
                language: "Dutch"
            },
            {
                title: "Denmark",
                phone: ["+45 88 888 888", "+45 88 888 818"],
                language: "Danish"
            }
        ]
    }

]
const features = [
    {
        title: "Marketing",
        data: ["Lead generation", "Marketing automation", "Multi-touch revenue attribution"]
    },
    {
        title: "Sales",
        data: ["Advanced CRM", "Sales automation", "Sales engagement tools"]
    },
    {
        title: "Customer Service",
        data: ["Knowledge base", "Help desk automation", "Customer feedback surveys"]
    }
]

export const DemoNavi = (visible) => {
    const [isShow, setIsShow] = useState(false);
    const navigate=useNavigate();
     return (
        <div className={styles.navi}>
            <div className={styles.naviContainer}>
                <img onClick={()=>{Go.to(navigate,"/resources")}} className={styles.icon} src={icon} alt=""/>
                <div className={styles.modalOpenerContainer}>
                    <a href="tel:+35315124400">+353 1 512 4400</a>
                    <TiArrowSortedDown style={{display:visible?"none":"flex"}}  onClick={() => {
                        setIsShow(true)
                    }} className={styles.modalOpenerButton}/>
                </div>
            </div>
            <div style={{display: isShow ? "flex" : "none"}} className={styles.modal}>
                <div className={styles.modalContainer}>
                    <div className={styles.modalContent}>
                        <div className={styles.modalHeader}>
                            <h3> Call Sales Using a Local Number</h3>
                            <CgClose className={styles.closeButton} onClick={() => {
                                setIsShow(false)
                            }}/>
                        </div>
                        <div className={styles.modalBody}>
                            {
                                data.map((data, index) => (
                                    <div key={index}>
                                        <h4 className={styles.itemTitle}>{data.title}</h4>
                                        <div className={styles.itemCountries}>
                                            {
                                                data.data.map((dataItem, index) => (
                                                    <div className={styles.modalDetail} key={index}>
                                                        <h5>{dataItem.title}</h5>
                                                        <div>
                                                            {
                                                                dataItem.phone.map((number, index) => (
                                                                    <a className={styles.number} href={`tel:${number}`}
                                                                       key={index}>{number} ({dataItem.language})</a>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export  const DemoFooter=()=>{
    return(
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <p>Copyright © 2022 HubSpot, Inc.</p>
                <div className={styles.footerLinks}>
                    <div className={styles.footerLink}>Legal Stuff</div>
                    <div className={styles.footerLink}>Privacy Policy</div>
                </div>
            </div>
        </div>
    )
}

const GetDemo = () => {
    //Form States
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [url, setUrl] = useState("");
    const [select, setSelect] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div>
            <DemoNavi/>
            <div className={styles.icons}>
                <img className={styles.topLeft} src={topLeft} alt=""/>
                <img className={styles.topRight} src={topRight} alt=""/>
            </div>
            <div className={styles.demoMainContainer}>
                <div className={styles.demoContent}>
                    <div className={styles.wrapper}>
                        <div className={styles.wrapperLeft}>
                            <h1 className={styles.getDemoHeader}>
                                Get a Free Demo of HubSpot's CRM Platform
                            </h1>
                            <p className={styles.getDemoSubTitle}>
                                HubSpot’s CRM platform has all the tools you need for marketing, sales, content
                                management, operations, and customer service. Each product in the platform is powerful
                                alone, but the real magic happens when you use them together.
                            </p>
                            <div className={styles.getDemoFeatures}>
                                <button className={styles.buttonOutlined}>Request your demo</button>
                                <h2 className={styles.featuresHeader}>Popular features</h2>
                                <div className={styles.featuresWrapper}>
                                    {
                                        features.map((feature, index) => (
                                            <div className={styles.featureItem} key={index}>
                                                <h3>{feature.title}</h3>
                                                <ul className={styles.featuresList}>
                                                    {
                                                        feature.data.map((data, index) => (
                                                            <li>
                                                                <div className={styles.checkIconBox}><BsCheck2
                                                                    className={styles.checkIconWrapper}/></div>
                                                                {data}</li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={styles.wrapperRight}>
                            <div className={styles.formContainer}>
                                <h3 className={styles.formHeader}>Request Your demo</h3>
                                <form action="" className={styles.form}>
                                    <div className={styles.formGroup}>
                                        <div className={styles.formElement}>
                                            <label htmlFor={"firstName"} className={styles.inputLabel}>First Name
                                                *</label>
                                            <input name={"firstName"} value={firstName} onChange={(e) => {
                                                setFirstName(e.target.value.trim())
                                            }} className={styles.formInput} type="text"/>
                                        </div>
                                        <div className={styles.formElement}>
                                            <label htmlFor={"lastName"} className={styles.inputLabel}>Last Name
                                                *</label>
                                            <input name={"lastName"} value={lastName} onChange={(e) => {
                                                setLastName(e.target.value.trim())
                                            }} className={styles.formInput} type="text"/>
                                        </div>
                                    </div>
                                    <div className={styles.formGroup}>
                                        <div className={styles.formElement}>
                                            <label htmlFor="email" className={styles.inputLabel}>Email *</label>
                                            <input name={"email"} value={email} onChange={(e) => {
                                                setEmail(e.target.value.trim())
                                            }} className={styles.formInput} type="email"/>
                                        </div>
                                        <div className={styles.formElement}>
                                            <label htmlFor="phoneNumber" className={styles.inputLabel}>Phone Number
                                                *</label>
                                            <input name={"phoneNumber"} value={phoneNumber} onChange={(e) => {
                                                setPhoneNumber(e.target.value.trim())
                                            }} className={styles.formInput} type="text"/>
                                        </div>
                                    </div>
                                    <div className={styles.formGroup}>
                                        <div className={styles.formElement}>
                                            <label htmlFor={"companyName"} className={styles.inputLabel}>Company Name
                                                *</label>
                                            <input name={"companyName"} value={companyName} onChange={(e) => {
                                                setCompanyName(e.target.value.trim())
                                            }} className={styles.formInput} type="text"/>
                                        </div>
                                        <div className={styles.formElement}>
                                            <label htmlFor={"url"} className={styles.inputLabel}>Website URL *</label>
                                            <input name={"url"} value={url} onChange={(e) => {
                                                setUrl(e.target.value.trim())
                                            }} className={styles.formInput} type="text"/>
                                        </div>
                                    </div>
                                    <div className={styles.formGroup}>
                                        <div style={{width: `100%`}} className={styles.formElement}>
                                            <label htmlFor="howMany" className={styles.inputLabel}>How many employees
                                                work
                                                there?*</label>
                                            <select value={select} onChange={(e) => {
                                                setSelect(e.target.value.trim())
                                            }} name="howMany" id="howMany" className={styles.formSelect}>
                                                <option value=""></option>
                                                <option value="1">1</option>
                                                <option value="2 to 5">2 to 5</option>
                                                <option value="6 to 10">6 to 10</option>
                                                <option value="11 to 25">11 to 25</option>
                                                <option value="26 to 50">26 to 50</option>
                                                <option value="51 to 200">51 to 200</option>
                                                <option value="1,001 to 10,000">1,001 to 10,000</option>
                                                <option value="10,001 or more"> 10,001 or more</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className={styles.formGroup}>
                                        <div className={styles.check}>
                                            {!isChecked
                                                ? <div className={styles.checkBox} onClick={() => {
                                                    setIsChecked(p => !p)
                                                }}></div>
                                                : <div className={styles.checkedBox} onClick={() => {
                                                    setIsChecked(p => !p)
                                                }}><AiOutlineCheck
                                                    className={styles.checkIcon}/></div>
                                            }
                                            Subscribe to HubSpot's marketing blog
                                        </div>

                                    </div>
                                    <p className={styles.privacy}>We're committed to your privacy. HubSpot uses the
                                        information you provide to us to contact you about our relevant content,
                                        products,
                                        and services. You may unsubscribe from these communications at any time. For
                                        more
                                        information, check out our <a href="">Privacy Policy.</a></p>
                                </form>
                                <div className={styles.buttonContainer}>
                                    <button className={styles.buttonOutlined}>Get your free demo</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.wrapperFooter}>
                            <p>Find out why <strong>150,000+ customers</strong> from more than <strong>120
                                countries</strong> trust HubSpot to bring their team, tools, and data together in one
                                place.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.module}>
                    <div className={styles.moduleContainer}>
                        <div className={styles.moduleContent}>
                            <h3>Don’t Just Take Our Word for It</h3>
                            <p>
                                See for yourself how HubSpot’s CRM platform can meet your business’s unique challenges,
                                needs, and product interests. Complete the form above to get your free demo.
                            </p>
                        </div>
                        <img className={styles.moduleImage} src={"https://offers.hubspot.com/hubfs/ProductUI+Blobs-CRMHub@2x.png"} alt=""/>
                    </div>
                </div>
              <DemoFooter/>
            </div>
        </div>
    );
};

export default GetDemo;
