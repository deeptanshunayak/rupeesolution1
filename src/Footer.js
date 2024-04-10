import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import footerb from "../src/images/footer.svg"
export default function Footer() {
    return (
        <MDBFooter style={{ backgroundColor: '#00063F' }} className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4'>
                <div className='ms-5 d-none d-lg-block'>
                      <p className='text-white fonting'>Email Id: xyz@gmail.com</p>
                      <p className='text-white fonting'>Phone No: 0090090911</p>
                </div>

                <div>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="twitter" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="google" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="instagram" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="linkedin" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="github" />
                    </a>
                </div>
            </section>

            <section className='border-bottom'>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>


                        

                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4 text-white'>Loans</h6>
                            <p className='text-white'>
                                
                                Personal Loan
                                
                            </p>
                            <p className='text-white'>
                               
                                Home Loan
                               
                            </p>
                            <p className='text-white'>
                               
                                Car Loan
                            </p>
                            <p className='text-white'>
                                
                                Education Loan
                               
                            </p>
                            <p className='text-white'>
                                
                                Business Loan
                                
                            </p>
                            <p className='text-white'>
                                
                                Credit Card
                                
                            </p>
                            <p className='text-white'>
                                
                                Loan Against Property
                                
                            </p>
                            <p className='text-white'>
                                
                                Gold Loan
                                
                            </p>
                        </MDBCol>
                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4 text-white'>Pages</h6>
                            <p className='text-white'>
                                
                                    Home
                              
                            </p>
                            <p className='text-white'>
                               
                                    About
                                
                            </p>
                            <p className='text-white'>
                               
                                    Calculator
                               
                            </p>
                            <p className='text-white'>
                               
                                    About Us
                                
                            </p>
                           
                        </MDBCol>
                       
                        <MDBCol md="3" lg="4" xl="4" className='mx-auto mb-8'>
                        <img src={footerb} className="img-fluid animated1" alt="home img" />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
            <div className='p-5'>
                <div className='text-center text-white p-5'>
                    © 2024 Copyright:Aspire All Rights Reserved
                </div>
              
            </div>
        </MDBFooter>
    );
}