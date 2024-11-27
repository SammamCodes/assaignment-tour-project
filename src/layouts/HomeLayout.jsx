import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import RightNav from "../components/layout-component/RightNav";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SliderTrue from "../components/SliderTrue";

const HomeLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Function to get the page title based on the route
  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Home Page";
      case "/about":
        return "About Us";
      case "/contact":
        return "Contact Us";
      // Add more routes here if needed
      default:
        return "My App"; // Default title for unknown routes
    }
  };

  // Update the document title whenever the location changes
  useEffect(() => {
    document.title = getPageTitle();
  }, [location]); // The effect runs when the location changes

  return (
    <div className="font-serif">
      <header className="animate__animated animate__fadeInDown">
        <Header />
      </header>
      <section></section>
      <nav className="w-11/12 mx-auto pt-5 animate__animated animate__fadeInUp">
        <Navbar />
      </nav>
      <section className="w-11/12 mx-auto flex justify-center items-center animate__animated animate__zoomIn">
        <SliderTrue />
      </section>
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
        <aside className="left col-span-3 animate__animated animate__fadeInLeft">
          <LeftNavbar />
        </aside>
        <section className="col-span-6 animate__animated animate__fadeInUp">
          <Outlet />
        </section>
        <aside className="col-span-3 animate__animated animate__fadeInRight">
          <RightNav />
        </aside>
      </main>

      {/* New Section: Testimonials */}
      <section className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-16">
        <div className="w-11/12 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg w-full md:w-1/3">
              <p className="italic">"The best app I've used this year. It simplified my workflow dramatically."</p>
              <p className="font-semibold mt-4">- Alex Johnson</p>
            </div>
            <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg w-full md:w-1/3">
              <p className="italic">"An intuitive design with features that I didn’t know I needed."</p>
              <p className="font-semibold mt-4">- Samantha Lee</p>
            </div>
            <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg w-full md:w-1/3">
              <p className="italic">"Exceptional customer support and a user-friendly experience!"</p>
              <p className="font-semibold mt-4">- Michael Green</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Section: Call-to-Action */}
      <section className="w-full bg-gray-900 text-white py-20">
        <div className="w-11/12 mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6">Take the Next Step</h2>
          <p className="text-lg mb-8">
            Join thousands of satisfied users today. Transform the way you work, communicate, and succeed.
          </p>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg mr-4"
              onClick={() => navigate("/")} // Redirects to the homepage
            >
              Get Started
            </button>
            <button className="bg-transparent border-2 border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-3 px-8 rounded-lg shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <footer className="animate__animated animate__fadeInUp">
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
