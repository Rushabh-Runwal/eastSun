import React from "react";

const Twomainsection1 = ({
  productName,
  promotion,
  description,
  children,
  urlLink1,
  linkName1,
  urlLink2,
  linkName2,
  headline,
  figWrapper,
  figClassName,
}) => {
  return (
    <div>
      <div className={figWrapper}>
        <figure className={figClassName}></figure>
      </div>
      <div className="product-name">
        <h1 className={headline}>{productName}</h1>
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
export default Twomainsection1;
