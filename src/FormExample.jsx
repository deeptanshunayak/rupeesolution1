import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function FormExample() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    
    return (
        <>
            <div className='form-bg'>
                <div className="row">
                    <div className="col-10 mx-auto">
                        <h2 className='formcolor pt-5 pb-5 fw-bold'>CONTACT FORM</h2>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="4" controlId="validationCustom01" className=''>
                                    <div className='gapper-form5'>
                                        <Form.Label><span className='formcolor'>Enter Your Full name</span></Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Om Prakash Aggarwal"
                                            defaultValue=""
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </div>
                                </Form.Group>

                                <Form.Group as={Col} md="4" controlId="validationCustom02" className=''>
                                    <div className='gapper-form2'>
                                        <Form.Label><span className='formcolor'>Email ID</span></Form.Label>
                                        <Form.Control
                                            required
                                            type="email"
                                            placeholder="Aggarwal@gmail.com"
                                            defaultValue=""
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </div>
                                </Form.Group>

                                <Form.Group as={Col} md="4" controlId="validationCustom01" className=''>
                                    <div className='gapper-form1'>
                                        <Form.Label><span className='formcolor'>Phone Number</span></Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="1234567890"
                                            defaultValue=""
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </div>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3 pt-4">
                                <Form.Group as={Col} md="4" controlId="validationCustom03">
                                    <div className=' gapper-form4'>
                                        <Form.Label><span className='formcolor'>Enter Your City</span></Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Choose</option>
                                            <option value="1">Faridabad</option>
                                            <option value="2">Gurugram</option>
                                            <option value="3">Panipat</option>
                                            <option value="4">Meerut</option>
                                            <option value="5">Vijaywada</option>
                                            <option value="6">Chittorhgarh</option>
                                            <option value="5">Raipur</option>
                                            <option value="5">Baralli</option>
                                            <option value="5">Raiganj</option>
                                            <option value="5">Dornala</option>
                                            <option value="5">Simulia</option>
                                            <option value="5">Balasore</option>
                                            <option value="5">Bhuvneshwar</option>
                                        </Form.Select>
                                    </div>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationCustom04" className=''>
                                    <div className='gapper-form3'>
                                        <Form.Label><span className='formcolor'>Enter Your State</span></Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Choose</option>
                                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                                            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                            <option value="Assam">Assam</option>
                                            <option value="Bihar">Bihar</option>
                                            <option value="Chandigarh">Chandigarh</option>
                                            <option value="Chhattisgarh">Chhattisgarh</option>
                                            <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                            <option value="Daman and Diu">Daman and Diu</option>
                                            <option value="Delhi">Delhi</option>
                                            <option value="Lakshadweep">Lakshadweep</option>
                                            <option value="Puducherry">Puducherry</option>
                                            <option value="Goa">Goa</option>
                                            <option value="Gujarat">Gujarat</option>
                                            <option value="Haryana">Haryana</option>
                                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                                            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                            <option value="Jharkhand">Jharkhand</option>
                                            <option value="Karnataka">Karnataka</option>
                                            <option value="Kerala">Kerala</option>
                                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                                            <option value="Maharashtra">Maharashtra</option>
                                            <option value="Manipur">Manipur</option>
                                            <option value="Meghalaya">Meghalaya</option>
                                            <option value="Mizoram">Mizoram</option>
                                            <option value="Nagaland">Nagaland</option>
                                            <option value="Odisha">Odisha</option>
                                            <option value="Punjab">Punjab</option>
                                            <option value="Rajasthan">Rajasthan</option>
                                            <option value="Sikkim">Sikkim</option>
                                            <option value="Tamil Nadu">Tamil Nadu</option>
                                            <option value="Telangana">Telangana</option>
                                            <option value="Tripura">Tripura</option>
                                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                                            <option value="Uttarakhand">Uttarakhand</option>
                                            <option value="West Bengal">West Bengal</option>
                                        </Form.Select>
                                    </div>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationCustom05" className=''>
                                    <div className='gapper-form'>
                                        <Form.Label><span className='formcolor'>Pincode</span></Form.Label>
                                        <Form.Control type="text" placeholder="121000" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid Pincode.
                                        </Form.Control.Feedback>
                                    </div>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3 pt-4">
                                <Form.Group as={Col} md="4" controlId="validationCustom05">
                                    <div className='gapper-form4'>
                                        <Form.Label><span className='formcolor'>Occupation</span></Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Choose</option>
                                            <option value="1">Occupation</option>
                                            <option value="2">Salaried</option>

                                        </Form.Select></div>
                                </Form.Group>
                            </Row>

                            <div className='hero-btn pt-5 pb-5'>
                                <Button type="submit"><span className='fw-bold text-dark'>Submit</span></Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormExample;