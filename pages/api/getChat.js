

import { MongoClient } from 'mongodb' 


export default function saveChat(req, res) {


// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://root:example@0.0.0.0:6666";

// create mongo connection client
const client = new MongoClient(uri);



async function run() {
  try {
    // select db
    const database = client.db("courses");
    // select collection
    const col = database.collection("chats");


    const result = await database.collection("chats").find({}).toArray();
    console.log(`MONGO DB QUERY SENT`);
    console.log(result)
    console.log(typeof result)
    console.log("*****")
    res.send(result);
  } finally {
    await client.close();
  }
}


run().catch(console.dir);



   // return back the records
   // res.status(200).json(result);


      
      
      

}

