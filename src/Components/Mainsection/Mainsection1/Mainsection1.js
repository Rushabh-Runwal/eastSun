import React from "react";

const Mainsection1 = ({
  productName,
  description,
  urlLink1,
  linkName1,
  urlLink2,
  linkName2,
  className,
  icons,
  newText,
}) => {
  return (
    <div>
      <div className="watch-series">
        <span>{newText}</span>
        <figure className={icons}></figure>
      </div>
      <div className="product-name">
        <h1 className={className}> {productName} </h1>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
      <div className="links-learn-more">
        <ul>
          <li>
            <a href={urlLink1}>{linkName1}</a>
          </li>
          <li>
            <a href={urlLink2}>{linkName2}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Mainsection1;
