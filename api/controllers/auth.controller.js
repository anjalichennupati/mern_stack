import User from '../models/user.model.js';
import UserNew from '../models/usernew.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';
import BlockchainModel from '../models/data.model.js';
import BlockChain from '../backend/blockchain.js';
// import QRCode from 'qrcode';


export const signup =async (req,res,next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({ username, email, password: hashedPassword});
    try {
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
      } catch (error) {
        next(error);
      }
};

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const validUser = await User.findOne({ email });
      if (!validUser) return next(errorHandler(404, 'User not found'));
      const validPassword = bcryptjs.compareSync(password, validUser.password);
      if (!validPassword) return next(errorHandler(401, 'wrong credentials'));
      const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
      res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json(validUser);
    } catch (error) {
      next(error);
    }
};

//admin 1 
export const signupa1 = async (req, res, next) => {
  const { email, password, giTag } = req.body;

  // Check if the entered giTag exists in the blockchain database
  try {
    const block = await BlockchainModel.findOne({ 'gitag.GITagID': giTag });

    if (!block) {
      return res.status(400).json({ success: false, message: 'Invalid GI Tag. Please enter a valid GI Tag.' });
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new UserNew({ email, password: hashedPassword, giTag });

    try {
      await newUser.save();
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      next(error);
    }
  } catch (error) {
    console.error('Error checking GI Tag:', error);
    res.status(500).json({ success: false, message: 'An error occurred while checking the GI Tag' });
  }
};

export const signina1 = async (req, res, next) => {
  const { email, password, giTag } = req.body;
  try {
    const validUser = await UserNew.findOne({ email });
    if (!validUser) return next(errorHandler(404, 'User not found'));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, 'wrong credentials'));
    const validgiTag = await UserNew.findOne({ giTag });
    if (!validgiTag) return next(errorHandler(404, 'GI Tag not found'));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json(validUser);
  } catch (error) {
    next(error);
  }
};


// Assuming you have the necessary imports for BlockchainModel and BlockChain

export const insertdata = async (req, res) => {
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
    // Find the blockchain data for the given GI tag
    const existingBlock = await BlockchainModel.findOne({ 'gitag.GITagID': GITagID });

    // If no existing block is found, the blockchain is empty, add the block without checking
    if (!existingBlock) {
      const newBlock = new BlockChain();
      newBlock.addGItags(GITagID, GICreationDate);
      newBlock.addProductValues(ProductID, ProductName, AddressOfOrigin);
      newBlock.addOwnership(OwnershipID, OwnershipStartDate, OwnershipEndDate);
      newBlock.addTransactionValues(TransactionID, TransactionDate);
      newBlock.addUserDetails(UserID, UserName, EmailID, Password, RegistrationDate);

      await newBlock.addNewBlock();
      res.status(201).json({ message: 'Details entered successfully' });
      return;
    } else{
      // console.log('HI');
      const lastBlockForGITag = await BlockchainModel.findOne({ 'gitag.GITagID': GITagID }, null, { sort: { _id: -1 }, limit: 1 });
      // const qrgenerated = lastBlockForGITag.qrgenerated;
      // Log the entire lastBlockForGITag object for debugging
      console.log('lastBlockForGITag:', lastBlockForGITag);

      // Ensure that qrgenerated is correctly accessed based on the structure of lastBlockForGITag
      const qrgenerated = lastBlockForGITag?.qrCodeGenerated;
      console.log(qrgenerated);

      // If qrgenerated is true, reject new entries
    if (qrgenerated==true) {
      return res.status(400).json({ success: false, message: 'QR code already generated. No more entries allowed.' });
    }
    else{
      // console.log('hello');
      const newBlock = new BlockChain();
      newBlock.addGItags(GITagID, GICreationDate);
      newBlock.addProductValues(ProductID, ProductName, AddressOfOrigin);
      newBlock.addOwnership(OwnershipID, OwnershipStartDate, OwnershipEndDate);
      newBlock.addTransactionValues(TransactionID, TransactionDate);
      newBlock.addUserDetails(UserID, UserName, EmailID, Password, RegistrationDate);
  
      try {
        // console.log("Heyy");
        const lastBlock = await BlockchainModel.findOne({}, null, { sort: { _id: -1 }, limit: 1 });
        const prevHash = lastBlock ? lastBlock.hash : "";
        await newBlock.addNewBlock(prevHash);
        res.status(201).json({ message: "Details entered successfully new" });
        return;
      } catch (error) {
        console.log("Cannot save block to database", error.message);
        throw error;
    }
  }
    }
  
  } catch (error) {
    console.log('Error during data insertion:', error.message);
    res.status(500).json({ success: false, message: 'An error occurred during data insertion.' });
    return;
  }
};


// admin-1 insert data

// export const insertdata1 = async (req, res) => {
//   const { GITagID, GICreationDate, ProductID, ProductName, AddressOfOrigin, OwnershipID, OwnershipStartDate, OwnershipEndDate, TransactionID, TransactionDate, UserID, UserName, EmailID, Password, RegistrationDate } = req.body;

//   const newBlock = new BlockChain();
//   newBlock.addGItags(GITagID, GICreationDate);
//   newBlock.addProductValues(ProductID, ProductName, AddressOfOrigin);
//   newBlock.addOwnership(OwnershipID, OwnershipStartDate, OwnershipEndDate);
//   newBlock.addTransactionValues(TransactionID, TransactionDate);
//   newBlock.addUserDetails(UserID, UserName, EmailID, Password, RegistrationDate);

//   try {
//     const lastBlock = await BlockchainModel.findOne({}, null, { sort: { _id: -1 }, limit: 1 });
//     const prevHash = lastBlock ? lastBlock.hash : "";
//     await newBlock.addNewBlock(prevHash);
//     res.status(201).json({ message: "Details entered successfully" });
//   } catch (error) {
//     console.log("Cannot save block to database", error.message);
//     throw error;
//   }
// };

// QR Code generation 
// export const generateQR = async (req, res) => {
//   const giTagID = req.params.giTagID;
//   console.log('Received GI Tag ID:', giTagID);

//   // Query the database to get blocks with the specified GI Tag ID
//   try {
//       const blocks = await BlockchainModel.find({ 'gitag.GITagID': giTagID });

//       if (blocks.length === 0) {
//           return res.status(404).json({ success: false, message: 'No blocks found for the specified GI Tag ID' });
//       }

//       // Construct a string containing block information
//       const blockInfoString = blocks.map(block => `${block.product.ProductName} - ${block.transactiondetails.TransactionID}`).join('\n');

//       // Generate the QR code
//       const qrCodeImage = await QRCode.toDataURL(blockInfoString);

//       // Return the QR code image
//       res.json({ success: true, qrCode: qrCodeImage });
//   } catch (error) {
//       console.error('Error generating QR code:', error);
//       res.status(500).json({ success: false, message: 'An error occurred while generating the QR code' });
//   }
// };
