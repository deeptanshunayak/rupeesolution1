import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function AccordionUsage6() {
  return (
    <div>
      <h1 className='text-center pb-5 thesetter'>Frequently Asked Questions</h1>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <b>What is a credit report?</b>
        </AccordionSummary>
        <AccordionDetails>
        A credit score is a 3-digit number (between 300 to 900) calculated by the credit bureau using the credit history of the individual. Banks and NBFCs (Non-Banking Financial Companies) have to share the credit history of their customers with all four credit Bureaus. The credit history of an individual consists of credit amounts, lender names, Loan and credit card limits, Loan EMI and credit card bill payment records, any default on a credit card account, personal details, etc.
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         <b>How can you increase your credit score?</b>
        </AccordionSummary>
        <AccordionDetails>
        Use only 50% of your credit card limit a month
Pay all your Loan-related dues on time
Use credit cards regularly based on your requirement
Make timely payments of your credit card bills or EMIs
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
         <b>How is credit score calculated?</b>
        </AccordionSummary>
        <AccordionDetails>
        Repayments of credit card bills and Loan EMIs on time
Utilization of credit card limits
Duration of credit cards and Loan amounts
Total number of credit cards and Loan amounts
Balance between secured and unsecured Loans
Settlement status of credit cards or Loan amounts
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <b>What is the difference between Credit Score and Credit Report?</b>
        </AccordionSummary>
        <AccordionDetails>
        A credit score is a three-digit number, which represents your entire credit history of all kinds of Loans and credit cards. A credit information report (CIR) consists of all your Loan and credit cards related information.
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <b>What are the factors that affect your credit score?</b>
        </AccordionSummary>
        <AccordionDetails>
        Payments history speaks a lot about how you've maintained your repayments. Delayed, late, or incomplete payments over your credit card and Loan can affect your credit score negatively.
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
