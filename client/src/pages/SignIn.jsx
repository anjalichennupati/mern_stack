import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import signinincon from '../assets/signinicon.jpg'; // Ensure the path is correct

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    console.log("Submitting form with data:", formData);

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setLoading(false);

      if (!res.ok) {
        console.error("Login failed:", data);
        setError(data.message || "Login failed");
        return;
      }

      console.log("Login successful:", data);
      navigate('/details');
    } catch (error) {
      setLoading(false);
      console.error("Error during login:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="bg-[#0d1b2a] min-h-screen flex items-center justify-center">
      {/* Login container */}
      <div className="bg-[#f5ebe0] flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        {/* Form */}
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-semibold font-poppins ss:text-[40px] text-[#000000]">Sign In</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input className="p-2 mt-8 rounded-xl border" type="email" id="email" placeholder="Email" onChange={handleChange} required />
            <div className="relative">
              <input className="p-2 rounded-xl border w-full" type="password" id="password" placeholder="Password" onChange={handleChange} required />
            </div>
            <button className="bg-[#0d1b2a] rounded-xl text-white py-2 hover:scale-105 duration-300">
              {loading ? "Signing In..." : "Sign In - Admin 2"}
            </button>
          </form>

          {error && <p className="text-red-500 mt-3">{error}</p>}

          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>

          <div className="mt-3 text-xs flex flex-col items-center text-[#002D74]">
            <p>Don't have an account?</p>
            <Link to="/sign-up">
              <button className="mt-2 py-2 px-5 bg-[#001524] text-[#ffffff] border rounded-xl hover:scale-110 duration-300">
                Sign Up
              </button>
            </Link>
            <Link to="/sign-in-a1">
              <button className="ml-1 mt-3 bg-[#0d1b2a] rounded-xl text-white py-2 hover:scale-105 duration-300 w-[120%]">
                Sign In - Admin 1
              </button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl" src={signinincon} alt="Login" />
        </div>
      </div>
    </section>
  );
}
