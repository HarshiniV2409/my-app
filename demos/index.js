const express = require("express");
const app = express();
const { MongoClient, ObjectId } = require("mongodb");
app.use(express.json());
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
async function main()
{
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db("MyDB");
    const usersCollection = db.collection("users");
    app.get("/", (req, res) =>
    {
        res.send("Server Running Successfully!");
    });
    app.get("/users", async (req, res) =>
    {
        const users = await usersCollection.find({}).toArray();
        res.json(users);
    });
    app.get("/users/:id", async (req, res) => {
        const id = req.params.id;
        const user = await usersCollection.findOne({ _id:new ObjectId(id)});
        res.json(user);
    });
    app.post("/users", async (req, res) => {
        const result = await usersCollection.insertOne(req.body);
        res.json(result);
    });
    app.put("/users/:id", async (req, res) => {
        const id = req.params.id;
        const result = await usersCollection.updateOne(
            { _id: new ObjectId(id) },
            {
                $set: req.body }
            );
            res.json(result);
});
app.patch("/users/:id", async (req, res) => {
    const id = req.params.id;
    const result = await usersCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: req.body }
    );
    res.json(result);
});
app.delete("/users/:id", async (req, res) => 
{
    const id = req.params.id;
    const result = await usersCollection.deleteOne({ _id: new ObjectId(id) });
    res.json(result);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");

});
}
main().catch(console.error);