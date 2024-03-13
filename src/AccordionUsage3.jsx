import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function AccordionUsage3() {
  return (
    <div>
      <h1 className='text-center pb-5 thesetter'>Frequently Asked Questions</h1>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <b>What is a home loan? </b>
        </AccordionSummary>
        <AccordionDetails>
        A home loan, is a loan provided by a financial institution to help you purchase or refinance a home. It is typically repaid in monthly installments over a specified term.
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         <b> How do I qualify for a home loan?</b>
        </AccordionSummary>
        <AccordionDetails>
        Qualification criteria can vary among lenders, but factors such as your credit score, income, employment history, and the property's value are commonly considered when determining eligibility. 
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <b>What is loan tenure or term?</b>
        </AccordionSummary>
        <AccordionDetails>
        Loan tenure refers to the length of time over which you'll repay your home loan. It can vary but is usually 15, 20, or 30 years. Longer tenures result in lower monthly payments but higher overall interest costs.
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         <b>What is an EMI? </b>
        </AccordionSummary>
        <AccordionDetails>
        EMI stands for Equated Monthly Installment, which is the fixed monthly payment you make to repay your home loan. It typically includes both principal and interest portions.
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <b>Can I prepay my home loan? </b>
        </AccordionSummary>
        <AccordionDetails>
        Yes, most home loans allow for prepayment or early repayment. Some loans may have prepayment penalties, so it's essential to check with your lender.
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
