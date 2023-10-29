import { useEffect } from "react";
import "./featuredProperties.scss";

//Imported Animation

import Aos from "aos";
import "aos/dist/aos.css";

export default function FeaturedProperties() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="fpContainer">
      <h1 className="fpHeading" data-aos="fade-up">
        Homes guests love
      </h1>
      <div className="fp">
        <div className="fpItem" data-aos="fade-up">
          <img
            src="https://cdn-cms0.hotelrunner.com/assets/photos/large/65e9fef6-1141-4e3c-bc9f-f0972b7033a2.jpg"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Aparthotel Stare Miasto</span>
          <span className="fpCity">Madrid</span>
          <span className="fpPrice">Starting from $120 </span>
          <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="fpItem" data-aos="fade-up">
          <img
            src="https://cdn-cms0.hotelrunner.com/assets/photos/large/65e9fef6-1141-4e3c-bc9f-f0972b7033a2.jpg"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Aparthotel Stare Miasto</span>
          <span className="fpCity">Madrid</span>
          <span className="fpPrice">Starting from $120 </span>
          <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="fpItem" data-aos="fade-up">
          <img
            src="https://cdn-cms0.hotelrunner.com/assets/photos/large/65e9fef6-1141-4e3c-bc9f-f0972b7033a2.jpg"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Aparthotel Stare Miasto</span>
          <span className="fpCity">Madrid</span>
          <span className="fpPrice">Starting from $120 </span>
          <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>
    </div>
  );
}
