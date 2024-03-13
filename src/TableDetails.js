import React from 'react'
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableHead from '@mui/material/TableHead';
export default function TableDetails(props) {
  return (
  <Table className='slider1'>
    <TableHead>
        <TableRow>
            <TableCell className=''>Principal amount</TableCell>
            <TableCell className=''>₹{props.pAmount}</TableCell>
        </TableRow>
        <TableRow>
            <TableCell className=''>Interest %</TableCell>
            <TableCell className=''>{props.interest}</TableCell>
        </TableRow>
        <TableRow className='tp'>
            <TableCell className=''>Tenure (Months)</TableCell>
            <TableCell className=''>{props.duration}</TableCell>
        </TableRow>
        <TableRow className='tp1'>
            <TableCell className='text-light'>EMI</TableCell>
            <TableCell className='text-light'>₹{props.emi}</TableCell>
        </TableRow>
      
        <TableRow className='tp1'>
            <TableCell className='text-light'>Total Payment</TableCell>
            <TableCell className='text-light'>₹{props.totalAmt?props.totalAmt:0}</TableCell>
        </TableRow>
    </TableHead>
  </Table>
  )
}
