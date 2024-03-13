import React, { useState } from "react";
const MyAccordian=({title,info})=>{
    const [Show,setShow]=useState(false);
return (
    <>
     <div className="main-heading">
       
        <h3 className="text-center">{title}</h3>
        <p  onClick={()=> setShow(!Show)}>{Show ? "-":"+"}</p>

     </div>
     {
          Show && <p className="answers">{info}</p>
     }
    </>
)
}
export default MyAccordian