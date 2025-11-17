import { useContext } from "react"
import { StudentCtx } from "../contexts/StudentCon"

const PresentStudent=()=>{
    const {studentStates,toggleList}=useContext(StudentCtx)
    return(
         <div className="present-student">
        <h2>present student</h2>
        {studentStates.studentList.filter(student=>student.isPresent===true).map((student)=>(
          <li key={student.id}>
            <span>{student.name}</span>
            <button type="button" onClick={()=>toggleList(student)}>Accidentaly added</button>
          </li>
        ))}
      </div>
    )
}
export default PresentStudent