import AbsentStudent from "./AbsentStudent"
import AllStudent from "./AllStudent"
import PresentStudent from "./PresentStudent"
import '../App.css'

const StudentSection=()=>{
   
    return(
        <div className="app">
            <AllStudent/>
        <PresentStudent />
        <AbsentStudent/>
        </div>
        
        
    )
}
export default StudentSection