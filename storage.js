let storage = {
    students : {
      1:{id:1, name:"ddd", age:1820},
      2:{id:2, name:"fff", age: 390}

    }
};

function getStudents(  ){
    return Object.values(storage.students);
}
function getStudentsID(  ){

    return Object.keys(storage.students);
}
function getStudentById( studentId ){

  if (storage.students[studentId]) {

    return storage.students[studentId];
  } else {
    throw new Error('student ID does not exist')
  }
}

function addNewStudent(studentObj){
  const highestID = Math.max(...getStudentsID())
  const newID = highestID +1

  newStudentObj = Object.assign(studentObj,{id:newID})
  return storage.students[newID] = newStudentObj;
}

function updateStudent(studentId, newStudentObj){
  return storage.students[studentId] = newStudentObj
}

function changeStudentInfo(studentId, newInfoObj){
  Object.keys(newInfoObj).forEach(key => {
    if (getStudentById( studentId )[key]) {
    return   getStudentById( studentId )[key]=newInfoObj[key]

    } else {
      throw new Error(`no entry for ${key} exists`)
    }
  })

}

function deleteStudent(studentId){
  delete storage.students[studentId]
}

module.exports={deleteStudent,getStudentById, getStudents,addNewStudent,updateStudent,getStudentsID,changeStudentInfo}
