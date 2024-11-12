import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        "Healthy Switcher has completely transformed my meal routine! With all the prep work done, I can enjoy cooking without spending hours in the kitchen. The ingredients are always fresh, and the meals are delicious!"
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        "I love the variety of meal options! Whether I want something low-carb or vegetarian, there’s always a choice that fits my diet. It’s been such a convenient way to keep up with healthy eating."
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Sam</h2>
      </div>
    </div>
  );
};

export default Testimonial;
