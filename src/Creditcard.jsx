import React, { useState } from 'react'
import Accordian from './Accordian'
import { NavLink } from "react-router-dom";
import { Slider } from "@mui/material";
import loan from "../src/images/personalloan.svg"
import fb from "../src/images/footerb.svg"
import AccordionUsage6 from './AccordionUsage6'
import loan1 from "../src/images/loan1.svg"
import { Link, animateScroll as Scroll } from "react-scroll";
import Footer from "./Footer";
import { GiHamburgerMenu } from "react-icons/gi";
import FormExample from './FormExample';
import Navbar1 from './Navbar1';
import Headroom from 'react-headroom';
import Navbar from './Navbar';
export default function Creditcard() {
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
                                <h6 className="ps-2 pb-5"><span>Home&nbsp;&nbsp;</span>&#10095;<span className="setcolor">&nbsp;&nbsp;Credit Card</span></h6>
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
                    <section id='main'>
                    <div className="col-10 mx-auto">

                        <div className='row'>
                            
                            <div className='col order-2'>
                                <img src={loan} className="set animated1" alt="home img" />
                            </div>
                            
                            <div className='col order-1'>
                                <h2 className='setcolor'>About Credit Card</h2>
                                <div className='col'>
                                    <div className='adjust'>
                                        
                                        <p className='fade-in'>A credit card is a financial instrument that has a pre-loaded balance that the cardholder can use to make transactions and pay for them later. The card issuer will let you pay off the balance fully, interest-free, for up to 50 days from the date of payment. To avoid any fines, the cardholder can pay the minimum amount due (which can be anywhere between 5% to 10% on the total amount owed). The balance, however, will be carried forward to the next month, and interest set by the credit card company will be levied.
                                        </p></div>
                                        <br></br>
                                    <Link to="contact" className="btn-get-started1">Apply Now</Link>
                                </div>
                            </div>
                            
                        </div>
                        </div>
                        </section>
                        <section id="contact">
            <FormExample></FormExample>
            </section>
                        <div className="col-10 mx-auto">

                        <div className=' overflow-x-hidden'>
                        <div id="eligibility" className="pt-5"></div>
                            <div className='pt-5 fade-in'>
                                <h3 className='texter pb-3'>Eligibility</h3>
                                <p>Credit card eligibility refers to the criteria that an individual must meet in order to qualify for a credit card issued by a financial institution. These criteria can vary between different credit card issuers, but they generally include factors such as:</p>
                                <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Age : Most credit card issuers require applicants to be a certain age, typically 18 or older. Some may have a higher age requirement.</p>
                                <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Income : Credit card issuers often have a minimum income requirement to ensure that applicants have the means to repay the credit card debt.</p>
                                <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Credit score must be above 650</p>
                                <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Residential Status : Depending on the issuer, you might need to provide proof of your current address or residency.</p>
                                <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Employment stability</p>
                                <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Maintained a good credit score</p>
                                <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Clear repayment history</p>
                                <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Must be a Resident Citizen of India</p>

                            </div>
                           
                            <div id="features" className="pt-5"></div>
                            <div className='pt-5 fade-in'>
                                <h3 className='texter pb-3'>Features and Benefits of our Credit Card</h3>
                                <p>The credit card segment continues to grow universally as innovative contenders enter the space with fresh and advanced features. Get a look at the basic features.</p>
                                
                                <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;APR:  APR refers to the term Annual Percentage Rate, an interest rate applicable to the balance you carry forward past the grace period</p>
                                <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Home renovation:  Using a personal loan to fund home renovation projects can increase the value of your home and improve your living conditions.</p>
                                <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Medical expenses: If you have unexpected medical expenses, such as emergency surgery or hospitalization, a personal loan can help cover the costs.</p>
                                <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Emergency expenses:  A personal loan can help cover unexpected expenses like medical emergencies or car repairs to avoid financial hardship.</p>
                            </div>
                           
                            <div id="documents" className="pt-5"></div>
                            <div className='pt-5'>
                                <h3 className='texter pb-3'>Documents required to apply for Credit Card</h3>
                                <p className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Identity Proof : Need documents like your Aadhaar Card, PAN card, Driver's License, Passport, or Voter's ID to verify your identity.</p>
                                <p className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Address Proof:  You'll need to submit documents such as an Electricity bill, Telephone bill, Aadhaar Card, or other valid proof of your residential address.</p>
                                <p className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Annual ITR (Self-Employed):  For those who are self-employed or have alternative income sources, providing your annual Income Tax Returns (ITR) your financial status.</p>
                                <p className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Latest Salary Slips:   If you are a salaried individual, submitting your recent salary slips can help demonstrate your income and repayment capacity.</p>
                                
                            </div>
                            
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
                                <h3 className='setcolorb'>Fees and Charges for Credit Card</h3>
                                <p className='text-white pt-3'>The fees and charges of personal loans usually vary from lender to lender and from case to case.
                                    The aforementioned table will give you a fair idea of the fees and charges related to personal loans:</p>
                            </div>
                            <div className='row pt-5'>
                                <div className='col'>
                                    <p className='setcolorb'>Loan Processing Fees</p>
                                    <p className='text-white'>0.5% to 4% loan amount</p>
                                    <p className='setcolorb pt-3'>Legal Fees</p>
                                    <p className='text-white'>As per Actual</p>
                                    <p className='setcolorb pt-3'>Loan Cancellation</p>
                                    <p className='text-white'>Usually 3000 to 5% of loan amount</p>

                                </div>
                                <div className='col'>
                                    <p className='setcolorb'>Penal Charges</p>
                                    <p className='text-white'>Approx 499/- to 599/-</p>
                                    <p className='setcolorb pt-3'>Stamp Duty Charges</p>
                                    <p className='text-white'>Value of the Property and State Tax</p>
                                    <p className='setcolorb pt-3'>EMI / Cheque Bonus</p>
                                    <p className='text-white'>Usually 2% per month</p>

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
                <AccordionUsage6></AccordionUsage6>
                </section>
            <section id="boomer">
                <Footer></Footer>
            </section>
            </div>
        </>
    )
}
