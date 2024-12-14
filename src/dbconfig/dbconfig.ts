import mongoose, { mongo } from 'mongoose';

export async function createConnection() {
  try{
      mongoose.connect(process.env.MONGO_URI!);
      const connection = mongoose.connection;
      connection.on('connected', ()=>{
        console.log('Connected to MongoDB');
      })
      connection.on('error', ()=>{
        console.log('Error connecting to MongoDB');
        process.exit(1);
      })
  }
  catch(e){
    console.log(e);
  }
}
export default createConnection;
