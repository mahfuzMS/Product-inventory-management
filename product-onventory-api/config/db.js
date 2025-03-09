const mongoose = require("mongoose");

const MONGO_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@assignmentcluster.zdz8b.mongodb.net/?retryWrites=true&w=majority&appName=AssignmentCluster"`;

const connectDB = async () => {
    try {
        // await mongoose.connect(process.env.MONGO_URI, {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
