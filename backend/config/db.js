const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        //Might have to go back and add dotenv and a env file, not sure
        const conn = await mongoose.connect(process.env.MONGO_URI,  { 
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
         });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit();
    }

};

module.exports = connectDB;
