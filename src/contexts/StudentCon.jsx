import {createContext,useReducer} from "react";

export const StudentCtx=createContext();
const initState={
  studentTitle:'',
  studentList:[],
  editMode:false,
  editableMode:null,
}
const CreateReducer=(state,action)=>{
 switch(action.type){
  case "change_student_name":{
    return{
      ...state,
      studentTitle:action.payload
    }
  }
  case "create_student":{
    const newStudent={
      id:Date.now()+'',
      name:state.studentTitle,
      isPresent:undefined
    }
    return{
      ...state,
      studentList:[...state.studentList,newStudent],
      studentTitle:(''),
    }
  }
  case "edit_student":{
    return{
      ...state,
      editMode:true,
      editableMode:action.payload,
      studentTitle: action.payload.name
    }
  }
   case "update_student":
      return {
        ...state,
        studentList: state.studentList.map((item) =>
          item.id === state.editableMode.id ? { ...item, name: state.studentTitle } : item
        ),
        editMode: false,
        editableMode: null,
        studentTitle: "",
      };
    

  

  
  case "remove_student":{
    return{
      ...state,
      studentList:state.studentList.filter(item=>item.id!==action.payload)
  
  }
    }
  
  case "change_isPresent_status":{
    return {
      ...state,
      studentList:state.studentList.map((item)=>{
      if(item.id==action.payload.id){
        return{...item,isPresent:action.payload.isPresent}
      }
      return item
    })
    }
  }
  default:{
    return state;
  }
 }
}


const StudentProvider=(props)=>{
  const {children}=props
  const[studentStates,dispatch]=useReducer(CreateReducer,initState)
  
  const submitHandler = (e) => {
    e.preventDefault();
    if(studentStates.studentTitle.trim()===""){
      return alert('please enter a valid data')
    }
    studentStates.editMode ?dispatch({type:"update_student"}):dispatch({type:"create_student"})
  };
  const changeNameHandler = (e) => {
    dispatch({type:"change_student_name",payload:e.target.value})
  };
const makePresentHandler=(student)=>{
    if(student.isPresent!==undefined){
      return alert(`your code is alreday in ${student.isPresent===true?"present list":"absent list"}`)
    }
    dispatch({type:"change_isPresent_status",payload:{id:student.id,isPresent:true}

    })
  }
    const makeAbsentHandler=(student)=>{
    if(student.isPresent!==undefined){
      return alert(`your code is alreday in ${student.isPresent===true?"present list":"absent list"}`)
    }
   dispatch({type:"change_isPresent_status",payload:{id:student.id,isPresent:false}
   })
  }
   const toggleList=(student)=>{
     dispatch({type:"change_isPresent_status",payload:{id:student.id,isPresent:!student.isPresent}
})
  }

  const DataTrans={
    submitHandler,
    studentStates,
    dispatch,
    makePresentHandler,
    makeAbsentHandler,
    toggleList,
    changeNameHandler,
  }
    return(
        <StudentCtx.Provider value={DataTrans}>
         {children}
        </StudentCtx.Provider>
    )
}
export default StudentProvider