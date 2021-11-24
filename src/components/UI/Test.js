import react from "react"
import Button from "@mui/material/Button";
import React from "react";


const Test= ({handleOpen})=>{


    return(
        <react.Fragment>
            <Button onClick={handleOpen} > Test modal</Button>
        </react.Fragment>
    )
}

export default Test;