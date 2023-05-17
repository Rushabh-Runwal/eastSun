import React from "react";
import "./Twomainsection.css";
import Twomainsection1 from "./Twomainsection1/Twomainsection1.js";
import YouTube from "./Twomainsection1/YouTube.js";
import News from "./Twomainsection1/News.js";

const Twomainsection = () => {
  let description = (
    <h5>
      Get 3 months free when&nbsp;you&nbsp;buy&nbsp;an&nbsp;Apple&nbsp;Watch.
      <sup>
        <a href="#footnote-1" className="footnote">
          1
        </a>
      </sup>
    </h5>
  );
  let get = (
    <div>
      Get up to 3% daily cash back <br /> with every purchases.
    </div>
  );
  return (
    <div>
      <section className="two-section-wrapper container-fluid">
        <div className="row">
          <div className=" col-md-6 ">
            <div className="main-section-left MacBook-pro-wrapper">
              <Twomainsection1
                headline="headline"
                productName="MacBook Pro"
                description="Supercharged for pros."
                urlLink1="##"
                linkName1="Learn more"
                urlLink2="##"
                linkName2="Buy"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="main-section-right main-ipadpro-wrapper">
              <div className="ipad-wrapper">
                <Twomainsection1
                  productName="iPad Pro"
                  description="Supercharged by the Apple M1 chip."
                  urlLink1="##"
                  linkName1="Learn more"
                  urlLink2="##"
                  linkName2="Buy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="two-section-wrapper container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="main-section-left airpod-container main-airpod-wrapper">
              <div className="airpod-wrapper">
                <Twomainsection1
                  headline="headline"
                  productName="AirPods"
                  description="Supercharged for pros."
                  urlLink1="##"
                  linkName1="Learn more"
                  urlLink2="##"
                  linkName2="Buy"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="main-section-right main-fitness-wrapper">
              <div className="fitness-wrapper">
                <Twomainsection1
                  figWrapper="apple-fitness"
                  figClassName="fitness-logo"
                  description={description}
                  urlLink1="##"
                  linkName1="Learn more"
                  urlLink2="##"
                  linkName2="Shop Apple Watch"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="two-section-wrapper container-fluid mb-3">
        <div className="row">
          <div className="col-md-6">
            <div className="main-section-left main-apple-card">
              <div className="apple-card-wrapper">
                <Twomainsection1
                  figWrapper="apple-card"
                  figClassName="apple-logos apple-card-logo"
                  description=" Get up to 3% Daily&nbsp;Cash back with every purchase."
                  urlLink1="##"
                  linkName1="Learn more"
                  urlLink2="##"
                  linkName2="Apply now"
                />
              </div>
            </div>
          </div>
          <section className="col-md-6">
            <div className="main-section-right main-tv-wrapper">
              <div className="tv-wrapper">
                <div>
                  <figure className="apple-logos apple-tv-plus"></figure>
                </div>
                <div className="tv-plus">
                  <figure className="apple-logos tv-plus-dilemma"></figure>
                </div>
                <div>
                  <figure className="apple-logos tagline"></figure>
                </div>
                <div className="watch-trailer">
                  <a href="##">stream now</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section>
        <YouTube />
      </section>
      <section>
        {/* <News /> */}
      </section>
    </div>
  );
};
export default Twomainsection;
