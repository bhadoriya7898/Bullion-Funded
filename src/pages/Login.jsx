import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#090909] px-4">
      <div className="w-full max-w-md bg-[#111111] border border-[#2a2a2a] rounded-2xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.8)]">

        {/* Header */}
        <h2 className="text-3xl font-semibold text-white text-center">
          Welcome Back
        </h2>
        <p className="text-gray-400 text-center mt-2">
          Login to your Bullion Funded account
        </p>

        {/* Form */}
        <form className="mt-8 space-y-5">
          <div>
            <label className="text-sm text-gray-400">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full px-4 py-3 rounded-lg bg-[#0d0d0d] border border-[#2a2a2a] text-white placeholder-gray-500 focus:outline-none focus:border-[#74DA48]"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 w-full px-4 py-3 rounded-lg bg-[#0d0d0d] border border-[#2a2a2a] text-white placeholder-gray-500 focus:outline-none focus:border-[#74DA48]"
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 text-gray-400">
              <input type="checkbox" className="accent-[#82F352]" />
              Remember me
            </label>
            <span className="text-[#82F352] cursor-pointer hover:underline">
              Forgot password?
            </span>
          </div>

          <button className="w-full py-3 rounded-lg bg-[#82F352] text-black font-semibold hover:bg-[#74DA48] transition">
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-400 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#82F352] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
