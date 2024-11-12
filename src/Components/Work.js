import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Picking meals with Healthy Switcher is simple and personalized.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "With Healthy Switcher, you have the flexibility to choose how often you’d like to receive meals.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Healthy Switcher ensures fast and reliable deliveries, so you receive fresh, prepped ingredients right when you need them.",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Healthy Switcher chefs handle all the prep work, such as peeling, chopping, and marinating, so you can enjoy cooking fresh meals without the hassle. They prepare the ingredients in advance, packaging them in ready-to-use portions, and deliver them directly to you.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div
            className="work-section-info"
            key={data.title}
            style={{
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0px 8px 20px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div className="info-boxes-img-container">
              <img
                src={data.image}
                alt={data.title}
                style={{
                  width: "100%",
                  transition: "transform 0.3s ease",
                }}
              />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
