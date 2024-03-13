import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function AccordionUsage2() {
  return (
    <div>
      <h1 className='text-center pb-5 thesetter'>Frequently Asked Questions</h1>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <b>What is a car loan?</b>
        </AccordionSummary>
        <AccordionDetails>
        A car loan is a financial arrangement where a lender provides funds to help you purchase a vehicle. You repay the loan in installments, often with interest, until the loan is fully paid off.
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         <b> How does a car loan work? </b>
        </AccordionSummary>
        <AccordionDetails>
        You apply for a car loan from a lender, and if approved, you receive the funds to buy the car. You then repay the loan in monthly installments over a predetermined period, typically 2-7 years, until the loan is paid off.
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <b>What's the difference between interest rate and APR?</b>
        </AccordionSummary>
        <AccordionDetails>
        The interest rate is the cost of borrowing, while the Annual Percentage Rate (APR) includes both the interest rate and any additional fees, providing a more comprehensive view of the loan's total cost.
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         <b>What factors affect car loan eligibility? </b>
        </AccordionSummary>
        <AccordionDetails>
        Factors include your credit score, income, employment history, existing debts, down payment, and the chosen car's value.
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <b>What's the importance of a down payment?</b>
        </AccordionSummary>
        <AccordionDetails>
        A down payment is the initial amount you pay upfront. A larger down payment can lower your loan amount, monthly payments, and overall interest cost.
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
