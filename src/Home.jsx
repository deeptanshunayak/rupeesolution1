import React, { useState } from "react";
import web from "../src/images/homepage.svg";
import web1 from "../src/images/card.svg";

import { NavLink } from "react-router-dom";
import Card from "./Card";
import Accordian from './Accordian'
import { Slider } from "@mui/material";
import { indigo } from '@mui/material/colors';
import web2 from "../src/images/aboutus.svg"
import AccordionUsage from "./AccordionUsage";
import Footer from "./Footer";
import emi1 from "../src/images/Group 19 (1).svg";
import Navbar1 from "./Navbar1";


const Home = () => {
    const color1 = indigo[900];
    const [pAmount, setpAmount] = useState(7500000);
    const [interest, setinterest] = useState(7);
    const [duration, setduration] = useState(14);
    const intMax = 24;
    const maxValue = 50000000;
    const maxduration = 30;
    const intr = interest / 1200;
    const emi = duration ? Math.round(pAmount * intr / (1 - (Math.pow(1 / (1 + intr), duration)))) : 0;
    const totalAmt = duration * emi;
    const TotalAmountOfCredit = Math.round((emi / intr) * (1 - Math.pow((1 + intr), (-duration))));
    const TotalAmountOfInterest = Math.round(totalAmt - TotalAmountOfCredit);
    const mark = [
        {
            value: 0,
            label: "0"

        },
        {
            value: 5000000,
            label: "50L"
        },
        {
            value: 10000000,
            label: "1cr"
        },
        {
            value: 15000000,
            label: "1.5cr"
        },
        {
            value: 20000000,
            label: "2cr"
        },
        {
            value: 25000000,
            label: "2.5cr"
        },
        {
            value: 30000000,
            label: "3cr"
        },
        {
            value: 35000000,
            label: "3.5cr"
        },
        {
            value: 40000000,
            label: "4cr"
        },
        {
            value: 45000000,
            label: "4.5cr"
        },
        {
            value: 50000000,
            label: "5cr"
        },

    ]
    const mark1 = [
        {
            value: 0,
            label: "0"

        },
        {
            value: 4,
            label: "4"
        },
        {
            value: 8,
            label: "8"
        },
        {
            value: 12,
            label: "12"
        },
        {
            value: 16,
            label: "16"
        },
        {
            value: 20,
            label: "20"
        },
        {
            value: 24,
            label: "24"
        },
    ]
    const mark2 = [
        {
            value: 0,
            label: "0"

        },
        {
            value: 10,
            label: "10"
        },
        {
            value: 20,
            label: "20"
        },
        {
            value: 30,
            label: "30"
        },
    ]
    return (
        <>
        <Navbar1></Navbar1>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1 className="fade-in">
                                        Unveiling Your Financial Potential...
                                    </h1>
                                    <h2 className="my-3 fade-in">
                                        Empowering Your Financial Journey through Customized Asset Management Services
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to="/" className="btn-get-started">Get Started</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-2 order-lg-2 header-img">
                                    <img src={web} className="img-fluid animated" alt="home img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="card-design">
                <Card></Card>
            </section>
            <section id="header1" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>
                                        Get started with Rupee Solution today
                                    </h1>
                                    <h2 className="my-3">
                                        We are the team of good developers
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to="/" className="btn-get-started">Get Started</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={web2} className="img-fluid animated" alt="home img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="emi">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <h3 className="ps-2"><b>Emi Calculator</b></h3>
                            <h6 className="ps-2"><b>You can check your EMI based on the loan amount, tenure, and the interest rate the lender is offering.</b></h6>
                            <div className="col-7 align-items-start">
                                <div className="slider">
                                    <h6><b>Loan Amount(₹)</b></h6>
                                    <input className="sizer" value={pAmount} onChange={e => setpAmount(e.target.value)} />

                                    <Slider
                                        style={{color:"#5C50F8"}}
                                        value={pAmount}
                                        onChange={(Event, vAmt) => { setpAmount(vAmt) }}
                                        max={maxValue}
                                        defaultValue={pAmount}
                                        aria-label="Small"
                                        size="medium"
                                        marks={mark}
                                        step={50000}
                                    />
                                    <h6><b>Interest (%)</b></h6>
                                    <h5>{interest}</h5>
                                    <Slider
                                        style={{color:"#5C50F8"}}
                                        value={interest}
                                        onChange={(Event, vInt) => { setinterest(vInt) }}
                                        max={intMax}
                                        defaultValue={interest}
                                        step={0.1}
                                        marks={mark1}
                                    />
                                    <h6><b>Loan Tenure(in years)</b></h6>
                                    <h5>{duration}</h5>
                                    <Slider
                                        style={{color:"#5C50F8"}}
                                        value={duration}
                                        onChange={(Event, vDur) => { setduration(vDur) }}
                                        max={maxduration}
                                        defaultValue={duration}

                                        marks={mark2}
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <div className="pt-5">

                                    {/* <img src={emi1} className="img-fluid" alt="home img" /> */}

                                    {/* <TableDetails pAmount={pAmount} interest={interest} duration={duration} emi={emi} TotalAmountOfInterest={TotalAmountOfInterest} totalAmt={totalAmt} /> */}


                                    {/* <div className="texte">
                                        <div className="row  pro">
                                            <div className="col fonter pe-2 text-primary">Principal Amount</div>
                                            <div className="col fonter  text-primary ">₹{pAmount}</div>
                                        </div>
                                        <div className="row pt-2 pro">
                                            <div className="col fonter pe-2 text-primary">Interest Payable</div>
                                            <div className="col fonter text-primary">₹{TotalAmountOfInterest}</div>
                                        </div>
                                        <div className="row  padder1 pro ">
                                            <div className="col fonter pe-2">Total Payable Amount</div>
                                            <div className="col fonter">₹{totalAmt}</div>
                                        </div>
                                        <div className="row  padder2 pro ">
                                            <div className="col text-light fonter">Monthly Loan Emi</div>
                                            <div className="col text-light fonter">₹{emi}</div>
                                        </div>
                                {/* <p className="fonte text-primary">Principal Amount<span className="gap"></span>₹{pAmount}</p>
                                <p className="fonte text-primary">Interest Payable<span className="gap2"></span>₹{TotalAmountOfInterest}</p>
                                <p className="fonte pt-2">Total Payable Amount<span className="gap1"></span>₹{totalAmt}</p>
                                <p className="fonte pt-4 text-light">Monthly Loan Emi <span className="gap"></span>₹{emi}</p> 
                                    </div> */}
                                    <div className="vb">
                                        <div className="vb1">
                                            <div className="row pt-4">
                                                <div className="col ps-5">Principal Amount</div>
                                                <div className="col text-end pe-5">₹{pAmount}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col ps-5"></div>
                                                <div className="col text-center ps-5 text-dark">+</div>
                                            </div>
                                            <div className="row">
                                                <div className="col ps-5">Interest Payable</div>
                                                <div className="col text-end pe-5">₹{TotalAmountOfInterest}</div>
                                            </div>
                                            <div className="row pt-4">
                                                <div className="col ps-5 text-dark">Total Payable Amount</div>
                                                <div className="col text-end pe-5 text-dark">₹{totalAmt}</div>
                                            </div>
                                        </div>
                                        <div className="row pt-3">
                                                <div className="col ps-5">Monthly Loan Emi</div>
                                                <div className="col text-end pe-5 ">₹{emi}</div>
                                            </div>
                                    </div>
                                    <div className="mt-3 spadder">
                                        <NavLink to="/" className="btn-get-started1">Get Started</NavLink>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="accorder">
                <AccordionUsage></AccordionUsage>
                </section>

            <section id="boomer">
                <Footer></Footer>
            </section>
        </>
    );
};
export default Home;