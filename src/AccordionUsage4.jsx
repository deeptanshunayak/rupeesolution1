import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function AccordionUsage4() {
  return (
    <div>
      <h1 className='text-center pb-5 thesetter'>Frequently Asked Questions</h1>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <b>What is a Loan Against Property (LAP)?</b>
        </AccordionSummary>
        <AccordionDetails>
        A Loan Against Property is a secured loan where you use your property as collateral to borrow money for various purposes, like business expansion, education, medical expenses, and more.
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         <b> What can I use a Loan Against Property for?</b>
        </AccordionSummary>
        <AccordionDetails>
        LAP funds can be used for diverse needs, including New Business expansion and growth, working capital, machinery purchase, medical emergencies, debt consolidation, and home renovations. 
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <b>How much loan can I get against my property?</b>
        </AccordionSummary>
        <AccordionDetails>
        The loan amount depends on the property's value, usually ranging from 50% to 70% of its market value, determined by factors like property type and location.
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         <b>What is the repayment period for LAP?</b>
        </AccordionSummary>
        <AccordionDetails>
        LAP typically offers longer repayment periods, spanning from 5 to 20 years, depending on the lender's terms and your repayment capability.
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <b>What are the interest rates for LAP?</b>
        </AccordionSummary>
        <AccordionDetails>
        LAP interest rates are relatively lower than unsecured loans, and they can be fixed or floating, depending on market conditions, lender policies, and your creditworthiness.
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
