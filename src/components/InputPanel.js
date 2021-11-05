import React from 'react';

const InputPanel = (props) => {
    return (
        <>
            <div className="Control_Panel">
                <label htmlForm={props.htmlForm} className={`label_entry ${props.className ? "border_error1" : ""} `} >{props.Name}: </label>
                <input type={props.type} placeholder={props.placeholder} id={props.Name} value={props.onValue}
                    onChange={props.inputValue}
                    className={`InputFeild ${props.className ? "border_error" : ""}`} />
            </div>
        </>
    )
}
export default InputPanel