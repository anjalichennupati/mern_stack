import { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import signina1 from '../assets/signina1.png'; // Adjust the path accordingly

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signina1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      // Extract giTag value from the entered data
      const { giTag } = formData;

      // Navigate to Details1 after successful sign-in
      navigate(`/details1/${giTag}`);

      // Inside the handleSubmit function after navigate('/details1');
      // Navigate to ViewData1 for the specific giTag
      //navigate(`/viewdata1/${giTag}`);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  return (
    
    <section className="bg-[#0d1b2a] min-h-screen flex items-center justify-center">
      {/* login container */}
      <div className="bg-[#f5ebe0] flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        {/* form */}
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-semibold font-poppins ss:text-[40px] text-[#000000]">Sign In</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input className="p-2 mt-8 rounded-xl border" type="email" id="email" placeholder="Email" onChange={handleChange}/>
            <div className="relative">
              <input className="p-2 rounded-xl border w-full" type="password" id="password" placeholder="Password" onChange={handleChange} />
            </div>
            <div className="relative">
              <input className="p-2 rounded-xl border w-full" type="text" id="giTag" placeholder="GI Tag" onChange={handleChange} />
            </div>
            <button className="bg-[#0d1b2a] rounded-xl text-white py-2 hover:scale-105 duration-300">Sign In - Admin 1</button>
            
          </form>

          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>
          <div className="mt-3 text-xs flex flex-col items-center text-[#002D74]">
  <p>Don't have an account?</p>

  <Link to='/sign-up-a1'>
    <button className="mt-2 py-2 px-5 bg-[#001524] text-[#ffffff] border rounded-xl hover:scale-110 duration-300 h-[47%]">
      Sign Up
    </button>
  </Link>


</div>


        </div>

        {/* image */}
        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl" src={signina1} alt="Login" />
        </div>
      </div>
    </section>

  )
}
