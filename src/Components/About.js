import React, { useEffect, useState } from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Parallax effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Animation on entry
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    const aboutSection = document.querySelector(".about-section-container");
    if (aboutSection) {
      observer.observe(aboutSection);
    }
    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
    };
  }, []);

  return (
    <div
      className="about-section-container"
      style={{
        transform: inView ? "translateY(0)" : "translateY(50px)",
        opacity: inView ? 1 : 0,
        transition: "all 0.8s ease",
      }}
    >
      <div
        className="about-background-image-container"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`, // parallax effect
          transition: "transform 0.2s ease-out",
        }}
      >
        <img src={AboutBackground} alt="" />
      </div>
      <div
        className="about-section-image-container"
        style={{
          transform: `translateY(${scrollY * 0.15}px)`, // slower parallax for foreground image
          transition: "transform 0.2s ease-out",
        }}
      >
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
        Food is a crucial component of a balanced diet, providing the nutrients our bodies need to function optimally.
        </p>
        <p className="primary-text">
        Each type of food plays a unique role: for instance, fruits and vegetables are rich in vitamins and fiber.
        </p>
        <div className="about-buttons-container">
          <button
            className="secondary-button"
            style={{
              transform: inView ? "translateY(0)" : "translateY(20px)",
              opacity: inView ? 1 : 0,
              transition: "all 0.8s ease 0.2s",
            }}
          >
            Learn More
          </button>
          <button
            className="watch-video-button"
            style={{
              transform: inView ? "translateY(0)" : "translateY(20px)",
              opacity: inView ? 1 : 0,
              transition: "all 0.8s ease 0.3s",
            }}
          >
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
