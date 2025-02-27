import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import BlockchainModel from './models/data.model.js';
import BlockChain from './backend/blockchain.js';

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());

app.listen(3000,() => {
  console.log('Server is connecting to 3000');
});

app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);

// creating middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});


// viewing data for admin
app.get('/api/v1/data', async (req, res) => {
  try {
    // Fetch data from the database
    const data = await BlockchainModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

//viewdata1
//viewdata1
app.get('/api/v1/data/:giTag', async (req, res) => {
  const giTag = req.params.giTag;

  // Fetch data based on giTag and send it in the response
  try {
    const data = await BlockchainModel.find({ 'gitag.GITagID': giTag });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update the route to handle POST requests
app.post('/api/auth/insertdata/:giTag', async (req, res) => {
  const {
    GITagID,
    GICreationDate,
    ProductID,
    ProductName,
    AddressOfOrigin,
    OwnershipID,
    OwnershipStartDate,
    OwnershipEndDate,
    TransactionID,
    TransactionDate,
    UserID,
    UserName,
    EmailID,
    Password,
    RegistrationDate,
  } = req.body;

  try {
    const newBlock = new BlockChain();
    newBlock.addGItags(GITagID, GICreationDate);
    newBlock.addProductValues(ProductID, ProductName, AddressOfOrigin);
    newBlock.addOwnership(OwnershipID, OwnershipStartDate, OwnershipEndDate);
    newBlock.addTransactionValues(TransactionID, TransactionDate);
    newBlock.addUserDetails(UserID, UserName, EmailID, Password, RegistrationDate);

    // Proceed with the usual validation
    const lastBlock = await BlockchainModel.findOne(
      {},
      null,
      { sort: { _id: -1 }, limit: 1 }
    );
    const prevHash = lastBlock ? lastBlock.hash : "";
    await newBlock.addNewBlock(prevHash);

    res.status(201).json({ message: "Details entered successfully" });
  } catch (error) {
    console.log("Error during data insertion:", error.message);
    res
      .status(500)
      .json({ success: false, message: 'An error occurred during data insertion.' });
  }
});



// API endpoint to get block details based on product ID
// weird thing API endpoint error but blockdata is printed in the search page
app.get('/api/blockDetails/:productId', async (req, res) => {
  try {
    const productId = parseInt(req.params.productId, 10);

    if (isNaN(productId)) {
      res.json({ success: false, message: 'Invalid Product ID' });
      return;
    }

    const block = await BlockchainModel.findOne({ 'product.ProductID': productId });

    if (block) {
      res.json({ success: true, blockDetails: block });
    } else {
      res.json({ success: false, message: 'Product not found' });
    }
  } catch (error) {
    console.error('Error fetching block details:', error);
    res.json({ success: false, message: 'An error occurred while fetching block details' });
  }
});

// QR Code
