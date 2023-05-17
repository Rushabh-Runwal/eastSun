import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Four0Four from "../Four0Four/Four0Four";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const { product_id } = useParams();
  // const productID = params.product_id;
  console.log(product_id);
  // const [productID] = useParams();
  useEffect(() => {
    fetch("/iphone.json")
      .then((res) => res.json())
      .then((products) => {
        const productList = products.products;
        // console.log(productList[1].product_with_VNo);
        const singleProduct = productList.filter(
          (product) => product.product_with_VNo === product_id
        );
        setProducts(singleProduct);
        console.log(singleProduct);
      })
      .catch(() => console.log("Error: unable to fetch!!"));
  }, []);
  if (products.length) {
    return (
      <div>
        <section className="internal-page-wrapper top-50">
          <div className="container">
            {" "}
            {products.map((product, i) => {
              let productWithVNo = product.product_with_VNo;
              let productName = product.product_name;
              let productImg = product.product_img;
              let BriefDescription = product.product_brief_description;
              let StartPrice = product.starting_price;
              let PriceRange = product.price_range;
              // let productPage = "/iphone/" + productWithVNo;
              let details = product.product_full_description;

              let productDiv = (
                <div key={i} className="bottom-100">
                  <div className="row justify-content-center text-center bottom-50">
                    <div className="col-12">
                      <div className="title-wraper bold">{productName}</div>
                      <div className="brief-description">
                        {BriefDescription}
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-center text-center product-holder h-100">
                    <div className={`col-sm-12 col-md-6 my-auto`}>
                      <div className="starting-price">
                        {`Starting at ${StartPrice}`}
                      </div>
                      <div className="monthly-price">{PriceRange}</div>
                      <div className="product-details">{details}</div>
                    </div>

                    <div className={`col-sm-12 col-md-6`}>
                      <div className="prodict-image">
                        <img src={productImg} />
                      </div>
                    </div>
                  </div>
                </div>
              );
              return productDiv;
            })}
            ;
          </div>
        </section>
      </div>
    );
  } else {
    return <Four0Four />;
  }
};

export default ProductPage;
