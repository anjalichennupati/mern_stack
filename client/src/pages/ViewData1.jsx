import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import backgroundImage from '../assets/viewwall.png';

function ViewData1() {
  const { giTag } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/v1/data/${giTag}`);
        setData(response.data);
        console.log('Data from API:', response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [giTag]);

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section className="bg-[#d9d9d9] min-h-screen flex items-center justify-center" style={backgroundImageStyle}>
      <div className="container mx-auto my-1 p-8 bg-[#1b263b] rounded-xl shadow-md border border-white" style={{ marginTop: '-95px' }}>
        <h1 className='text-white text-3xl text-center font-semibold my-5'>View Data from Database for <br/> "{giTag}"</h1>
        <div className='overflow-x-auto h-full'>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <table className="table-auto w-full border-collapse border border-white rounded">
              <thead>
                <tr className="bg-[#274c77] font-poppins">
                  <th className="p-3 text-white" style={{ padding: '0 1rem', borderColor: '#1d3557' }}>GI Tag ID</th>
                  <th className="p-3 text-white" style={{ borderColor: '#1d3557' }}>GI Tag Creation Date</th>
                  <th className="p-3 text-white" style={{ padding: '0 2rem', borderColor: '#1d3557' }}>Product ID</th>
                  <th className="p-3 text-white" style={{ padding: '0 1rem', borderColor: '#1d3557' }}>Product Name</th>
                  <th className="p-3 text-white" colSpan={2} style={{ padding: '0 1rem', borderColor: '#1d3557' }}>Address of Origin</th>
                  <th className="p-3 text-white" style={{ padding: '0 1rem', borderColor: '#1d3557' }}>Ownership ID</th>
                  <th className="p-3 text-white" style={{ borderColor: '#1d3557' }}>Ownership Start Date</th>
                  <th className="p-3 text-white" style={{ padding: '0 2rem', borderColor: '#1d3557' }}>Ownership End Date</th>
                  <th className="p-3 text-white" style={{ padding: '0 1rem', borderColor: '#1d3557' }}>Transaction ID</th>
                  <th className="p-3 text-white" style={{ borderColor: '#1d3557' }}>Transaction Date</th>
                  <th className="p-3 text-white" style={{ borderColor: '#1d3557' }}>User ID</th>
                  <th className="p-3 text-white" style={{ borderColor: '#1d3557' }}>User Name</th>
                  <th className="p-3 text-white" style={{ borderColor: '#1d3557' }}>Email</th>
                  <th className="p-3 text-white" style={{ borderColor: '#1d3557' }}>Password</th>
                  <th className="p-3 text-white" style={{ borderColor: '#1d3557' }}>Registration Date</th>
                </tr>
              </thead>
              <tbody style={{ maxHeight: '5rem', overflowY: 'auto' }}>
                {data.map((item, index) => (
                  <tr key={index} className={`border-t border-gray-300 ${index % 2 === 0 ? 'bg-[#1b263b]' : 'bg-[#1d3557]'}`}>
                    <td className="p-3 text-center text-white" style={{ borderColor: '#1d3557' }}>{item.gitag[0]?.GITagID}</td>
                    <td className="p-3 text-center text-white" style={{ borderColor: '#1d3557' }}>{item.gitag[0]?.GICreationDate}</td>
                    <td className="p-3 text-center text-white" style={{ padding: '0 2rem', borderColor: '#1d3557' }}>{item.product[0]?.ProductID}</td>
                    <td className="p-3 text-center text-white" style={{ padding: '0 1rem', borderColor: '#1d3557' }}>{item.product[0]?.ProductName}</td>
                    <td className="p-3 text-center text-white" colSpan={2} style={{ padding: '0 2rem', borderColor: '#1d3557' }}>{item.product[0]?.AddressOfOrigin}</td>
                    <td className="p-3 text-center text-white" style={{ padding: '0 1rem', borderColor: '#1d3557' }}>{item.ownership[0]?.OwnershipID}</td>
                    <td className="p-3 text-center text-white" style={{ borderColor: '#1d3557' }}>{item.ownership[0]?.OwnershipStartDate}</td>
                    <td className="p-3 text-center text-white" style={{ borderColor: '#1d3557' }}>{item.ownership[0]?.OwnershipEndDate}</td>
                    <td className="p-3 text-center text-white" style={{ padding: '0 1rem', borderColor: '#1d3557' }}>{item.transactiondetails[0]?.TransactionID}</td>
                    <td className="p-3 text-center text-white" style={{ borderColor: '#1d3557' }}>{item.transactiondetails[0]?.TransactionDate}</td>
                    <td className="p-3 text-center text-white" style={{ borderColor: '#1d3557' }}>{item.userdetails[0]?.UserID}</td>
                    <td className="p-3 text-center text-white" style={{ borderColor: '#1d3557' }}>{item.userdetails[0]?.UserName}</td>
                    <td className="p-3 text-center text-white" style={{ borderColor: '#1d3557' }}>{item.userdetails[0]?.EmailID}</td>
                    <td className="p-3 text-center text-white" style={{ borderColor: '#1d3557' }}>{item.userdetails[0]?.Password}</td>
                    <td className="p-3 text-center text-white" style={{ borderColor: '#1d3557' }}>{item.userdetails[0]?.RegistrationDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </section>
  );
}

export default ViewData1;
