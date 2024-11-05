import {config} from 'dotenv';
config();
import {CrudSystemaddStudent,deleteCrudSystemaddStudent,findCrudSystemaddStudent,getsingleStudent} from './src/StudentsCrud.js'
//CrudSystemaddStudent();
const uri=process.env.db_URI;
import express from 'express';
const app=express();
const PORT = process.env.PORT || 3030;
app.use(express.json());
//app.use('view engine','ejs')
//console.log(process.env.db_URI)

app.get('/addStudent',(req,res)=>{
   console.log(req.body);
   res.send('ok');
})

app.post('/addStudent',async(req,res)=>{
    //console.log(req.body);
    await CrudSystemaddStudent(req.body)
     res.send('ok')
})

app.delete('/deleteStudent',async(req,res)=>{
   await deleteCrudSystemaddStudent(req.body.id)
   res.send("it's deleted !!!!")
})


app.get('/getAllStudent',async(req,res)=>{
   let data=await findCrudSystemaddStudent()
   console.log(data)
   res.send("it's done")
})

app.get('/getsingleStudent',async(req,res)=>{
   let data=await getsingleStudent(req.body.name)
   console.log(data)
   res.send(data)
})
app.listen(PORT);