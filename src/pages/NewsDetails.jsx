import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];

  // Static data for the card
  const staticData = {
    duration: 6, // even number
    adventureCost: 90000, // greater than 80,000
    includedItems: ['Meals', 'Transport', 'Guide', 'Accommodation'],
    ecoFriendlyFeatures: ['Solar Panels', 'Recycling', 'Water Conservation'],
    maxGroupSize: 15,
    specialInstructions: ['Bring comfortable shoes', 'Pack light', 'Respect local culture'],
    imageURL: [
      'https://images.pexels.com/photos/12392947/pexels-photo-12392947.jpeg', // Image 1
      'https://images.pexels.com/photos/12346534/pexels-photo-12346534.jpeg', // Image 2
      'https://images.pexels.com/photos/12345087/pexels-photo-12345087.jpeg', // Image 3
      'https://images.pexels.com/photos/12569547/pexels-photo-12569547.jpeg'  // Image 4
    ]
  };

  // Randomly selecting a unique image URL from the array
  const randomImage = staticData.imageURL[Math.floor(Math.random() * staticData.imageURL.length)];

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h2 className="font-semibold mb-3">Dragon News</h2>
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={randomImage} // Using the random image for each card
                alt={news?.title || "Adventure Image"}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{news?.title}</h2>
              <p>{news?.details}</p>
              <div className="card-actions">
                <Link to={`/category/${news?.category_id}`} className="btn btn-primary">
                  Back to Category
                </Link>
              </div>
              <div className="mt-5">
                <p><strong>Duration:</strong> {staticData.duration} days</p>
                <p><strong>Adventure Cost:</strong> ${staticData.adventureCost}</p>
                <p><strong>Max Group Size:</strong> {staticData.maxGroupSize} people</p>
                <p><strong>Included Items:</strong></p>
                <ul>
                  {staticData.includedItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p><strong>Eco-Friendly Features:</strong></p>
                <ul>
                  {staticData.ecoFriendlyFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <p><strong>Special Instructions:</strong></p>
                <ul>
                  {staticData.specialInstructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNav />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
