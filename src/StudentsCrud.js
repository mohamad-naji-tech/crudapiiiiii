import {MongoClient} from "mongodb"
let s;
export async function connecttodb(uri){
 try {
    s=new MongoClient(uri);
    await s.connect();
    console.log('connection to mongodb is sucessed !!!!')
    return s
    
 } catch (error) {
    console.log('problem with the connection ')
 }  
 }

 export async function CrudSystemaddStudent(obj){
      let h;
    try {
    h=await connecttodb(process.env.db_URI);  
     const db=h.db('school');
    const collection=db.collection('Students');
    await collection.insertOne(obj);
   } catch (error) {
    console.log('error while inserting an object ')
   }
     finally{
      h.close();
      console.log('this code will be execute in all the way')
     }   
   }


   export async function deleteCrudSystemaddStudent(id){
      let h;
    try {
    h=await connecttodb(process.env.db_URI);  
     const db=h.db('school');
    const collection=db.collection('Students');
      await collection.deleteOne({id})

   } catch (error) {
    console.log('error while deleting an object ')
   }
     finally{
      h.close();
      console.log('this code will be execute in all the way')
     }   
   }

   export async function findCrudSystemaddStudent(){
      let h;
    try {
    h=await connecttodb(process.env.db_URI);  
     const db=h.db('school');
    const collection=db.collection('Students');
     let s= await collection.find().toArray();
     return s

   } catch (error) {
    console.log('error while deleting an object ')
   }
     finally{
      h.close();
      console.log('this code will be execute in all the way')
     }   
   }

   export async function  getsingleStudent(name){
    let h;
  try {
  h=await connecttodb(process.env.db_URI);  
   const db=h.db('school');
  const collection=db.collection('Students');
   let s= await collection.findOne({name}).toArray();
   return s

 } catch (error) {
  console.log('error while deleting an object ')
 }
   finally{
    h.close();
    console.log('this code will be execute in all the way')
   }   
 }



