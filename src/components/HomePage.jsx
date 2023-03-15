import React from "react";
import Products from "./Products";
import "./home.css";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  padding: "20px",
  background: "transparent",
  color: "white",
  fontWeight: "bold",
  fontSize: "2rem",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  objectFit: "cover",
  height: "400px",
};

const slideImages = [
  {
    url: "https://godlysoles.com/wp-content/uploads/2021/03/Buy-The-Pizza-Hut-Pie-Tops-IIs.jpg",
    caption: "Solid Gold OVO x Air Jordan 10’s",
  },
  {
    url: "https://sneakernews.com/wp-content/uploads/2015/10/JORDAN-101-JORDAN-IV.jpg",
    caption: "Air Jordan 4 Retro",
  },
  {
    url: "https://sneakernews.com/wp-content/uploads/2015/10/air-jordan4-bred-jordan-101.jpg",
    caption: "Get the best from the Market",
  },
];

function HomePage() {
  return (
    <div className="home-main">
      <div className="home-head">
        <div className="slideShow">
          <Slide>
            {slideImages.map((slideImage, index) => (
              <div key={index}>
                <div
                  style={{
                    ...divStyle,
                    backgroundImage: `url(${slideImage.url})`,
                  }}
                >
                  <span style={spanStyle}>{slideImage.caption}</span>
                </div>
              </div>
            ))}
          </Slide>
        </div>
        <Products />
      </div>
    </div>
  );
}

export default HomePage;
