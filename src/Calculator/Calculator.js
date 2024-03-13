import React, { useState } from "react";
import "./calculator.css";

import Slider from "@mui/material";
import Typography from "@mui/material";

const Calculator=()=>{
    const PrettoSlider = styled(Slider)({
        color: '#52af77',
        height: 8,
        '& .MuiSlider-track': {
          border: 'none',
        },
        '& .MuiSlider-thumb': {
          height: 24,
          width: 24,
          backgroundColor: '#fff',
          border: '2px solid currentColor',
          '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
          },
          '&::before': {
            display: 'none',
          },
        },
        '& .MuiSlider-valueLabel': {
          lineHeight: 1.2,
          fontSize: 12,
          background: 'unset',
          padding: 0,
          width: 32,
          height: 32,
          borderRadius: '50% 50% 50% 0',
          backgroundColor: '#52af77',
          transformOrigin: 'bottom left',
          transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
          '&::before': { display: 'none' },
          '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
          },
          '& > *': {
            transform: 'rotate(45deg)',
          },
        },
      });
    const [pAmount,setpAmount]=useState(2755000);
    const [interest,setinterest]=useState(7);
    const [duration,setduration]=useState(147);
    const intMax=20;
    const maxduration=360;
    const intr=interest/1200;
    const emi=duration?Math.round(pAmount*intr/(1-(Math.pow(1/(1+intr),duration)))):0;
    const totalAmt=duration*emi;
    const TotalAmountOfCredit=Math.round((emi/intr)*(1-(Math.pow(1+intr),(-duration))));
    const TotalAmountOfInterest=Math.round(totalAmt-TotalAmountOfCredit);
    return(
        <>
        <div className="calheading">
            <h2 className="">EMI CALCULATOR</h2>
            <div>
                <Typography gutterBottom>Loan Amount</Typography>
                <PrettoSlider value={pAmount} onChange={(Event,vAmt)=>{setpAmount(vAmt)}} defaultValue={pAmount} max={pAmount}></PrettoSlider>
            </div>
            <div>
                <Typography gutterBottom>Loan Amount</Typography>
                <PrettoSlider value={interest} onChange={(Event,vInt)=>{setinterest(vInt)}} defaultValue={interest} max={intMax}></PrettoSlider>
            </div>
            <div>
                <Typography gutterBottom>Loan Amount</Typography>
                <PrettoSlider value={duration} onChange={(Event,vDur)=>{setduration(vDur)}} defaultValue={duration} max={maxduration}></PrettoSlider>
            </div>
        </div>
        </>
    )
}
export default Calculator;