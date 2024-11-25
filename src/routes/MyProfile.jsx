import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdateProfile = () => {
    navigate("/update-profile"); // Navigate to the UpdateProfile route
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <h1 className="text-2xl font-bold text-center mb-4">
          Welcome, {user?.displayName || "User"}!
        </h1>
        <div className="flex flex-col items-center">
          <img
            src={user?.photoURL || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4"
          />
          <div className="text-center space-y-2">
            <p className="text-lg font-semibold">Name: {user?.displayName || "N/A"}</p>
            <p className="text-lg font-semibold">Email: {user?.email || "N/A"}</p>
          </div>
        </div>
        <button
          onClick={handleUpdateProfile}
          className="btn btn-neutral rounded-none w-full mt-6"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
