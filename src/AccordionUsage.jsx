import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function AccordionUsage() {
  return (
    <div>
      <h1 className='text-center pb-5 thesetter'>Frequently Asked Questions</h1>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <b>What is Minimum Credit Score required to Qualify for Loan?</b>
        </AccordionSummary>
        <AccordionDetails>
        Depending on several factors, including the loan amount, loan term, income, and employment history, different lenders have different minimum credit score requirements to be approved for personal loans. Most lenders consider a credit score of 650 or above to be strong enough to qualify for a personal loan. To be eligible for a personal loan with low-interest rates and advantageous terms, some lenders may require a credit score of 700 or better.
        </AccordionDetails>
      </Accordion>
     
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         <b> Can Students Apply For Personal Loan?</b>
        </AccordionSummary>
        <AccordionDetails>
        Students are eligible to apply for a personal loan. However, depending on the lender and the student's financial situation, the eligibility criteria and loan terms may differ. If the student is employed or has a steady source of income, procuring a personal loan may be easier. A good credit score can also increase the likelihood of approval and result in lower interest rates.
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <b>Can I use Personal Loan For Marriage Expanse?</b>
        </AccordionSummary>
        <AccordionDetails>
        Yes, you can use a personal loan for marriage expenses. Because weddings may be extremely pricey, personal loans are frequently utilized to pay for them. However, it's important to consider whether you can afford to repay the loan, as defaulting on a loan can negatively impact your credit score and financial future.  
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         <b> Are there any charges for prepaying a personal Loan?</b>
        </AccordionSummary>
        <AccordionDetails>
        Yes, there may be fees associated with prepaying a personal loan, which are commonly referred to as prepayment penalties. Some lenders charge these fees if you repay your loan before the end of the term. The prepayment penalty varies by lender and can be a fixed fee or a percentage of the outstanding loan amount. It is crucial to carefully read the loan agreement to determine whether there are any prepayment penalties associated with the loan and what the charges would be if you decided to repay the loan.
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <b>How can I Calculate Emi For Personal Loan?</b>
        </AccordionSummary>
        <AccordionDetails>
        Your EMI consists of two components - principal repayment and interest payment. In the initial years, the interest component will be higher, and gradually, the principal component will increase.
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-2 shadow'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <b>What is the maximum loan amount that I can borrow through a personal loan?</b>
        </AccordionSummary>
        <AccordionDetails>
        The maximum loan amount that you can borrow through a personal loan in India depends on several factors, such as your income, credit score, repayment capacity, and the lender's policy. Typically, lenders offer personal loans ranging from Rs 10,000 to MAX. However, the maximum loan amount that you can borrow will depend on your eligibility, and it is advisable to borrow only what you need and can repay comfortably.
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
