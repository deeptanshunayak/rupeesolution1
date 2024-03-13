import React from 'react'
import st from "../src/images/1st.svg"
import st1 from "../src/images/2nd.svg"
import st2 from "../src/images/3rd.svg"
import st3 from "../src/images/4th.svg"
import st4 from "../src/images/5th.svg"
import st5 from "../src/images/6th.svg"
import b from "../src/images/button-link.svg"
import st6 from "../src/images/st6.svg"
import st7 from "../src/images/st7.svg"
import { NavLink } from "react-router-dom";
export default function Card() {
    return (
        <>
            <div className='theoverflow pb-4'>
                <div className='row'>
                    <div className="col-10 mx-auto">
                    <h1 className="text-left fade-in pb-5 ring">Our Services</h1>
                        <div className='row gy-5 prov'>
                            <div className='col'>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title"> <img src={st} className="img-fluid animated" alt="home img" /></h5>
                                        <h6 class="card-subtitle mb-2"><b>Personal Loan</b></h6>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <NavLink to="/loan" class="card-link">Check Eligibility<span> <img src={b} className="img-fluid animated" alt="home img" /></span></NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title"><img src={st1} className="img-fluid animated" alt="home img" /></h5>
                                        <h6 class="card-subtitle mb-2"><b>Education Loan</b></h6>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <NavLink to='/loan1' class="card-link">Check Eligibility<span> <img src={b} className="img-fluid animated" alt="home img" /></span></NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title"><img src={st2} className="img-fluid animated" alt="home img" /></h5>
                                        <h6 class="card-subtitle mb-2"><b>Car Loan</b></h6>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <NavLink to='/loan2' class="card-link">Check Eligibility<span> <img src={b} className="img-fluid animated" alt="home img" /></span></NavLink>
                                    </div>
                                </div>
                            </div>

                        
                        
                            <div className='col'>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title"><img src={st3} className="img-fluid animated" alt="home img" /></h5>
                                        <h6 class="card-subtitle mb-2"><b>Home Loan</b></h6>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <NavLink to='/loan3' class="card-link">Check Eligibility<span> <img src={b} className="img-fluid animated" alt="home img" /></span></NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title"><img src={st5} className="img-fluid animated" alt="home img" /></h5>
                                        <h6 class="card-subtitle mb-2 "><b>Loan Aginst Property</b></h6>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <NavLink to='/loan4' class="card-link">Check Eligibility<span> <img src={b} className="img-fluid animated" alt="home img" /></span></NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title"><img src={st4} className="img-fluid animated" alt="home img" /></h5>
                                        <h6 class="card-subtitle mb-2"><b>Gold Loan</b></h6>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <NavLink to='/loan5' class="card-link">Check Eligibility<span> <img src={b} className="img-fluid animated" alt="home img" /></span></NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title"><img src={st7} className="img-fluid animated" alt="home img" /></h5>
                                        <h6 class="card-subtitle mb-2"><b>credit Card</b></h6>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <NavLink to='/Creditcard' class="card-link">Check Eligibility<span> <img src={b} className="img-fluid animated" alt="home img" /></span></NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title"><img src={st6} className="img-fluid animated" alt="home img" /></h5>
                                        <h6 class="card-subtitle mb-2"><b>Business Loan</b></h6>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <NavLink to='/Business' class="card-link">Check Eligibility<span> <img src={b} className="img-fluid animated" alt="home img" /></span></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
