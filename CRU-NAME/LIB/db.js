const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB connected successfully.....");
    }
    catch(error) {
        console.log("error while connecting", error);
        process.exit(1);
    }
};

module.exports = connectDB;