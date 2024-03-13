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
                                            <option value="6">Bihar</option>
                                        </Form.Select>
                                    </div>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationCustom04" className=''>
                                    <div className='gapper-form3'>
                                        <Form.Label><span className='formcolor'>Enter Your State</span></Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Choose</option>
                                            <option value="1">Haryana</option>
                                            <option value="2">Delhi</option>
                                            <option value="3">Uttar Pradesh</option>
                                            <option value="4">Andhra Pradesh</option>
                                            <option value="5">Madhya Pradesh</option>
                                            <option value="6">Bihar</option>
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