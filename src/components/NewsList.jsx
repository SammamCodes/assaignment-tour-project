import NewsCard from "./NewsCard";

const NewsList = () => {
  const newsList = [
    {
      _id: "1",
      adventureCost: 5000,
      location: "Mount Everest",
      duration: 8,
      author: { name: "John Doe", img: "/author1.jpg", published_date: "2024-11-20" },
      title: "Climbing Mount Everest",
      image_url: "/images/everest.jpg",
      details: "A thrilling adventure to the top of the world...",
      rating: { number: 4.5 },
      total_view: 1234,
      category: "Adventure",
      adventureLevel: "Hard",
    },
    {
      _id: "2",
      adventureCost: 3000,
      location: "Sundarbans",
      duration: 5,
      author: { name: "Jane Smith", img: "/author2.jpg", published_date: "2024-11-15" },
      title: "Exploring the Sundarbans",
      image_url: "/images/sundarbans.jpg",
      details: "A serene adventure through the mangroves...",
      rating: { number: 4.2 },
      total_view: 980,
      category: "Nature",
      adventureLevel: "Medium",
    },
    {
      _id: "3",
      adventureCost: 4500,
      location: "Amazon Rainforest",
      duration: 7,
      author: { name: "Alex Brown", img: "/author3.jpg", published_date: "2024-11-10" },
      title: "Amazon Rainforest Expedition",
      image_url: "/images/amazon.jpg",
      details: "Venture into the heart of the jungle...",
      rating: { number: 4.8 },
      total_view: 1520,
      category: "Eco-Tourism",
      adventureLevel: "High",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {newsList.map((newsItem) => (
        <NewsCard key={newsItem._id} news={newsItem} />
      ))}
    </div>
  );
};

export default NewsList;
