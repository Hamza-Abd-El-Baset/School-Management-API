const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost/school-management-db';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

// Function to close the MongoDB connection
const closeDB = async () => {
    try {
        await mongoose.connection.close();
        console.log('MongoDB Connection Closed');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = { connectDB, closeDB };