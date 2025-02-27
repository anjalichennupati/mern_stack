import express from 'express';
import QRCode from 'qrcode';
import BlockchainModel from '../models/data.model.js';

const router = express.Router();

const generateQR = async (req, res) => {
    const giTagID = req.params.giTagID;

    try {
        const blocks = await BlockchainModel.find({ 'gitag.GITagID': giTagID });

        if (blocks.length === 0) {
            return res.status(404).json({ success: false, message: 'No blocks found for the specified GI Tag ID' });
        }

        const blockInfoArray = blocks.map((block) => {
            const productsArray = block.product.map((product) => ({
                ProductID: product.ProductID,
                ProductName: product.ProductName,
                AddressOfOrigin: product.AddressOfOrigin,
            }));

            const transactionsArray = block.transactiondetails.map((transaction) => ({
                TransactionID: transaction.TransactionID,
                TransactionDate: transaction.TransactionDate,
            }));

            return {
                GITagID: block.gitag[0].GITagID,
                GICreationDate: block.gitag[0].GICreationDate,
                Products: productsArray,
                Transactions: transactionsArray,
            };
        });

        // Log the retrieved block data for debugging
        console.log('Retrieved Block Data:', blockInfoArray);

        // Generate the QR code
        const blockInfoString = JSON.stringify(blockInfoArray);
        const qrCodeImage = await QRCode.toDataURL(blockInfoString);

        // Return the QR code image
        res.json({ success: true, qrCode: qrCodeImage });
    } catch (error) {
        console.error('Error generating QR code:', error);
        res.status(500).json({ success: false, message: 'An error occurred while generating the QR code' });
    }

    // Inside generateQR function in generateqr.js
    const blockToUpdate = await BlockchainModel.findOne({ 'gitag.GITagID': giTagID }, null, { sort: { _id: -1 }, limit: 1 });

    if (blockToUpdate) {
    blockToUpdate.qrCodeGenerated = true;
    await blockToUpdate.save();
    }

};

router.get('/:giTagID', generateQR);

export default router;