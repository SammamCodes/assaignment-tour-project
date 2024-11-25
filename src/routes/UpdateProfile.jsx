import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    photo: user?.photoURL || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUserProfile({ displayName: formData.name, photoURL: formData.photo })
      .then(() => {
        alert("Profile updated successfully!");
        navigate("/my-profile"); // Navigate back to MyProfile route
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to update profile.");
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <h1 className="text-2xl font-bold text-center mb-4">Update Profile</h1>
        <form onSubmit={handleUpdate} className="space-y-4">
          <div className="form-control">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              value={formData.photo}
              onChange={handleInputChange}
              className="input input-bordered w-full"
            />
          </div>
          <button type="submit" className="btn btn-neutral rounded-none w-full">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
