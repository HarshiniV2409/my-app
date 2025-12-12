const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/MyDB")
    .then(() => console.log("MongoDB Connected!"))
    .catch(err => console.log(err));

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String
});

const Student = mongoose.model("Student", studentSchema);

async function createStudent() {
    const s=new Student({
        name: "Mickey",
        age: 22,
        course: "Java Full Stack"
    });
    const result = await s.save();
    console.log("Inserted:", result);
}

createStudent();