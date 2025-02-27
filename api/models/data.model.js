import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BlockchainSchema = new Schema(
    {
        index: {
            required: true,
            type: Schema.Types.Number,
        },
        timestamp: {
            required: true,
            type: Schema.Types.Date,
            default: Date.now(),
        },
        prevHash: {
            required: false,
            type: Schema.Types.String,
        },
        hash: {
            required: true,
            type: Schema.Types.String,
        },
        
        gitag: [{
            GITagID: { type: String, required: true },
            GICreationDate: { type: Date, required: true },
        }],
    
        product: {
            required: true,
            type: [{ ProductID: Schema.Types.Number, ProductName: Schema.Types.String, AddressOfOrigin: Schema.Types.String }],
        },
    
        ownership: {
            required: true,
            type: [{ OwnershipID: Schema.Types.String, OwnershipStartDate: Schema.Types.Date, OwnershipEndDate: Schema.Types.Date }],
        },
    
        transactiondetails: {
            required: true,
            type: [{ TransactionID: Schema.Types.Number, TransactionDate: Schema.Types.Date }],
        },
    
        userdetails: {
            required: true,
            type: [{ UserID: Schema.Types.String, UserName: Schema.Types.String,  EmailID: Schema.Types.String, Password: Schema.Types.String, RegistrationDate: Schema.Types.Date }],
        },
        qrCodeGenerated: {
            type: Schema.Types.Boolean,
            default: false,
        },
    },
);

const BlockchainModel = mongoose.model('BlockchainModel', BlockchainSchema);

export default BlockchainModel;
