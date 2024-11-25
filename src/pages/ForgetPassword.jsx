import { useLocation } from "react-router-dom";
import { useState } from "react";

const ForgotPassword = () => {
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || "");

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Redirect to Gmail
    window.location.href = "https://mail.google.com/";
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">Reset Password</h2>
        <form onSubmit={handleResetPassword} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Reset Password</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
