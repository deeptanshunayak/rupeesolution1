import React, { useState } from 'react'
import Accordian from './Accordian'
import { NavLink } from "react-router-dom";
import { Slider } from "@mui/material";
import loan from "../src/images/personalloan.svg"
import fb from "../src/images/footerb.svg"
import AccordionUsage7 from './AccordionUsage7'
import loan1 from "../src/images/loan1.svg"
import { Link, animateScroll as Scroll } from "react-scroll";
import Footer from "./Footer";
import { GiHamburgerMenu } from "react-icons/gi";
import FormExample from './FormExample';
import Navbar1 from './Navbar1';
import Headroom from 'react-headroom';
import Navbar from './Navbar';
export default function Business() {
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
                                <h6 className="ps-2 pb-5"><span>Home&nbsp;&nbsp;</span>&#10095;<span className="setcolor">&nbsp;&nbsp;Business Loan</span></h6>
                                    <h3 className="ps-2 fw-bold">Know your monthly for EMI Personal loan</h3>
                                    <h6 className="ps-2 fw-bold pt-4">You can check your EMI based on the loan amount, tenure, and the interest rate the lender is offering.</h6>
                                    <div className="col-7">
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
                                <h2 className='setcolor'>About Business Loan</h2>
                                <div className='col'>
                                    <div className='adjust'>
                                        
                                        <p className='fade-in'>A business loan is money borrowed from a bank or lender to support business-related expenses, such as expansion, equipment purchase, working capital, or other operational needs. The borrowed amount is repaid over time with interest.
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
                                <p>To qualify for a Business loan, you have to meet certain criteria. Below are the important factors that lenders take into consideration to decide your eligibility for a personal loan.</p>
                                <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Credit Score:  A good credit score is often required to qualify for a business loan. Lenders use your credit history to assess your ability to repay the loan.</p>
                                <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Business Age:  Some lenders require a minimum operational history for your business, usually ranging from a few months to a year or more.</p>
                                <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Age Criteria:     Min. 21 years at the time of loan application & Max. 65 years at the time of loan maturity.</p>
                                <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Cash Flow:  Lenders often evaluate your business's cash flow to determine your ability to repay the loan.</p>
                                <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Collateral:  Secured loans might require assets as collateral to secure the loan. Collateral can be real estate, equipment, inventory, or other valuable assets.</p>
                                <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Additional Criteria:  Applicants must own either a residence, office, shop, or Godown.    </p>
                                <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Clear repayment history</p>
                                <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Must be a Resident Citizen of India</p>

                            </div>
                            
                            <div id="features" className="pt-5"></div>
                            <div className='pt-5 fade-in'>
                                <h3 className='texter pb-3'>Features and Benefits of our Business Loan</h3>
                                <p>A personal loan is an unsecured loan that is not backed by collateral or security. This makes it a flexible financing option, as there are no limitations on its use.</p>
                                <p>The followings are the ways a personal loan can be useful:</p>
                                <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Debt consolidation:  Combining multiple debts into a single loan with a lower interest rate to save money on interest payments and make it easier to manage debts.</p>
                                <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Home renovation:  Using a personal loan to fund home renovation projects can increase the value of your home and improve your living conditions.</p>
                                <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Medical expenses: If you have unexpected medical expenses, such as emergency surgery or hospitalization, a personal loan can help cover the costs.</p>
                                <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Emergency expenses:  A personal loan can help cover unexpected expenses like medical emergencies or car repairs to avoid financial hardship.</p>
                            </div>
                            
                            <div id="documents" className="pt-5"></div>
                            <div className='pt-5'>
                                <h3 className='texter pb-3'>Documents required to apply for Business Loan</h3>
                                <p className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;ITR for the past 2-3 years</p>
                                <p className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Current Bank Account Statement for the last 12 months</p>
                                <p className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Address Proof for Residence such as Voter Card, Passport, Aadhar Card, Telephone Bill, Electricity Bill</p>
                                <p className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Address proof for Business such as the Telephone Bill or Electricity Bill</p>
                                <p className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Last Financial Year's provisional Financials and future year's projections.</p>
                                <p className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Company's business profile on the letterhead</p>
                                <p className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;2 photographs of promoters and property owners.</p>
                                <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Sanction letter and Repayment schedule of existing loan</p>
                                <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;GST registration certificate and GST returns of latest 2 years.</p>
                                <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;D-Vat/Sale tax registration copy</p>
                                <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Udhayam Aadhar registration certificate</p>
                                <p  className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Company PAN Card, Certificate of Incorporation, MOA, AOA, List of Directors, and Shareholding pattern for Pvt Ltd companies</p>
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
                                <h3 className='setcolorb'>Fees and Charges for Business Loan</h3>
                                <p className='text-white pt-3'>The fees and charges of Business loans usually vary from lender to lender and from case to case.
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
                <AccordionUsage7></AccordionUsage7>
                </section>
            <section id="boomer">
                <Footer></Footer>
            </section>
            </div>
        </>
    )
}
