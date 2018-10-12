const express = require('express');
const bodyParser = require('body-parser');
const app = express(); // create app
app.use(bodyParser.json());

const {deleteStudent, getStudents,getStudentById,addNewStudent,updateStudent,getStudentsID,changeStudentInfo} = require('./storage')



app.get('/students', function(req, res){
  const students=getStudents()
  res.json(students)
});

app.get('/students/:studentId', function(req, res){
  try{

    res.json(getStudentById(req.params.studentId))
  } catch(error){
    res.status(404).json(error.message)
  }
});

app.post('/students', function(req, res){
  const studentObj = req.body
  addNewStudent(studentObj)
  res.json(getStudents())
});

app.put('/students/:studentId', function(req, res){
  const newStudentObj=req.body
  updateStudent(req.params.studendId, newStudentObj)
  res.json(getStudentsID())
});

app.patch('/students/:studentId', function(req, res){
  try{
    const newInfoObj=req.body;
    changeStudentInfo(req.params.studentId,newInfoObj)
    res.json(getStudents())

  } catch(error){
    res.json(error.message)
  }
});

app.delete('/students/:studentId', function(req, res){
  deleteStudent(req.params.studentId)
  res.send(204)
});

app.listen(8080, function(){ // Set app to listen for requests on port 3000
    console.log('Listening on port 8080!'); // Output message to indicate server is listening
});
