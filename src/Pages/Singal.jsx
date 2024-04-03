import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Singal = () => {
  let [product, setProduct] = useState("");
  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(`https://server-api-2igq.onrender.com/userdata/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      });
  }, []);
  return (
    <div className="singal-product-data">
      <img src={product.image} alt="" className="image-singal" />
      <div className="text-singal-product">
        <p className="p-title-singal">{product.title}</p>
        <p className="p-category-singal">{product.category}</p>
        <p className="p-price-singal">{product.price}</p>
        <p className="p-offer-singal">{product.offer}</p>
      </div>
    </div>  
  );
};
export default Singal;
