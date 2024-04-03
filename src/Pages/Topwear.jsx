import React from "react";
import "../css/topwear.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Fachingdata } from "../Redux/Product/Action";
import { Link } from "react-router-dom";
const Topwear = () => {
  const { data } = useSelector((store) => store.preducer);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Fachingdata);
  }, []);

  return (
    <div className="topwear-main">
      <div className="img-snaker-main">
        <img
          src="https://prod-img.thesouledstore.com/public/theSoul/uploads/themes/1616320231023115854.jpg?format=webp&w=1300&dpr=1.5"
          alt=""
          className="img-snaker"
        />
      </div>
      <div className="custom-flex">
        <div className="customradio-main">
          <div className="custom-border">
            <h6 className="custom-name">GENDER</h6>
            <label className="custom-label">
              <input type="radio" className="radio" />
            </label>
            <span className="custom-men">Men</span>
            <div className="line"></div>
            <div className="product-name">
              <h6 className="custom-name">PRODUCTS</h6>
              <div>
                <input type="checkbox" />
                <label className="checkbox-label">
                  <span className="checkbox-text">Men High Top Sneakers</span>
                </label>
              </div>
              <div>
                <input type="checkbox" />
                <label className="checkbox-label">
                  <span className="checkbox-text">Men Lace Up Shoes</span>
                </label>
              </div>
              <div>
                <input type="checkbox" />
                <label className="checkbox-label">
                  <span className="checkbox-text">Men Low Top Sneakers</span>
                </label>
              </div>
            </div>
            <div className="product-name">
              <h6 className="custom-name">THEMES</h6>
              <div>
                <input type="checkbox" />
                <label className="checkbox-label">
                  <span className="checkbox-text">Naruto</span>
                </label>
              </div>
              <div>
                <input type="checkbox" />
                <label className="checkbox-label">
                  <span className="checkbox-text">Marvel</span>
                </label>
              </div>
              <div>
                <input type="checkbox" />
                <label className="checkbox-label">
                  <span className="checkbox-text">Stranger Things</span>
                </label>
              </div>
              <div>
                <input type="checkbox" />
                <label className="checkbox-label">
                  <span className="checkbox-text">The Souled Store</span>
                </label>
              </div>
              <div>
                <input type="checkbox" />
                <label className="checkbox-label">
                  <span className="checkbox-text">Money Heist</span>
                </label>
              </div>
              <div>
                <input type="checkbox" />
                <label className="checkbox-label">
                  <span className="checkbox-text">Harry Potter</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div id="box">
          {data.map((e) => {
            return (
              <Link to={`/singal/${e.id}`} className="link">
                <div className="main-product-data">
                    <img src={e.image} alt="" className="image-logo" />
                  <div className="text-product">
                    <p className="p-title">{e.title}</p>
                    <p className="p-category">{e.category}</p>
                    <div className="div-flex">
                      <p className="p-price">{e.price}</p>
                      <p className="p-offer">{e.offer}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Topwear;
{}