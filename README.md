
# MERN Application using GI Tagging and Blockchain for Supply Chain Management

## Overview  

This project integrates Blockchain with Geographical Indication (GI) tagging to create a secure and transparent supply chain system. By leveraging blockchain’s decentralized and immutable ledger, the system ensures traceability and prevents counterfeiting of region-specific products. GI tagging further enhances product authenticity, increasing customer trust and satisfaction. This approach not only strengthens supply chain security but also helps preserve cultural heritage while improving the credibility of retail networks. Below is an overview of the analysis, along with sample outputs and results. This project was done in Dec' 2023.

![Made with JavaScript](https://forthebadge.com/images/badges/made-with-javascript.svg)




## Publication

- This paper was presented in the “2024 International Conference on Computational Intelligence and Computing Applications (ICCICA)”
- Link to the IEEE Publication : https://ieeexplore.ieee.org/abstract/document/10585250


## Demo

Visit the project:
https://mern-blockchain-gitagging.netlify.app/
## Block Diagram

- The below block diagram gives an overview of the overall funtionality of the implemented project
 <p align="center">
  <img src="https://i.postimg.cc/MGD1bjmr/fgd.jpg" alt="App Screenshot" width="500">
</p>


## Features

- **Secure & Transparent Supply Chain**: Integrated Blockchain with GI Tagging to create a tamper-proof and decentralized ledger, ensuring end-to-end traceability of region-specific products.



- **MERN-based Web Application**: Developed a MERN (MongoDB, Express.js, React.js, Node.js) application to manage product data, transactions, and authentication, providing a seamless user experience.

    The database structure as stored in the MongoDB database
   <p align="center">
  <img src="https://i.postimg.cc/Hkyp25HN/Whats-App-Image-2025-02-26-at-22-49-16-259648c9.jpg" alt="App Screenshot" width="500">
    <img src="https://i.postimg.cc/FsgtsZrN/Whats-App-Image-2025-02-26-at-22-44-57-2b786eb1.jpg" alt="App Screenshot" width="300">

</p>



- **QR Code-Based Verification**: Implemented a QR code generation system, allowing users to verify product authenticity by accessing blockchain-validated transaction history.

    The QR code generated is based on the entry made by the user 
     <p align="center">
  <img src="https://i.postimg.cc/d1xCCrJ0/Whats-App-Image-2025-02-26-at-22-50-29-a9900c95.jpg" alt="App Screenshot" width="500">
    <img src="https://i.postimg.cc/mgcY7Ln2/Whats-App-Image-2025-02-26-at-22-51-03-c98f3cbf.jpg" alt="App Screenshot" width="300">

</p>
 <p align="center">
</p>

- **Admin & User Role Management**: Designed a structured control system where Admins manage product data and transactions, while Users can verify product authenticity by searching for product IDs.
 <p align="center">
  <img src="https://i.postimg.cc/ht3WmtHG/Whats-App-Image-2025-02-26-at-22-38-04-23325e85.jpg" alt="App Screenshot" width="500">
</p>
## Tech Stack Used in the Serverless Blogging Platform 

1. Frontend:
- React.js – Built an interactive UI to facilitate product verification and admin control over transactions.

2. Backend & Middleware: 
- Node.js, Express.js – Managed API requests, authentication, and communication between the frontend and database. 
 

3. Database: 
- MongoDB – NoSQL database for storing transaction records, product details, and blockchain data securely.

4. Blockchain Integration:
- Custom Blockchain Model with Proof-of-Work – Implemented a decentralized ledger for immutable product authentication.  

5. Security & Verification:  
- GI Tagging, QR Code Generation – Ensured product authenticity by linking blockchain data to verifiable QR codes.  


##  Installation & Setup


1. Backend Setup (Express.js & MongoDB)


- Install Dependencies
```sh
cd api
npm install
```

- Configure Environment Variables
Create a **`.env`** file in the **`api`** directory and add:
```
MONGO="your mongodb connection string from mongodb atlas"
JWT_SECRET=your_secret_key
```

- Test MongoDB Connection
```sh
mongosh "your mongodb connection string from mongodb atlas"
```
✅ If the connection is **successful**, proceed to the next step.

- Start Backend Server
```sh
cd.. (come to the root directory)
node .\api\index.js  
```
✅ The backend should now be running at http://localhost:5000.


2. Frontend Setup (React.js)

- Install Dependencies
```sh
cd client
npm install
npm install react react-dom react-icons
```

- Configure Environment Variables: Make sure to replace all the render proxy links to your local backend host (Eg: PORT=3000)


- Start Frontend Development Server
```sh
npm run dev
```
✅ The frontend will now be accessible at **http://localhost:5173**.



3. Folder Structure

```
mern-auth/
│── api/               # Backend (Node.js + Express)
│   ├── models/        # MongoDB models
│   ├── routes/        # API routes
│   ├── backend/       # Blockchain logic
│   ├── .env           # Environment variables
│   ├── index.js       # Main server file
│   ├── package.json   # Backend dependencies
│── client/            # Frontend (React.js)
│   ├── src/           # React components & pages
│   ├── .env           # Frontend environment variables
│   ├── package.json   # Frontend dependencies
│── README.md          # Project documentation
```


4. API Endpoints

| **Method** | **Endpoint**                   | **Description** |
|-----------|--------------------------------|---------------|
| **POST**  | `/api/auth/signup`         | Register a new user |
| **POST**  | `/api/auth/signin`         | User login |
| **GET**   | `/api/v1/data`             | Get all blockchain data |
| **GET**   | `/api/v1/data/:giTag`      | Get blockchain data by GI Tag |
| **POST**  | `/api/auth/insertdata/:giTag` | Insert new data into blockchain |



## Testing the Application



```markdown
## 🛠️ Testing Functionality

### 🔹 Sign In as Admin 1
1. Navigate to the website and click on **Sign In** in the navigation bar.
2. Enter the following credentials:
    Email: user4@gmail.com
    Password: user4
   ```
   
   ```
3. Click on the Sign In button.

### 🔹 Admin 1 Functionalities:
- **📂 View Data:** Displays all product details associated with Admin 1 (`user4`).
- **➕ Insert Data:** Allows adding new product records, which will be registered under Admin 1. The inserted data can be viewed on the **View Data** page.
- **📌 Generate QR Code:**  
  - Enter the **GI Tag** of any owned product.
  - A **QR Code** is generated.
  - Scanning the QR Code will display **all details of that specific product**.

---

### 🔹 Sign In as Admin 2
1. Click on **Sign In** and enter the following credentials:
        Email: user5@gmail.com
        Password: user5
   ```
   
   ```
2. Click on the Sign In button.
3. **Follow Steps 3 & 4** from Admin 1's functionalities.

## 📌 Why Are There Two Admin Roles?
The system is designed with a business-oriented approach, considering real-world supply chain use cases:

1️⃣ Admin 1 (Warehouse Owner / Distributor): 
   - Manages multiple product types (e.g., Clothing: Cotton, Silk, etc.).
   - Tracks all products stored in their warehouse using View Data and Insert Data functionalities.
   - Generates QR Codes for product labeling, ensuring authenticity and easy tracking during exports.

2️⃣ Admin 2 (Product Owner / Manufacturer): 
   - Owns a specific product category stored in Admin 1's warehouse (e.g., Cotton but not Silk).
   - Only has access to their own product records.
   - Prevents interference with unrelated products stored in the same warehouse.

This two-tier authentication system ensures:
✔ Better inventory management
✔ Clear distinction between product owners  
✔ Seamless tracking & verification


✅ With this setup, each admin only accesses the data relevant to them, ensuring security, efficiency, and ease of management. 🚀  
```


## Running Tests

The project can be implemented and tested to verify funtionality

