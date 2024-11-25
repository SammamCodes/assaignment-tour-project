import { FaShareAlt, FaRegEye } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

// Function to generate random duration and cost
const getRandomDurationAndCost = () => {
  const durations = [2, 4, 6, 8, 10]; // Even durations in hours
  const costs = ["90,000", "110,000", "130,000", "150,000", "200,000"]; // Costs above 80,000 BDT
  const randomDuration = durations[Math.floor(Math.random() * durations.length)];
  const randomCost = costs[Math.floor(Math.random() * costs.length)];
  return { duration: randomDuration, cost: randomCost };
};

// Array of image URLs from Pexels
const pexelsImages = [
  "https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg",
  "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg",
  "https://images.pexels.com/photos/34950/pexels-photo.jpg",
  "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg",
  "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
];

// Function to get a random image URL
const getRandomImage = () => {
  return pexelsImages[Math.floor(Math.random() * pexelsImages.length)];
};

const NewsCard = (props = {}) => {
  const { news } = props || {};

  // Destructuring to access all the fields
  const {
    author,
    title,
    details,
    rating,
    total_view,
    _id,
    adventureLevel, // New field for adventure level
  } = news || {};

  // Get random duration, cost, and image for each card
  const { duration, cost } = getRandomDurationAndCost();
  const imageUrl = getRandomImage();

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      {/* Author Information */}
      <div className="flex items-center mb-4">
        <img
          src={author?.img || "https://via.placeholder.com/150"}
          alt={author?.name || "Author"}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="font-semibold">{author?.name || "Unknown Author"}</p>
          <p className="text-sm text-gray-500">{author?.published_date || "N/A"}</p>
        </div>
        <div className="ml-auto">
          <FaShareAlt className="text-gray-600" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold mb-2">{title || "Adventure Title"}</h2>

      {/* Thumbnail Image */}
      <img
        src={imageUrl}
        alt="Adventure Thumbnail"
        className="w-full object-cover rounded-lg mb-4"
      />

      {/* Adventure Info */}
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-1">
          <strong>Cost: </strong> {cost} BDT
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <strong>Location:</strong> Himalayas
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <strong>Duration:</strong> {duration} hours
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <strong>Adventure Level:</strong> {adventureLevel || "High"}
        </p>
      </div>

      {/* Details */}
      <p className="text-gray-700 text-sm mb-4">
        {details?.slice(0, 150) || "Explore amazing adventures and discover breathtaking views..."}{" "}
        <Link to={`/news/${_id || "1"}`} className="text-primary">
          Explore
        </Link>
      </p>

      {/* Ratings and Views */}
      <div className="flex items-center justify-between text-gray-600 text-sm">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <AiFillStar
              key={i}
              className={`text-yellow-500 ${i < Math.round(rating?.number) ? "" : "opacity-50"}`}
            />
          ))}
          <span className="ml-2 font-semibold">{rating?.number || "0.0"}</span>
        </div>
        <div className="flex items-center">
          <FaRegEye className="mr-1" />
          <span>{total_view || 0}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
