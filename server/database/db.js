import mongoose from 'mongoose';

 const Connection = async (username, password) =>{

     const URL =`mongodb://${username}:${password}@ac-lzzeodi-shard-00-00.uudyrd7.mongodb.net:27017,ac-lzzeodi-shard-00-01.uudyrd7.mongodb.net:27017,ac-lzzeodi-shard-00-02.uudyrd7.mongodb.net:27017/FLIPKARTECM?ssl=true&replicaSet=atlas-ty2otn-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
     await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log(`Database connected successfully`);
    } catch (error) {
        console.log(`error while connecting with database`, error.message);
    }

}

export default Connection;
