import React, { useState } from 'react'
import Accordian from './Accordian'
import { NavLink } from "react-router-dom";
import { Slider } from "@mui/material";
import AccordionUsage4 from './AccordionUsage4'
import loan from "../src/images/propertyloan.svg"
import loan1 from "../src/images/loan4.svg"
import fb from "../src/images/footerb.svg"
import Footer from "./Footer";
import Navbar from './Navbar';
import Headroom from 'react-headroom';
import { Link, animateScroll as Scroll } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import FormExample from './FormExample';
import Navbar1 from './Navbar1';
export default function Loanpage4() {
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
                                <div className="row theoverflow">
                                <h6 className="ps-2 pb-5"><span>Home&nbsp;&nbsp;</span>&#10095;<span className="setcolor">&nbsp;&nbsp;Property Loan</span></h6>
                                    <h3 className="ps-2 fw-bold">Know your monthly for EMI Personal loan</h3>
                                    <h6 className="ps-2 pt-4 fw-bold">You can check your EMI based on the loan amount, tenure, and the interest rate the lender is offering.</h6>
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
                     <section>
                        <div className='row'>
                            <div className='col order-2'>
                                <img src={loan} className="set animated1" alt="home img" />
                            </div>
                            <div className='col order-1'>
                                <h2 className=' setcolor'>About Loan Against Property</h2>
                                <div className='col'>
                                    <div className='adjust'>
                                        
                                        <p>A Loan Against Property may be termed as a Mortgage Loan since to avail an LAP, you need to mortgage your property to cover risk of non-payment or default in repayment of the funds borrowed. For any lender to approve such a borrowing, the lender will first analyse your personal and financial profile, which will include criteria such nationality, age, occupation, income, and market value of the collateral you are willing to keep.
                                        </p></div>
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
                            
                            <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Nationality: You need to be a Citizen of India with documents to prove your claim.</p>
                            <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Occupation and Income: Your lender will require you to furnish details regarding your occupation and income to prove your professional and financial stability to determine your creditworthiness.</p>
                            <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Credit History: Your three-digit Credit Score, indicative of your track record in respect of repayment of loans, and other forms of credit will be a deciding factor to prove your eligibility for a LAP.</p>
                            <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Banking Relationship: Should you have a healthy relationship with your lender, you will not be disapproved for a LAP. Additionally, your lender will offer you better terms and conditions in respect of loan value, interest rates, period of the loan, hidden charges, and processing fees.</p>
                            <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Market Value of Property: Your lender retains the right to decide the loan amount and terms and conditions of your mortgage loan based on the market value of your collateral property. Besides, the market value of the mortgaged property must be higher than the loan amount calculated on the current value</p>
                            <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Title of Property: Your lender will require you to be the current existent owner of the property, and in case of a co-application, you will require to prove multiple ownership clear title. Besides, the property must not be mortgaged with any other financial institution.</p>
                            

                        </div>
                        
                        <div id="features" className="pt-5"></div>
                        <div className='pt-5'>
                            <h3 className='texter pb-3'>Features and Benefits of our Loan Against property</h3>
                            
                            <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Secured Loan : The loan is secured against the value of your property. The property acts as collateral, reducing the risk for the lender. This generally leads to lower interest rates compared to unsecured loans.</p>
                            <p className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Loan Amount:  The loan amount is determined based on the value of the property you pledge. Generally, you can get a higher loan amount compared to personal loans or other unsecured loans.</p>
                            <p className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Flexible Tenure : The tenure (repayment period) for a Loan Against Property is usually longer compared to other types of loans, often ranging from 5 to 20 years. This allows for lower monthly installments.</p>
                            <p className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Multipurpose : The loan amount can be used for a wide range of purposes, giving you the flexibility to address various financial needs without any restrictions.</p>
                            <p className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Improves Credit Scores : Successfully repaying a Loan Against Property can positively impact your credit score, as it demonstrates responsible borrowing behavior.</p>
                        </div>
                        
                        <div id="documents" className="pt-5"></div>
                        <div className='pt-5'>
                            <h3 className='texter pb-3'>Documents required to apply for Loan Against Property</h3>
                            <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Proof of identity/residence</p>
                            <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Proof of income</p>
                            <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Property-related documents</p>
                            <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Proof of Business (for self-employed)</p>
                            <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Account statement for the last 6 months</p>
                            
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
                                <h3 className='setcolorb'>Fees and Charges for Loan Against Property</h3>
                                <p className='text-white pt-3'>The fees and charges of loans against property usually vary from lender to lender and from case to case.
                                    The aforementioned table will give you a fair idea of the fees and charges related to loans against property:</p>
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
                        <div className='col text-end ps-3 pt-5'>
                            <img src={loan1} className="set animated1" alt="home img" />
                            <div className="text-center pt-3">
                                <Link to="contact" className="btn-get-started2">Get Started</Link>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="accorder">
                <AccordionUsage4></AccordionUsage4>
                </section>
            <section id="boomer">
                <Footer></Footer>
            </section>
            </div>
        </>
    )
}
