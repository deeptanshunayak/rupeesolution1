import React, { useState } from 'react'
import Accordian from './Accordian'
import { Slider } from "@mui/material";
import AccordionUsage2 from './AccordionUsage2'
import loan from "../src/images/carloan.svg"
import { NavLink } from "react-router-dom";
import fb from "../src/images/footerb.svg"
import loan1 from "../src/images/loan2.svg"
import Headroom from 'react-headroom';
import Footer from "./Footer";
import { Link, animateScroll as Scroll } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import FormExample from './FormExample';
import Navbar1 from './Navbar1';
import Navbar from './Navbar';
export default function Loanpage2() {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
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
            <div className='theoverflow bigg'>
                <Navbar1></Navbar1>
                <div className="row pt-5">
                    <section id="emi">
                        <div className="row">
                            <div className="col-10 mx-auto">
                                <div className="row">
                                <h6 className="ps-2 pb-5"><span>Home&nbsp;&nbsp;</span>&#10095;<span className="setcolor">&nbsp;&nbsp;Car Loan</span></h6>
                                    <h3 className="ps-2 fw-bold">Know your monthly for EMI Personal loan</h3>
                                    <h6 className="ps-2 fw-bold pt-4">You can check your EMI based on the loan amount, tenure, and the interest rate the lender is offering.</h6>
                                    <div className="col-7 align-items-start">
                                        <div className="slider">
                                            <h6>Loan Amount(₹)</h6>
                                            <input className="sizer" value={pAmount} onChange={e => setpAmount(e.target.value)} />

                                            <Slider
                                                style={{ color: "#5C50F8" }}
                                                value={pAmount}
                                                onChange={(Event, vAmt) => { setpAmount(vAmt) }}
                                                max={maxValue}
                                                defaultValue={pAmount}
                                                aria-label="Small"
                                                size="medium"
                                                marks={mark}
                                                step={50000}
                                            />
                                            <h6>Interest (%)</h6>
                                            <h5>{interest}</h5>
                                            <Slider
                                                style={{ color: "#5C50F8" }}
                                                value={interest}
                                                onChange={(Event, vInt) => { setinterest(vInt) }}
                                                max={intMax}
                                                defaultValue={interest}
                                                step={0.1}
                                                marks={mark1}
                                            />
                                            <h6>Loan Tenure(in years)</h6>
                                            <h5>{duration}</h5>
                                            <Slider
                                                style={{ color: "#5C50F8" }}
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
                    <section>
                        
                        <Navbar></Navbar>
                        
                    </section>
                    <div className="col-10 mx-auto">
                     <section id='main'>
                        <div className='row'>
                            <div className='col order-2'>
                                <img src={loan} className="set animated1" alt="home img" />
                            </div>
                            <div className='col order-1'>
                                <h2 className='setcolor'>About Car Loan</h2>
                                <div className='col'>
                                    <div className='adjust'>
                                        
                                        <p>A car loan is a financial arrangement where a lender provides funds to help you purchase a vehicle. You repay the loan in installments, often with interest, until the loan is fully paid off.
                                        </p>
                                        
                                        </div>
                                        <br></br>
                                    <Link to="contact" className="btn-get-started1">Apply Now</Link>
                                </div>
                            </div>
                        </div>
                        </section>
                        </div>
                        <section id="contact">
            <FormExample></FormExample>
            </section>
                        <div className="col-10 mx-auto">
                        <div id="eligibility" className="pt-5"></div>
                        <div className='pt-5'>
                            <h3 className='texter pb-3'>Eligibility</h3>
                            <p  className="alignment"><b>For Salaried Individuals</b></p>
                            <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Individuals who are at least 21 years old at the time of loan application and no older than 60 at the end of the loan tenure</p>
                            <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Individuals who have worked for at least two years, with at least one year with the current employer</p>
                            <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Individuals with a minimum earning of Rs. 3,00,000 per year, including the income of the spouse/co-applicant.</p>
                            <p  className="alignment"><b>For Self Employed Individuals</b></p>
                            <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Individuals who are at least 21 years old at the time of application and no older than 65 at the end of the loan tenure.</p>
                            <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Those who have been in business for at least two years.</p>
                            <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Should earn at least Rs. 3,000,000 per year</p>
                            

                        </div>
                        <div id="features" className="pt-5"></div>
                        
                        <div className='pt-5'>
                            <h3 className='texter pb-3'>Features and Benefits of our Car Loan</h3>
                            
                            <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Access to Immediate Funds</p>
                            <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Flexible Loan Tenures</p>
                            <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Fixed Interest Rates</p>
                            <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Customized Loan Amounts</p>
                            <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Convenient Monthly Repayments</p>
                            <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Potential Tax Benefits</p>
                            <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Ownership from Day One</p>
                            <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;No Need for Full Upfront Payment</p>
                            <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Improve Credit Score through Timely Payments</p>
                        </div>
                       
                        <div id="documents" className="pt-5"></div>
                        <div className='pt-5'>
                            <h3 className='texter pb-3'>Documents required to apply for Car Loan</h3>
                            <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;KYC documents (Valid Photo ID Proofs)</p>
                            <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;PAN Card</p>
                            <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Last 2 years' ITR as proof of income</p>
                            <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Salary Slip (latest 3 months)</p>
                            <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Salary account statement(latest 6 months)</p>
                            
                        </div>
                        
                        <div className='pt-5'>

                        </div>

                    
                </div>
                </div>
           
            <section id='ruloans'>
                <div className="col-10 mx-auto pt-5">
                    <div className='row'>
                        <div className='col'>
                            <div className='row pt-5'>
                                <h3 className='setcolorb'>Fees and Charges for Car Loan</h3>
                                <p className='text-white pt-3'>The fees and charges of Car loans usually vary from lender to lender and from case to case.
                                    The aforementioned table will give you a fair idea of the fees and charges related to Car loans:</p>
                            </div>
                            <div className='row pt-5'>
                                <div className='col'>
                                    <p className='setcolorb'>Loan Processing Fees</p>
                                    <p className='text-white'>0.5% to 4% loan amount</p>
                                    <p className='setcolorb pt-3'>Legal Fees</p>
                                    <p className='text-white'>As per Actual</p>
                                    <p className='setcolorb pt-3'>Loan Cancellation</p>
                                    <p className='text-white'>Usually Around Rs 3000</p>

                                </div>
                                <div className='col'>
                                    <p className='setcolorb'>Penal Charges</p>
                                    <p className='text-white'>Usually @ 2% per month</p>
                                    <p className='setcolorb pt-3'>Stamp Duty Charges</p>
                                    <p className='text-white'>Value of the Property and State Tax</p>
                                    <p className='setcolorb pt-3'>EMI / Cheque Bonus</p>
                                    <p className='text-white'>Around Rs 400 per bounce</p>

                                </div>
                            </div>
                        </div>
                        <div className='col text-end ps-3'>
                            <img src={loan1} className="set animated1" alt="home img" />
                            <div className="text-center">
                                <Link to="contact" className="btn-get-started2">Get Started</Link>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="accorder">
                <AccordionUsage2></AccordionUsage2>
                </section>
            <section id="boomer">
                <Footer></Footer>
            </section>
            </div>
        </>
    )
}
