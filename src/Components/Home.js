import React from "react";
import "./Home.css";
import Banner from "../Images/banner.png";
import Message from "../Images/message.png";
import ImageOne from "../Images/img1.png";
import ImageTwo from "../Images/img2.png";
import ImageThree from "../Images/img3.png";
import ImageFour from "../Images/img4.png";
import ImageFive from "../Images/img5.png";
import ImageSix from "../Images/img6.png";
import ImageSeven from "../Images/img7.png";
import LadyOne from "../Images/lady1.png";
import LadyTwo from "../Images/lady2.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="col-12 home">
      <div className="col-12 banner">
        <div className="col-lg-5 col-md-5">
          <img className="banner_img" src={Banner} />
        </div>
        <div className="col-lg-7 col-md-7">
          <div className="banner_content">
            <p>
              Quality Products <br /> Tailored Just For You.
            </p>
            <p>
              Welcome to the tailoring atelier in 2M Seamless. We offer many
              kinds of made to measure services such as suits, pants, senator
              wears, shirts, skirts and lots more.
            </p>
            <button className="btnn">
              Sew Now
              <span>
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </button>
          </div>
        </div>
        <div className="chat_icon">
          <span>
            <img src={Message} />
          </span>
        </div>
      </div>
      <div className="sub_banner col-12 ">
        <div>
          <img src={ImageOne} />
          <p className="img_header">Sleek & Trending Designs</p>
          <p className="img_body">
            We always strive to give the best in designs and materials used,
            sewing, finishing, and packaging.
          </p>
        </div>
        <div>
          <img src={ImageTwo} />
          <p className="img_header">Fast & Reliable</p>
          <p className="img_body">
            We are here to change the perception of tailors being late. We
            always stick to time given in everything we do.
          </p>
        </div>
        <div>
          <img src={ImageThree} />
          <p className="img_header">What You Order Is What You Get</p>
          <p className="img_body">
            We set a high production quality that is always aimed at meeting the
            needs of our customers.
          </p>
        </div>
      </div>
      <div className="view_banner col-12">
        <div className="product_content col-12">
          <p>Trending Styles For You...</p>
          <p>View More</p>
        </div>
        <div className="col-12 ">
          <div>
            <Link to ="">
              <img src={ImageFour} />
              <p>African Print Styles for Men</p>
            </Link>
          </div>
          <div>
            <Link to ="">
              <img src={ImageFive} />
              <p>Six Pieces African Print Skirt and Peplum Blouse</p>
            </Link>
          </div>
          <div>
            <Link to ="">
              <img src={ImageSix} />
              <p>Plain Kaftan for Men</p>
            </Link>
          </div>
          <div>
            <Link to="product">
              <img src={ImageSeven} />
              <p>Ankara Bohemian Gown</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="mini_banner col-12">
        <div className="col-lg-7 col-md-7 col-sm-7">
          <p>
            Got a Style You Like? <br />
            Let’s Sew It...
          </p>
          <p>
            Welcome to the tailoring atelier in 2M Seamless. We offer many kinds
            of made to measure services such as suits, pants, senator wears,
            shirts, skirts and lots more.
          </p>
          <button className="btnn">
            Sew Now
            <span>
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </button>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-5">
          <img className="mask_group" src={LadyTwo} />
          <img className="lady_one" src={LadyOne} />
        </div>
      </div>
    </div>
  );
};

export default Home;
