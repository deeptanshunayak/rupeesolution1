import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import footerb from "../src/images/footer.svg"
export default function Footer() {
    return (
        <MDBFooter style={{ backgroundColor: '#00063F' }} className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4'>
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


                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4 text-white'>Company</h6>
                            <p className='text-white'>
                                
                                    About
                              
                            </p>
                            <p className='text-white'>
                               
                                    Pricing
                                
                            </p>
                            <p className='text-white'>
                               
                                    Jobs
                               
                            </p>
                            <p className='text-white'>
                               
                                    Blogs
                                
                            </p>
                            <p className='text-white'>
                               
                                    Career
                               
                            </p>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4 text-white'>Loans</h6>
                            <p className='text-white'>
                                
                                    Sales Software
                                
                            </p>
                            <p className='text-white'>
                               
                                    Features
                               
                            </p>
                            <p className='text-white'>
                               
                                    Privacy and Security
                             
                            </p>
                            <p className='text-white'>
                                
                                    Marketplace
                               
                            </p>
                            <p className='text-white'>
                                
                                    API
                                
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4 text-white'>Help Center</h6>
                            <p className='text-white'>
                                <MDBIcon icon="home" className="" />
                                Community
                            </p>
                            <p className='text-white'>
                                <MDBIcon icon="envelope" className="text-white" />
                                Knowledge base
                            </p>
                            <p className='text-white'>
                                <MDBIcon icon="phone" className="text-white" /> 
                                Academy
                            </p>
                            <p className='text-white'>
                                <MDBIcon icon="print" className="text-white" />
                                Support
                            </p>
                        </MDBCol>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                        <img src={footerb} className="img-fluid animated1" alt="home img" />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
            <div className='p-5'>
                <div className='text-center text-white p-5'>
                    © 2021 Copyright:Aspire All Rights Reserved
                </div>
              
            </div>
        </MDBFooter>
    );
}