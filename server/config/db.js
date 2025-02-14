const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }catch(error){
        console.error('Error connecting to MongoDB');
        console.error(error);
    }
}

module.exports = connectDB;