import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const Signup = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setError("");
    const url = "http://localhost:4000/api/auth/signup";
    try {
      await axios.post(url, input);
      navigate("/login");
    } catch (err) {
      console.error(err);
      // no response means the backend isn't running
      setError(err.response?.data?.error ?? "Could not reach the server");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <form
          className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm p-8 flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <div className="text-center mb-2">
            <h2 className="text-2xl font-bold">Create an account</h2>
            <p className="text-sm text-gray-500 mt-1">
              Track flights and get price alerts
            </p>
          </div>

          <label className="flex flex-col gap-1 text-sm font-medium text-gray-700">
            Email
            <input
              type="email"
              name="email"
              required
              value={input.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="border border-gray-300 rounded-md px-3 py-2 font-normal focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </label>

          <label className="flex flex-col gap-1 text-sm font-medium text-gray-700">
            Password
            <input
              type="password"
              name="password"
              required
              minLength={8}
              value={input.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="border border-gray-300 rounded-md px-3 py-2 font-normal focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </label>

          {error && (
            <p className="text-sm text-red-600 text-center" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 bg-blue-600 text-white rounded-md py-2 font-medium hover:bg-blue-500 transition-colors disabled:opacity-60"
          >
            {isSubmitting ? "Creating account..." : "Sign Up"}
          </button>

          <p className="text-sm text-center text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Log in
            </Link>
          </p>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
