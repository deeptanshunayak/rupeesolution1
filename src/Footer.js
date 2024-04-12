import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import footerb from "../src/images/footer.svg"
import logo from "../src/images/Rupee solutions.svg"
import fb from "../src/images/fb.svg"
import tw from "../src/images/tw.svg"
import ug from "../src/images/ig.svg"
import li from "../src/images/link.svg"
import yt from "../src/images/yt.svg"
export default function Footer() {
    return (
        <MDBFooter style={{ backgroundColor: '#00063F' }} className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>

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

                    <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            
                           <img src={logo}></img>
                           <br></br>
                           <br></br>
                            <p className='text-white'>
                                <MDBIcon icon="envelope" className="text-white" />
                                Faridabad,Haryana
                            </p>
                            <p className='text-white'>
                                <MDBIcon icon="phone" className="text-white" /> 
                                +91 84487 38225
                            </p>
                            <p className='text-white'>
                                <MDBIcon icon="phone" className="text-white" /> 
                                <p className='text-white'>
                                <MDBIcon icon="phone" className="text-white" /> 
                                info@gmail.com
                            </p>
                           <img src={fb}></img>
                           &nbsp;
                           <img src={tw}></img>
                           &nbsp;
                           <img src={ug}></img>
                           &nbsp;
                           <img src={li}></img>
                           &nbsp;
                           <img src={yt}></img>
                           &nbsp;
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
                               
                                    Loans
                               
                            </p>
                            <p className='text-white'>
                               
                                    Contact
                                
                            </p>
                            
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4 text-white'>Loans</h6>
                            <p className='text-white'>
                                
                                    Personal Loan
                                
                            </p>
                            <p className='text-white'>
                               
                                    Car Loan
                               
                            </p>
                            <p className='text-white'>
                               
                                    Credit Card
                             
                            </p>
                            <p className='text-white'>
                                
                                    Home Loan
                               
                            </p>
                            <p className='text-white'>
                                
                                    Business Loan
                                
                            </p>
                        </MDBCol>

                        
                        <MDBCol md="3" lg="4" xl="4" className='mx-auto mb-4'>
                        <img src={footerb} className="img-fluid" alt="home img" />
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