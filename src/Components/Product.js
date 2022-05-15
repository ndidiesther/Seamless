import React from "react";
import "./Product.css";
import ProductImg from "../Images/product.png";
import sProductImg from "../Images/sproduct.png";
import Bag from "../Images/Bag.png";
import Vector from "../Images/Vector.png";
import ProductOne from "../Images/Product1.png";
import ProductTwo from "../Images/Product2.png";
import ProductThree from "../Images/Product3.png";

const Product = () => {
  return (
    <div className="product col-12">
      <div className="product_banner col-12">
        <div className="clearfix">
          <p className="product_para">
            <span>
              <i className="fa-solid fa-arrow-left"></i>
            </span>
            <span>Ankara Bohemian Gown</span>
          </p>
          <img  className="product_img" src={ProductImg} />
          <div className="sProduct">
            <img src={sProductImg} />
            <img src={sProductImg} />
            <img src={sProductImg} />
            <img src={sProductImg} />
          </div>
        </div>
        <div className="col-lg-1"> </div>
        <div className="p_div">
          <div className="p_description">
            <p>Ankara Bohemian Gown</p>
            <p>Olympia, Multi Colored Ankara</p>
            <p>₦166,076.00</p>
            <span className="c_star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </span>
            <span className="p_star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </span>
            <p>
              Our state-of-the-art Non Iron dress shirt in mid blue twill
              ensures a high-quality fit and feel throughout the day with
              minimal effort. The two-ply fabric and taped seams provide
              enhanced comfort while also maintaining a smooth, pucker-free
              finish, and the densely woven shirt gives a heavy body and is very
              opaque. Wear this gem whenever you want to impress your
              surroundings and make a smooth statement, this is definitely a
              dress shirt worthy of its name. Made to your measurements.
            </p>
            <div className="div_btn">
              <button>Customize</button>
              <button>
                <img src={Bag} /> <span>Add to Cart</span>
              </button>
            </div>
            <div className="vector_div">
              <span>
                <img src={Vector} />
                <span>Free delivery for orders above 10pcs</span>
              </span>
              <span>
                <img src={Vector} />
                <span>Fit Guarantee</span>
              </span>
            </div>
            <div className="fabric_desc">
              <div className="dbr"></div>
              <p>Fabric: Olympia, Multi Colored Ankara</p>
              <p>Pattern Type: Random Patterns</p>
              <p>Colors: Yellow, Blue, Green, Black, White, Orange</p>
            </div>
          </div>
        </div>
      </div>
      <div className="view_product col-12">
        <div className="product_con col-12">
          <p>Trending Styles For You...</p>
          <p>View More</p>
        </div>
        <div className= "sub_pro col-12">
          <div className="col-lg-4 ">
          <img src={ProductOne} />
          <div className="tag">
          
            <p>Ankara Bohemian Gown</p>
            <p>₦166,076.00</p>
          </div>
          </div>
          <div className="col-lg-4">
          <img src={ProductTwo} />
            <div className="tag">
           
            <p>Ankara Bohemian Gown</p>
            <p>₦166,076.00</p>
            </div>
          </div>
          <div className="col-lg-4">
          <img src={ProductThree} />
            <div className="tag">
           
            <p>Ankara Bohemian Gown</p>
            <p>₦166,076.00</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
