import { useContext } from "react"
import { StudentCtx} from "../contexts/StudentCon"
useContext

const AbsentStudent=()=>{
    const {studentStates,toggleList}=useContext(StudentCtx)
return(
     <div className="absent-student">
        <h2>absent student</h2>
        {studentStates.studentList.filter(item=>item.isPresent===false).map((student)=>(
          <li key={student.id}>
            <span>{student.name}</span>
            <button type="button" onClick={()=>toggleList(student)}>Accidently added</button>
          </li>
        ))}
      </div>
)
}
export default AbsentStudent