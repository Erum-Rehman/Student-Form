import React, { useState } from 'react';
import InputPanel from '../components/InputPanel';
import Record from '../components/Record';
import ButnField from '../components/ButnField';
import FormError from '../components/FormError';

const initialObj = {
    userName: "",
    fatherName: "",
    DOB: "",
    email: "",
    contact: "",
    school: "",
    qualification: "",
}


const StudentForm = () => {

    const [ data, setData ] = useState(initialObj);
    const [arr, setArr] = useState([]);
    const [succeed, setSucceed]   = useState(false);
    const [Error, SetError] = useState({
        nameError: "",
        fatherError: "",
        dobError: "",
        emailError: "",
        contactError: "",
        schoolError: "",
        classError: "",
    })
    const changeInput = (value, property, errorproperty) => {
        setData({ ...data, [property]: value })
        SetError({ ...Error, [errorproperty]: "" })

    }
    
    const editRow = (index) => {
        arr[index].disabled = false;
        setArr([...arr])
    }
    const fieldChange =(value,property,index) => {
        arr[index][property] = value;
        setArr([...arr])
    }
    const delRow = (index) => {
        arr.splice([index], 1)
        setArr([...arr])
    }
    const updateRow = (index) => {
        arr[index].disabled = true
        setArr([...arr])
    }
    const viewRow = () => {
        
    }
    const renderInput = (e) => {
        e.preventDefault()

        if (!data.userName && !data.fatherName && !data.DOB && !data.email && !data.contact && !data.school && !data.qualification) {
            setSucceed(false)
            SetError({
                ...Error, nameError: "Please Enter Full Name", fatherError: "Please Enter Father Name",
                dobError: "Please Enter Date of Birth", emailError: "Please Enter Email Address", contactError: "Please Enter Contact Number",
                schoolError: "Please Enter School Name", classError: "Please Enter Grade"
            })
        }else{
            let nameError , fatherError , dobError , emailError , contactError , schoolError , classError = ""
            if(!data.userName)
                nameError = "Please Enter Full Name" 
            else{
                if(data.userName.length < 3 )
                    nameError = "Name should be more than 3 characters"
             else if(data.userName.length > 30 )
                nameError = "Name can't be more than 30 characters"
        }
          if(!data.fatherName)
          fatherError = "Please enter Father Name"   
          
          if(!data.DOB)
            dobError = "Please enter date of birth"

          if(!data.email)   
            emailError = "Please enter email address"

            else {
                const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                if (!emailRegex.test(data.email))
                    emailError = "Incorrect Email Format"
            } 
            if(!data.contact) 
                contactError = "Please enter phone number" 
            if(!data.school)
                schoolError = "Please enter School Name"
            if(!data.qualification)
                classError = "Please enter Grade"

            if(!nameError && !fatherError && !dobError  && !emailError &&  !contactError && !schoolError && !classError) {
                data.disabled = true;
                setArr([...arr, data])  
                setData(initialObj);
    } else{
        setSucceed(false)
        SetError({...Error , nameError , fatherError , dobError , emailError , contactError , schoolError , classError})      
    }   
}

    }
   
    return (
        <>
            <div className="container-fluid">
                <h1 className="main-head">Add New Student's Record</h1>
                {succeed && <h4 className="success">Form Submitted Successfully</h4>}
                </div>
                <form className="std">
                    <InputPanel htmlForm="Name"
                        type="text" className={Error.nameError ? "border_error" : ""} Name='Name'
                        placeholder="Enter Your Name" onValue={data.userName} inputValue={(e) => changeInput(e.target.value, "userName")}/>
                    <FormError Error={Error.nameError}/>
                    <InputPanel htmlForm="father's Name"
                        type="text" className={Error.fatherError ? "border_error" : ""} Name="Father's Name"
                        placeholder="Enter Your Father Name" onValue={data.fatherName} inputValue={(e) => changeInput(e.target.value, "fatherName")}/>
                      <FormError Error={Error.fatherError}/>
                    <InputPanel htmlForm="date of birth"
                        type="date" className={Error.dobError ? "border_error" : ""} Name="DOB"
                        placeholder="Enter Date of Birth" onValue={data.DOB} inputValue={(e) => changeInput(e.target.value, "DOB")}/>
                      <FormError Error={Error.dobError}/>
                    <InputPanel htmlForm="Email Address"
                        type="text" className={Error.emailError ? "border_error" : ""} Name="Email Address"
                        placeholder="Enter Email Address" onValue={data.email} inputValue={(e) => changeInput(e.target.value, "email")}/>
                      <FormError Error={Error.emailError}/>
                    <InputPanel htmlForm="Contact no"
                        type="Number" className={Error.contactError ? "border_error" : ""} Name="Contact No"
                        placeholder="Enter Contact Number" onValue={data.contact} inputValue={(e) => changeInput(e.target.value, "contact")}/>
                    <FormError Error={Error.contactError}/>
                   <InputPanel htmlForm="Contact no"
                        type="text" className={Error.schoolError ? "border_error" : ""} Name="School Name"
                        placeholder="Enter School Name" onValue={data.school} inputValue={(e) => changeInput(e.target.value, "school")}/>
                      <FormError Error={Error.schoolError}/>
                    <InputPanel htmlForm="Qualification"
                        type="Number" className={Error.classError ? "border_error" : ""} Name="Qualification"
                        placeholder="Enter Grade" onValue={data.qualification} inputValue={(e) => changeInput(e.target.value, "qualification")}/>
                          <FormError Error={Error.classError}/>
                         
                    <div>
                        <ButnField buttonName="Submit" onclick={(e) => renderInput(e)} Btn_Primary />
                        <ButnField buttonName="Cancel" />
                    </div>
                </form>
                <Record  heading={["Full Name", "Father Name", "DOB", "Email", "Contact", "School", "Qualification", "Action"]}
                    editClick={editRow} arr={arr} delItem={delRow} viewList={viewRow} 
                    changeItem={fieldChange} updateItems={updateRow}
                />
           
        </>
    )
}
export default StudentForm