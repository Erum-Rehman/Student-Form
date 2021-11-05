import React from 'react';

const ButnField =(props) => {
    return(
        <>
            <button  onClick={props.onclick} className={`btn_Style  ${props.className} ${props.Btn_Primary ? "Btn_Primary" : props.Btn_Secondary ?  "Btn_Secondary" : "default" }`}>{props.buttonName}</button>
        </>
    )
}
export default ButnField