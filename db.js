const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://girdharagrawalbro:AbnlKNTT3ReFQLZm@cluster0.czsb19m.mongodb.net/skills?retryWrites=true&w=majority&appName=Cluster0";
const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB successfully');
  } catch (err) {
    console.error(err);
  }
};
module.exports = connectToMongo;