import { useEffect } from "react";
import "./propertyList.scss";

//Imported Animation

import Aos from "aos";
import "aos/dist/aos.css";
import useFetch from "../../hooks/usefetch";

const PropertyList = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const { data, loading, error } = useFetch("/hotels/countByType");

  return (
    <div className="pContainer">
      <h1 className="CotainerTitle" data-aos="fade-up">
        Browse by property type
      </h1>
      <div className="pList">
        {loading ? (
          "loading"
        ) : (
          <>
            <div className="pListItem">
              <img
                src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
                alt=""
                className="pListIng"
                data-aos="fade-down"
              ></img>
              <div className="pListTitles" data-aos="fade-up">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
              </div>
            </div>
            <div className="pListItem">
              <img
                src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
                alt=""
                className="pListIng"
                data-aos="fade-down"
              />
              <div className="pListTitles" data-aos="fade-up">
                <h1>Apartments</h1>
                <h2>185 hotels</h2>
              </div>
            </div>
            <div className="pListItem">
              <img
                src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
                alt=""
                className="pListIng"
                data-aos="fade-down"
              ></img>
              <div className="pListTitles" data-aos="fade-up">
                <h1>Resorts</h1>
                <h2>456 hotels</h2>
              </div>
            </div>
            <div className="pListItem">
              <img
                src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
                alt=""
                className="pListIng"
                data-aos="fade-down"
              ></img>
              <div className="pListTitles" data-aos="fade-up">
                <h1>Villas</h1>
                <h2>354 hotels</h2>
              </div>
            </div>
            <div className="pListItem">
              <img
                src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
                alt=""
                className="pListIng"
                data-aos="fade-down"
              ></img>
              <div className="pListTitles" data-aos="fade-up">
                <h1>Cabins</h1>
                <h2>2331 hotels</h2>
              </div>
            </div>{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default PropertyList;
