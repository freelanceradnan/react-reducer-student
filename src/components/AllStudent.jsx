import { useContext } from "react";
import { StudentCtx } from "../contexts/StudentCon";

const AllStudent=()=>{
   const {studentStates,makeAbsentHandler,makePresentHandler,dispatch}=useContext(StudentCtx)

   
  
 
  
  
    return(
<div className="all-student">
        <h2>all student</h2>
        {studentStates.studentList.map((student)=>(
          <li key={student.id}>
            <span>{student.name}</span>
            <button type="button" onClick={()=>dispatch({type:"edit_student",payload:student})}>edit</button>
            <button type="button" onClick={()=>dispatch({type:"remove_student",payload:student.id})}>delete</button>
            <button type="button" onClick={()=>makePresentHandler(student)}>make present</button>
            <button type="button" onClick={()=>makeAbsentHandler(student)}>make absent</button>
          </li>
        ))}
      </div>
    )
}
export default AllStudent;