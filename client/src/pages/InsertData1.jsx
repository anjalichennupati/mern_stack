import { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function InsertData() {
  const { giTag } = useParams();

  const [productData, setproductData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setproductData({ ...productData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      console.log('Request Data:', productData);

      const res = await fetch(`/api/auth/insertdata/${giTag}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });
      
      // Check if the response is in JSON format
      const data = await res.json();
      
      console.log(data);
      setLoading(false);
      if (data.success === false) {
        setError(true);
        setSuccessMessage('');
      } else {
        setError(false);
        setSuccessMessage('Data inserted into the database!');
        // You can navigate to another page or handle success in any other way.
        // For example, you can uncomment the line below to navigate to a specific page.
        // navigate('/success-page');
      }
    } catch (error) {
      setLoading(false);
      setError(true);
      setSuccessMessage('');
    }
  };

  return (
   <section className="bg-[#0d1b2a] min-h-screen flex items-center justify-center">
    <div className="bg-[#f5ebe0] flex rounded-2xl shadow-lg max-w-full p-5 items-center">
    <div className='p-3 max-w-full mx-auto'>
        <h1 className='font-poppins text-3xl text-center font-semibold my-7'>Insert Data</h1>
        <label htmlFor="gitag">
          <h2>GI Tag:{giTag}</h2></label>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
          <div className="flex gap-2">
          <input
            type='text'
            id='GITagID'
            className='bg-slate-100 p-1 rounded-lg'
            style={{ paddingLeft: '10px' }}
            value={giTag}
            readOnly // Make the input read-only
            // onChange={handleChange}
          />
          <input
            type='date'
            placeholder='GI Tag Creation Date'
            id='GICreationDate'
            className='bg-slate-100 p-1 rounded-lg'
            style={{ paddingLeft: '10px' }}
            onChange={handleChange}
          />
          </div>
          <div className="flex gap-2">
        <input
          type='number'
          placeholder='Product ID'
          id='ProductID'
          className='bg-slate-100 p-1 rounded-lg'
          style={{ paddingLeft: '10px' }}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Product Name'
          id='ProductName'
          className='bg-slate-100 p-1 rounded-lg'
          style={{ paddingLeft: '10px' }}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Address of Origin'
          id='AddressOfOrigin'
          className='bg-slate-100 p-1 rounded-lg'
          style={{ paddingLeft: '10px' }}
          onChange={handleChange}
        />
        </div>
        <div className="flex gap-2">
        <input
          type='text'
          placeholder='Ownership ID'
          id='OwnershipID'
          className='bg-slate-100 p-1 rounded-lg'
          style={{ paddingLeft: '10px' }}
          onChange={handleChange}
        />
        <input
          type='date'
          placeholder='Ownership Start Date'
          id='OwnershipStartDate'
          className='bg-slate-100 p-1 rounded-lg'
          style={{ paddingLeft: '10px' }}
          onChange={handleChange}
        />
        <input
          type='date'
          placeholder='Ownership End Date'
          id='OwnershipEndDate'
          className='bg-slate-100 p-1 rounded-lg'
          style={{ paddingLeft: '10px' }}
          onChange={handleChange}
        />
        </div>
        <div className="flex gap-2">
        <input
          type='number'
          placeholder='Transaction ID'
          id='TransactionID'
          className='bg-slate-100 p-1 rounded-lg'
          style={{ paddingLeft: '10px' }}
          onChange={handleChange}
        />
        <input
          type='date'
          placeholder='Transaction Date'
          id='TransactionDate'
          className='bg-slate-100 p-1 rounded-lg'
          style={{ paddingLeft: '10px' }}
          onChange={handleChange}
        />
        </div>
        <input
          type='text'
          placeholder='User ID'
          id='UserID'
          className='bg-slate-100 p-1 rounded-lg'
          style={{ paddingLeft: '10px' }}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='User Name'
          id='UserName'
          className='bg-slate-100 p-1 rounded-lg'
          style={{ paddingLeft: '10px' }}
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='Email ID'
          id='EmailID'
          className='bg-slate-100 p-1 rounded-lg'
          style={{ paddingLeft: '10px' }}
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Password'
          id='Password'
          className='bg-slate-100 p-1 rounded-lg'
          style={{ paddingLeft: '10px' }}
          onChange={handleChange}
        />
        <input
          type='date'
          placeholder='Registration Date'
          id='RegistrationDate'
          className='bg-slate-100 p-1 rounded-lg'
          style={{ paddingLeft: '10px' }}
          onChange={handleChange}
        />
        <button className='bg-[#284b63] text-white p-3 rounded-full uppercase mt-6'>
          {loading ? 'Loading...' : 'Insert Data'}        </button>
      </form>
      {error && <p className="text-[#9a031e] mt-2">Error inserting data. Please try again.</p>}
          {successMessage && <p className="text-[#3c6e71] mt-2">{successMessage}</p>}
    </div>
    </div>
    </section>
  );
}