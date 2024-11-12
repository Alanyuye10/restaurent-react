import React, { useEffect, useState } from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Trigger animation when component is in view
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    const bannerSection = document.querySelector(".home-banner-container");
    if (bannerSection) {
      observer.observe(bannerSection);
    }
    return () => {
      if (bannerSection) observer.unobserve(bannerSection);
    };
  }, []);

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        {/* Background Image with Slide and Fade Animation */}
        <div
          className="home-bannerImage-container"
          style={{
            transform: inView ? "translateX(0)" : "translateX(-100px)",
            opacity: inView ? 1 : 0,
            transition: "transform 1s ease, opacity 1s ease",
          }}
        >
          <img src={BannerBackground} alt="" />
        </div>

        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeling, chopping
            & marinating, so you can cook a fresh meal.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>

        {/* Foreground Image with Scale Animation */}
        <div
          className="home-image-section"
          style={{
            transform: inView ? "scale(1)" : "scale(0.9)",
            opacity: inView ? 1 : 0,
            transition: "transform 1s ease, opacity 1s ease",
          }}
        >
          <img
            src={BannerImage}
            alt=""
            style={{
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
