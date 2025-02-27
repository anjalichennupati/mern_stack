import React, { useState } from 'react';
import axios from 'axios';
import { AiOutlineSearch } from 'react-icons/ai';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import giim from '../assets/giim.png';
import productim from '../assets/productim.png';
import transim from '../assets/transim.png';
import ownerim from '../assets/ownerim.png';
import userim from '../assets/userim.png';


export default function SearchData() {
  const [productId, setProductId] = useState('');
  const [blockDetails, setBlockDetails] = useState({});
  const [error, setError] = useState('');

  const settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerPadding: '20px', // Add centerPadding to set the space between slides
  };

  const handleSearch = async () => {
    if (!productId) {
      setError('Product ID cannot be empty');
      setBlockDetails({});
      return;
    }

    try {
      const response = await axios.get(`/api/blockDetails/${productId}`);
      if (response.data.success) {
        setBlockDetails(response.data.blockDetails);
        console.log('Fetched Block Details:', response.data.blockDetails);
        setError('');
      } else {
        setBlockDetails({});
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setBlockDetails({});
      setError('An error occurred while fetching data.');
    }
  };

  return (
    <section className="bg-[#d9d9d9] min-h-screen flex justify-center">
      <div className="container mx-auto my-10 p-8 bg-[#355070] rounded-lg shadow-md h-[750px] mt-4">
        <h1 className="text-3xl font-semibold mb-8 text-center text-white">Product Search</h1>

        <div className="relative text-white text-center">
          <label className="text-[#fdf0d5] ">Enter Product ID:</label>
          <div className="flex items-center justify-center">
            <input
              type="text"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              className="w-23 p-4 rounded-full bg-slate-800 text-white"
            />
            <button
              onClick={handleSearch}
              className="absolute right-80 p-3.5 bg-slate-600 rounded-full"
            >
              <AiOutlineSearch />
            </button>
          </div>
        </div>

        {blockDetails && (
          <div className="mt-8 flex items-center justify-center">
            <div className="w-[58%] h-[520px] bg-[#dee2e6] rounded-xl">
              <Slider {...settings}>
                <div>
                <img
                    src={giim} // Replace with the path to your image
                    alt="Slider Image 1"
                    className="h-[300px] w-[100%] rounded-[15px] mt-3"
                  />
                  <h3 className="text-xl font-semibold mt-4 font-poppins">GI Tags:</h3>
                  {blockDetails.gitag &&
                    blockDetails.gitag.map((tag, index) => (
                      <div key={index}>
                        <p>GITagID: {tag.GITagID}</p>
                        <p>GICreationDate: {tag.GICreationDate}</p>
                      </div>
                    ))}
                </div>

                <div>
                <img
                    src={productim} // Replace with the path to your image
                    alt="Slider Image 1"
                    className="h-[300px] w-[100%] rounded-[15px] mt-3"
                  />
                  <h3 className="text-xl font-semibold mt-4 font-poppins">Products:</h3>
                  {blockDetails.product &&
                    blockDetails.product.map((product, index) => (
                      <div key={index}>
                        <p>ProductID: {product.ProductID}</p>
                        <p>ProductName: {product.ProductName}</p>
                        <p>AddressOfOrigin: {product.AddressOfOrigin}</p>
                      </div>
                    ))}
                </div>

                <div>
                <img
                    src={ownerim} // Replace with the path to your image
                    alt="Slider Image 1"
                    className="h-[300px] w-[100%] rounded-[15px] mt-3"
                  />
                  <h3 className="text-xl font-semibold mt-4 font-poppins">Ownership Details:</h3>
                  {blockDetails.ownership &&
                    blockDetails.ownership.map((ownership, index) => (
                      <div key={index}>
                        <p>OwnershipID: {ownership.OwnershipID}</p>
                        <p>OwnershipStartDate: {ownership.OwnershipStartDate}</p>
                        <p>OwnershipEndDate: {ownership.OwnershipEndDate}</p>
                      </div>
                    ))}
                </div>

                <div>
                <img
                    src={transim} // Replace with the path to your image
                    alt="Slider Image 1"
                    className="h-[300px] w-[100%] rounded-[15px] mt-3"
                  />
                  <h3 className="text-xl font-semibold mt-4 font-poppins">Transaction Details:</h3>
                  {blockDetails.transactiondetails &&
                    blockDetails.transactiondetails.map((transaction, index) => (
                      <div key={index}>
                        <p>TransactionID: {transaction.TransactionID}</p>
                        <p>TransactionDate: {transaction.TransactionDate}</p>
                      </div>
                    ))}
                </div>

                <div>
                <img
                    src={userim} // Replace with the path to your image
                    alt="Slider Image 1"
                    className="h-[300px] w-[100%] rounded-[15px] mt-3"
                  />
                  <h3 className="text-xl font-semibold mt-4 font-poppins">User Details:</h3>
                  {blockDetails.userdetails &&
                    blockDetails.userdetails.map((user, index) => (
                      <div key={index}>
                        <p>UserID: {user.UserID}</p>
                        <p>UserName: {user.UserName}</p>
                        <p>EmailID: {user.EmailID}</p>
                        <p>Password: {user.Password}</p>
                        <p>RegistrationDate: {user.RegistrationDate}</p>
                      </div>
                    ))}
                </div>
              </Slider>
            </div>
          </div>
        )}

        {error && <div className="text-red-500 mt-4">{error}</div>}
      </div>
    </section>
  );
}
