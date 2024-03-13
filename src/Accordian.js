import React, { useState } from "react";
import { questions } from "./SingleQuestion";
import "./accordian.css";
import MyAccordian from "./MyAcccordian";
const Accordian=()=>{
    const [data,setData]=useState(questions);
    return(
       <>
       <section className="main-div">
            <h1 className="header">Frequently Asked Questions</h1>
        {
            data.map((cur)=>{
                const {id}=cur;
                return <MyAccordian key={id}{...cur}></MyAccordian>;
            })
        }
     </section>
       </>
    )
}
export default Accordian;