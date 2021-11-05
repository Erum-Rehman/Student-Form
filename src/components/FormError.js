import React from 'react';

const FormError = (props) => {
    return(
        <>
            <span className={`showError  ${props.className}`}>{props.Error}</span> 
        </>
    )
}
export default FormError