import React from "react";
import "./Mainsection.css";
import Mainsection1 from "./Mainsection1/Mainsection1.js";
import IntroInfo from "../Mainsection/IntroInfo.js";
import Twomainsection from "../Mainsection/Twomainsection/Twomainsection.js";

const Mainsection = () => {
  return (
    <>
      <IntroInfo />
      <section className="background-wrapper">
        <div className="main-section-1  container-fluid">
          <div className="iphone13-wrapper">
            <Mainsection1
              className="headline"
              productName="iPhone 13 Pro"
              description="Oh. So. Pro."
              urlLink1="##"
              linkName1="Learn more"
              urlLink2="##"
              linkName2="Buy"
            />
          </div>
        </div>
      </section>
      <section className="main-section-2 container-fluid">
        <div className="iphone-wrapper">
          <Mainsection1
            productName="iPhone 13"
            description="Your new Superpower."
            urlLink1="##"
            linkName1="Learn more"
            urlLink2="##"
            linkName2="Buy"
          />
        </div>
      </section>
      <section className="main-section-3 container-fluid">
        <div className="watch-series-wrapper">
          <Mainsection1
            newText="new"
            icons="watch-icon"
            description="Introducing our largest display yet."
            urlLink1="##"
            linkName1="Learn more"
            urlLink2="##"
            linkName2="Buy"
          />
        </div>
      </section>
      <Twomainsection />
    </>
  );
};
export default Mainsection;
