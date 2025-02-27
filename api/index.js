import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import BlockchainModel from './models/data.model.js';
import BlockChain from './backend/blockchain.js';

dotenv.config();

const app = express();

// ✅ Enable CORS to fix frontend API request issues
app.use(cors({
  origin: 'https://fancy-bienenstitch-6b08e1.netlify.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// ✅ Middleware to parse JSON requests
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// ✅ Define routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

// ✅ Get all blockchain data
app.get('/api/v1/data', async (req, res) => {
  try {
    const data = await BlockchainModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// ✅ Get blockchain data by GI Tag
app.get('/api/v1/data/:giTag', async (req, res) => {
  try {
    const data = await BlockchainModel.find({ 'gitag.GITagID': req.params.giTag });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ✅ Insert new data into blockchain
app.post('/api/auth/insertdata/:giTag', async (req, res) => {
  try {
    const {
      GITagID, GICreationDate, ProductID, ProductName, AddressOfOrigin,
      OwnershipID, OwnershipStartDate, OwnershipEndDate,
      TransactionID, TransactionDate, UserID, UserName, EmailID, Password, RegistrationDate
    } = req.body;

    const newBlock = new BlockChain();
    newBlock.addGItags(GITagID, GICreationDate);
    newBlock.addProductValues(ProductID, ProductName, AddressOfOrigin);
    newBlock.addOwnership(OwnershipID, OwnershipStartDate, OwnershipEndDate);
    newBlock.addTransactionValues(TransactionID, TransactionDate);
    newBlock.addUserDetails(UserID, UserName, EmailID, Password, RegistrationDate);

    // ✅ Get the last block hash
    const lastBlock = await BlockchainModel.findOne({}, null, { sort: { _id: -1 }, limit: 1 });
    const prevHash = lastBlock ? lastBlock.hash : '';

    await newBlock.addNewBlock(prevHash);

    res.status(201).json({ success: true, message: 'Details entered successfully' });
  } catch (error) {
    console.error('❌ Error inserting data:', error.message);
    res.status(500).json({ success: false, message: 'An error occurred during data insertion.' });
  }
});

// ✅ Get block details based on Product ID
app.get('/api/blockDetails/:productId', async (req, res) => {
  try {
    const productId = parseInt(req.params.productId, 10);
    if (isNaN(productId)) return res.status(400).json({ success: false, message: 'Invalid Product ID' });

    const block = await BlockchainModel.findOne({ 'product.ProductID': productId });
    if (block) {
      res.json({ success: true, blockDetails: block });
    } else {
      res.status(404).json({ success: false, message: 'Product not found' });
    }
  } catch (error) {
    console.error('❌ Error fetching block details:', error);
    res.status(500).json({ success: false, message: 'An error occurred while fetching block details' });
  }
});

// ✅ Global error handling middleware
app.use((err, req, res, next) => {
  console.error('❌ Global Error:', err);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});

// ✅ Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
