import React from 'react';
import { Table } from 'react-bootstrap'
import { FiEdit , FiTrash2 , FiEye ,  FiCheck } from 'react-icons/fi'

const Record = (props) => {
    // console.log({props})
    return (
        <>
         <div className="table-div">
            <h1 className="recHead">
                Records Of All Students
            </h1>


           
                <Table striped bordered hover size="sm" className="std-table">
                    <thead>

                        <tr>
                            {props.heading.map(title => <td className="heading">{title}</td> )}
                        </tr>

                    </thead>
                   
                        <tbody className="table_body" >
                        {props.arr.map((detail, index) => 
                            <tr key={index}>
                                <td><input className="input_rec" type="text" value={detail.userName} disabled={detail.disabled} onChange={(e)=>props.changeItem(e.target.value,"userName", index)} /></td>
                                <td><input className="input_rec" type="text" value={detail.fatherName} disabled={detail.disabled}  onChange={(e)=>props.changeItem(e.target.value,"fatherName", index)}/></td>
                                <td><input className="input_rec" type="text" value={detail.DOB}  disabled={detail.disabled} onChange={(e)=>props.changeItem(e.target.value,"DOB", index)}/></td>
                                <td><input className="input_rec" type="text" value={detail.email}  disabled={detail.disabled} onChange={(e)=>props.changeItem(e.target.value,"email", index)}/></td>
                                <td><input className="input_rec" type="text" value={detail.contact} disabled={detail.disabled} onChange={(e)=>props.changeItem(e.target.value,"contact", index)}/></td>
                                <td><input className="input_rec" type="text" value={detail.school} disabled={detail.disabled} onChange={(e)=>props.changeItem(e.target.value,"school", index)}/></td>
                                <td><input className="input_rec" type="text" value={detail.qualification} disabled={detail.disabled} onChange={(e)=>props.changeItem(e.target.value,"qualification", index)}/> </td>
                                <td className="action_col">{detail.disabled ?
                                <>
                                <span className="edit" onClick={() => props.editClick(index)} ><FiEdit/></span>
                                <span className="Del" onClick={() => props.delItem(index)}><FiTrash2 /></span>
                                <span className="view" onClick={() => props.viewList(index,detail)}><FiEye/></span> 
                                </>
                                : <button className="update" onClick={() => props.updateItems(index)} >Update</button>}
                               </td>
                              
                            </tr>
                            )}
                        </tbody>
                  





                </Table>
            </div>

        </>
    )
}
export default Record;