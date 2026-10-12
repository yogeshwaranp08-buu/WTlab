
const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.static(__dirname));

const url = "mongodb+srv://yogesh:yogesh@demo.guun7st.mongodb.net/?appName=demo";
const client = new MongoClient(url);

let collection;

async function start() {
    await client.connect();

    const db = client.db("modellab");
    collection = db.collection("records");

    app.listen(3000, () => {
        console.log("Server running at http://localhost:3000");
    });
}

// CREATE: Add a record
app.post("/add", async (req, res) => {
    await collection.insertOne(req.body);
    res.send("Record added successfully");
});

// READ: Display all records
app.get("/view", async (req, res) => {
    const data = await collection.find().toArray();
    res.json(data);
});

// UPDATE: Update a record
app.put("/update/:id", async (req, res) => {
    await collection.updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: req.body }
    );
    res.send("Record updated successfully");
});

// DELETE: Delete a record
app.delete("/delete/:id", async (req, res) => {
    await collection.deleteOne({
        _id: new ObjectId(req.params.id)
    });
    res.send("Record deleted successfully");
});

start().catch(console.error);
