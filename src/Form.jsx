import React from 'react'
import Navbar1 from './Navbar1';
export default function Form() {
    return (
        <>
        <Navbar1></Navbar1>
        <div className='adjustment'>
           
            <div className='containerbox'>
                <h1 className='form-title'>Personal Information</h1>
                <form action='#'>
                <div className='gender-details-box'>
                        <span className='gender-title'>Occupation</span>
                        <div className='gender-category'>
                            <input type='radio' name='gender' id="male"></input>
                            <label for="male">Salaried</label>
                            <input type='radio' name='gender' id="female"></input>
                            <label for="female">Self-Employed</label>

                        </div>
                    </div>
                    <div className='main-user-info'>
                        <div className='user-input-box'>
                            <label for="fullname">First Name</label>
                            <input type='text' id='fullname' name='fullname' placeholder='Enter Fullname'></input>
                        </div>
                        <div className='user-input-box'>
                            <label for="username">Last Name</label>
                            <input type='text' id='username' name='username' placeholder='Enter Lastname'></input>
                        </div>
                        <div className='user-input-box'>
                            <label for="email">Email</label>
                            <input type='text' id='email' name='email' placeholder='Enter Email Id'></input>
                        </div>
                        <div className='user-input-box'>
                            <label for="PhoneNumber">Phone Number</label>
                            <input type='text' id='PhoneNumber' name='PhoneNumber' placeholder='Enter Phone Number'></input>
                        </div>
                        <div className='user-input-box'>
                            <label for="Cname">Company Name</label>
                            <input type='text' id='Cname' name='Cname' placeholder='Company Name'></input>
                        </div>
                        <div className='user-input-box'>
                            <label for="Ctype">Company Type</label>
                            <input type='text' id='Ctype' name='Ctype' placeholder='Select Company Type'></input>
                        </div>
                        <div className='user-input-box'>
                            <label for="Pcode">Pincode</label>
                            <input type='text' id='Pcode' name='pcode' placeholder='Pincode'></input>
                        </div>
                        <div className='user-input-box'>
                            <label for="state">State</label>
                            <select name='state' id='state' placeholder="Select State">
                            <option value="Select State">Select State</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Orissa">Orissa</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Uttar pradesh">Uttar Pradesh</option>
                            <option value="Andhra Pradesh">Andhra pradesh</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="west Bengal">West Bengal</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="kerala">kerala</option>
                            <option value="Karnatka">Karnatka</option>
                            <option value="Maharashtra">Mahrashtra</option>
                            </select>
                            {/* <input type='text' id='state' name='state' placeholder='Select State'></input> */}
                        </div>
                        <div className='user-input-box'>
                            <label for="city">City</label>
                            <select name='City' id='city' placeholder="Select City">
                            <option value="Select State">Select City</option>
                            <option value="Faridabad">Faridabad</option>
                            <option value="Gurgram">Gurugram</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Orissa">Orissa</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className='form-submit-btn'>
                        <input type='submit' value="APPLY"></input>
                    </div>
                </form>

            </div>
        </div>
        </>
    )
}
