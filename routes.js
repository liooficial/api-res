module.exports = function(app, databaseservice){


app.get(('/'),(req,res)=>{
    res.json('Node JS api');
});


app.get(('/api/students'),(req,res)=>{
    databaseservice.getstudent()
    .then(resultado => res.json(resultado))
    .catch(e => res.status(500).send(e));
});



app.get(('/api/students/:id'),(req,res)=>{
    const id= req.params.id;
    console.log(id);
    databaseservice.getstudentById(id)
    .then(resultado => res.json(resultado))
    .catch(e => res.status(500).send(e));
});

app.post('/api/students', (req, res) => {
    const student = req.body;
    console.log(student);
    databaseservice.crearstudent(
        student.name,
        student.age,
        student.semester)
    .then(() => {
        res.json({message: "created!"});
    }).catch(e => {
        res.status(500).send(e);
    });
});


app.delete('/api/students/:id',(req, res) => {
    const id= req.params.id;
    console.log(id);
    databaseservice.delstudentById(id)
    .then(resultado => res.json(resultado))
    .catch(e => res.status(500).send(e));
});

app.put('/api/students/:id', (req, res) => {
    const id = req.params.id;
    const name= req.body.name;
    const age= req.body.age;
    const semester= req.body.semester;
    databaseservice.updateStudentById(id,name, age, semester )
    .then(resultado => res.json(resultado))
    .catch(e => res.status(500).send(e));
});


}