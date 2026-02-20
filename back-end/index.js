const express = require('express');
require('dotenv').config();
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
const port = process.env.PORT || 8000;

// middleware
app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://mdmoniruzzamanarafat_db_user:${process.env.DB_PASSWORD}@cluster0.cvx7qwv.mongodb.net/?appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // // Send a ping to confirm a successful connection
    // console.log(
    //   'Pinged your deployment. You successfully connected to MongoDB!'
    // );

    const database = client.db('tourism_app');
    const tourismSpots = database.collection('tourismSpots');

    // api
    // get
    app.get('/tours', async (req, res) => {
      try {
        const tours = await tourismSpots.find().toArray();
        res.status(200).json({ status: 'success', total: tours.length, tours });
      } catch (error) {
        res.status(500).json({ status: 'fail', message: error.message });
      }
    });
    // getOne
    app.get('/tours/:id', async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const tours = await tourismSpots.findOne(query);
        res.status(200).json({ status: 'success', total: tours.length, tours });
      } catch (error) {
        res.status(500).json({ status: 'fail', message: error.message });
      }
    });
    // create
    app.post('/tours', async (req, res) => {
      try {
        const tour = await tourismSpots.insertOne(req.body);
        res.status(201).json({
          status: 'success',
          tour,
        });
      } catch (error) {
        res.status(500).json({
          status: 'error',
          message: error.message,
        });
      }
    });

    // update
    app.patch('/tours/:id', async (req, res) => {
      try {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const options = { upsert: true };
        const updateDoc = {
          $set: req.body,
        };
        const result = await tourismSpots.updateOne(filter, updateDoc, options);
        if (result) {
          res.status(200).json({
            status: 'success',
            result,
          });
        }
      } catch (error) {
        res.status(500).json({
          status: 'error',
          message: error.message,
        });
      }
    });
    // delete
    app.delete('/tours/:id', async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await tourismSpots.deleteOne(query);

        if (result.deletedCount === 1) {
          res.status(200).json({
            status: 'success',
          });
        }
      } catch (error) {
        res.status(500).json({
          status: 'error',
          message: error.message,
        });
      }
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.status(200).json({ status: 'success', message: 'API SERVER IS RUNNING' });
});

app.listen(port, () => {
  console.log(`server is running port: ${port}`);
});
