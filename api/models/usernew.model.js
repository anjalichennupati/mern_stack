// Import necessary libraries
import mongoose from 'mongoose';

// Define the user schema
const usernewSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    
    password: {
      type: String,
      required: true,
    },
    giTag: { // Add a new field for GI Tag
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Create the UserNew model
const UserNew = mongoose.model('UserNew', usernewSchema);

// Export the model
export default UserNew;
