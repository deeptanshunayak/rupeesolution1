import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function AccordionUsage5() {
  return (
    <div>
      <h1 className='text-center pb-5 thesetter'>Frequently Asked Questions</h1>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <b>What is a gold loan?</b>
        </AccordionSummary>
        <AccordionDetails>
        A gold loan is a secured loan where you pledge your gold ornaments or assets as collateral to borrow money from a financial institution.
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         <b>What is the maximum loan amount I can get?</b>
        </AccordionSummary>
        <AccordionDetails>
        The loan amount depends on the purity and weight of the gold. Lenders usually offer around 60-75% of the gold's value as a loan. 
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <b>What's the repayment period for a gold loan?</b>
        </AccordionSummary>
        <AccordionDetails>
        Repayment periods are flexible, usually ranging from a few months to a few years, depending on the lender's terms.
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         <b>What happens if I can't repay the loan?</b>
        </AccordionSummary>
        <AccordionDetails>
        If you can't repay, the lender will auction the gold to recover the loan amount. It's essential to communicate with the lender to explore options before this happens.
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <b>Is the gold safe with the lender?</b>
        </AccordionSummary>
        <AccordionDetails>
        Lenders usually have secure storage facilities for the pledged gold to ensure its safety.
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
