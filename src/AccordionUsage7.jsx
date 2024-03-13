import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function AccordionUsage7() {
  return (
    <div>
      <h1 className='text-center pb-5 thesetter'>Frequently Asked Questions</h1>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <b>How much can I borrow with a business loan?</b>
        </AccordionSummary>
        <AccordionDetails>
        Loan amounts depend on factors like your business's financial health, the lender's policies, and the type of loan. Lenders typically consider your business's revenue and ability to repay.

We can take the loan amount between 1 lakhs -1cr.
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         <b>What interest rate can I expect?</b>
        </AccordionSummary>
        <AccordionDetails>
        Interest rates vary based on factors such as the type of loan, lender, your creditworthiness, and market conditions. Good credit and a strong business history may lead to lower rates.The rate slabs of different banks and nbfcs are attached in the last point of content.
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <b>How do I apply for a business loan?</b>
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
         <b>How long does the approval process take?</b>
        </AccordionSummary>
        <AccordionDetails>
        Applying for a business loan involves filling out an application form, providing required documents (business plan, financial statements, etc.), and potentially undergoing a credit check.
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <b>What documents do I need to apply for a business loan?</b>
        </AccordionSummary>
        <AccordionDetails>
        The approval timeline can vary. Online lenders might provide quicker decisions, while traditional banks might take longer. Preparing all necessary documents can expedite the process.
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <b>Can I get a business loan with bad credit?</b>
        </AccordionSummary>
        <AccordionDetails>
        Some lenders offer loans to businesses with less-than-perfect credit, but interest rates may be higher. Exploring alternative financing options or working to improve your credit can be helpful.
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
