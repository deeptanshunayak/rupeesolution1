import React, { useState } from 'react'
import Accordian from './Accordian'
import { Slider } from "@mui/material";
import { Link, animateScroll as Scroll } from "react-scroll";
import AccordionUsage1 from './AccordionUsage1'
import loan from "../src/images/educationloan.svg"
import loan1 from "../src/images/loan1.svg"
import fb from "../src/images/footerb.svg"
import "./Navbar.css";
import Footer from "./Footer";
import FormExample from "./FormExample";
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar1 from './Navbar1';
import Navbar from './Navbar';
import { NavLink } from "react-router-dom";
import Headroom from 'react-headroom';
export default function Loanpage1() {
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
                  <h6 className="ps-2 pb-5"><span>Home&nbsp;&nbsp;</span>&#10095;<span className="setcolor">&nbsp;&nbsp;Education Loan</span></h6>
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
              <div className='col fade-in order-1'>
                <h2 className='setcolor'>About Education Loan</h2>
                <div className=''>
                  <div className='adjust'>

                    <p>An education loan is a financial product designed to assist students and their families in covering the costs associated with higher education, including tuition fees, books, living expenses, and more.
                    </p>
                  </div>

                  <br></br>
                  <Link to="contact" className="btn-get-started1">Apply Now</Link>
                </div>
              </div>
            </div>
            </section>
          </div>
          <section id='contact'>
            <FormExample></FormExample>
          </section>
          <div className="col-10 mx-auto">
            <div id="eligibility" className="pt-5"></div>
            <div className='pt-5 fixing'>
              <h3 className='texter pb-3'>Eligibility</h3>

              <p className="alignment">Education loan eligibility criteria can vary depending on the country of study, the lender, and the type of loan you're applying for. However in a general overview the factors that often influence education loan eligibility are:</p>
              <p className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Age: Most lenders have a minimum and maximum age requirement for loan applicants. Typically, you need to be of legal age (18 or older) to apply for a loan.</p>
              <p className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Income/Financial Ability: Some lenders may consider your ability to repay the loan based on your income or your co-borrower's income.</p>
              <p className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Documentation: You will likely need to provide various documents as part of your loan application, such as proof of identity, proof of admission, income documents, and more.</p>
              <p className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Program Eligibility: Education loans are often tied to specific educational programs or courses. Lenders may have a list of eligible institutions and programs that qualify for loans.</p>
              <p className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Guarantor: If you have limited credit history or income, some lenders might require a co-borrower or guarantor (usually a parent or guardian).</p>
              <p className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Loan Amount: The loan amount you're requesting in relation to the cost of the program might affect your eligibility. Lenders may have specific limits on the loan amount they are willing to offer.</p>


            </div>
            <div id="features" className="pt-5"></div>

            <div className='pt-5'>
              <h3 className='texter pb-3'>Features and Benefits of our Education Loan</h3>

              <p className="alignment">The followings are the ways a Education loan can be useful:</p>
              <p className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Moratorium Period : Repayment typically starts after the completion of the course, providing students time to secure employment.</p>
              <p className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Co-borrower Option : Parents or guardians can be co-borrowers to enhance eligibility.</p>
              <p className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Tax Benefits : Repayment interest might be eligible for tax deductions under Section 80E of the Income Tax Act.</p>
              <p className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Multiple Courses and Institutions : Loans are available for various courses, from school education to higher studies, and for institutions in India and abroad.</p>
              <p className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Collateral and Non-Collateral Loans : Depending on the loan amount, some may require collateral, while smaller loans might not need any security.</p>
            </div>

            <div id="documents" className="pt-5"></div>
            <div className='pt-5'>
              <h3 className='texter pb-3'>Documents required to apply for Personal Loan</h3>
              <p className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Identity Proof  - Passport, Voter’s ID, Driving License, PAN Card, Aadhaar Card</p>
              <p className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Proof of Residence or Address Proof - Passport, Voter’s ID, Driving License, PAN Card, Aadhaar Card, Electricity Bill, Telephone Bill, Ration Card </p>
              <p className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Age Proof -  Passport, Voter’s ID, Driving License, PAN Card, Aadhaar Card</p>
              <p className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Income Proof - 1 year Bank statement, 3 months Salary Slips</p>
              <p className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Employment Proof - Employment Certificate, Office address proof</p>
              <p className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;GST or VAT Registration for Self-employed</p>
              <p className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Photograph - Passport-size photographs</p>
              <p className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;Business proof - Business registration documents such as a partnership deed, Memorandum of Association (MOA), Articles of Association (AOA), etc.</p>
              <p className="alignment">&nbsp;&nbsp;<span>&#8226;</span>&nbsp;&nbsp;&nbsp;&nbsp;Income tax returns – Documents of the past 2-3 years to verify income and tax payment history</p>
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
                  <h3 className='setcolorb'>Fees and Charges for Education Loan</h3>
                  <p className='text-white pt-3'>The fees and charges of Education loans usually vary from lender to lender and from case to case.
                    The aforementioned table will give you a fair idea of the fees and charges related to Education loans:</p>
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
                <img src={fb} className="set animated1" alt="home img" />
                <div className="text-center">
                  <Link to="contact" className="btn-get-started2">Get Started</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="accorder">
          <AccordionUsage1></AccordionUsage1>
        </section>
        <section id="boomer">
          <Footer></Footer>
        </section>
      </div>
    </>
  )
}
