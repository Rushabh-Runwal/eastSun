import React, { useState, useEffect } from "react";
import "./Iphone.css";
import { Link } from "react-router-dom";

const Iphone = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/iphone.json")
    // fetch("http://localhost:8181/iphones")
      .then((res) => res.json())
      .then((products) => {
        setProducts(() => products.products);
      });
  }, []);
console.log(products);
  let order = 1;
  return (
    <div>
      <section className="iphone-page-wrapper mb-3 top-50">
        <div className="container-fluid">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold">iPhone 13 Pro</div>
              <div className="brief-description">
                <p className="apple-card-getway">
                  Get 3% Daily Cash back with Apple&nbsp;Card. And pay for your
                  new iPhone over 24 months, 
                  interest‑free when you choose to check out with
                  Apple&nbsp;Card Monthly Installments.
                  <span className="footnote footnote-supglyph">
                    <a href="#footnote-1" aria-label="Footnote * symbol">
                      *
                    </a>
                  </span>
                </p>
                <div className="links-learn-more">
                  <ul>
                    <li>
                      <Link to="/applecard">Learn more</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {products?.map((product) => {
            let productWithVNo = product.product_with_VNo;
            let productName = product.product_name;
            let productImg = product.product_img;
            let BriefDescription = product.product_brief_description;
            // let StartPrice = product.starting_price;
            let PriceRange = product.price_range;
            let productPage = "/iphone/" + productWithVNo;

            let order1 = 1;
            let order2 = 2;
            if (order !== 1) {
              order1 = 2;
              order2 = 1;
              order--;
            } else {
              order++;
            }

            let productDiv = (
              <div
                key={productWithVNo}
                className="row justify-content-center text-center product-holder h-100 top-50 bottom-500"
              >
                <div className={`col-sm-12 col-md-12 my-auto order-${order1}`}>
                  <div className="product-title">{productName}</div>
                  <div className="product-brief">{BriefDescription}</div>
                  {/* <div className="starting-price">
                    {`Starting at ${StartPrice}`}
                  </div> */}
                  <div className="monthly-price">
                    {PriceRange}{" "}
                    <sup className="footnote footnote-number">
                      <a href="#footnote-3" aria-label="Footnote 1">
                        1
                      </a>
                    </sup>
                  </div>
                  <div className="two-links-wrapper mb-4">
                    <div className="links-wrapper">
                      <ul>
                        <li>
                          <Link className="" to={productPage}>
                            Buy
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="links-learn-more">
                      <ul>
                        <li>
                          <Link to={productPage}>Learn more</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={`col-sm-12 col-md-12 order-${order1}`}>
                  <div className="prodict-image">
                    <img src={productImg} alt="" />
                  </div>
                </div>
              </div>
            );
            return productDiv;
          })}
        </div>
      </section>
    </div>
  );
};

export default Iphone;
