import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet"

const Login = () => {
  return (
    <>
   
      <Helmet>
        <title>LogIn | FTST </title>
        <meta
          name="description"
          content="Apply for personal, business, home, car, education, and other loans with FTST Job Consulting. Quick approval and minimal documentation."
        />
        </Helmet>
    <div className="min-h-screen flex items-center justify-center  p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>
        <form className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            autoComplete="off"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="off"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          <div className="flex justify-end text-sm">
            <Link to="/forgot-password" className="text-red-600 hover:underline">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded transition"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-700">
          Don’t have an account?{" "}
          <Link to="/register" className="text-green-600 hover:underline font-medium">
            Register
          </Link>
        </p>
      </div>
    </div>
    </>
  );
};

export default Login;
