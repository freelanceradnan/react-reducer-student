import { useContext } from "react";
import { StudentCtx } from "../contexts/StudentCon";


const FormSection = () => {
  const {changeNameHandler,submitHandler,studentStates}=useContext(StudentCtx)
  
  
  
  return (
    <form onSubmit={submitHandler}>
      <input type="text" value={studentStates.studentTitle} onChange={changeNameHandler} />
      <button type="submit">{studentStates.editMode ? "update data" : "add data"}</button>
    </form>
  );
};
export default FormSection;
