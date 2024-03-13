import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function AccordionUsage1() {
  return (
    <div>
      <h1 className='text-center pb-5 thesetter'>Frequently Asked Questions</h1>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <b>What is an education loan?</b>
        </AccordionSummary>
        <AccordionDetails>
        An education loan is a financial product designed to assist students and their families in covering the costs associated with higher education, including tuition fees, books, living expenses, and more.
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         <b> Who is eligible for an education loan?</b>
        </AccordionSummary>
        <AccordionDetails>
        Eligibility criteria vary by lender and country, but typically include factors like admission to an eligible program, citizenship or residency status, academic performance, and more.
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <b>What is a moratorium period?</b>
        </AccordionSummary>
        <AccordionDetails>
        A moratorium period is a grace period during which borrowers are not required to make loan repayments, usually after graduation or starting a job. However, interest might accrue during this time.
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         <b> When does repayment start after the moratorium period?</b>
        </AccordionSummary>
        <AccordionDetails>
        Repayment usually starts after the moratorium period ends, based on the terms of the loan agreement.
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <b>What are the repayment options?</b>
        </AccordionSummary>
        <AccordionDetails>
        Repayment options include standard, graduated, and income-driven plans, each with different terms and monthly payments.
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
