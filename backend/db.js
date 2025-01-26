const mongoose = require('mongoose');
require('dotenv').config();


// Replace <username>, <password>, and <cluster-url> with your actual MongoDB Atlas info
const mongoURI = 'mongodb+srv://Madiha:internship123@cluster0.teuby.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
