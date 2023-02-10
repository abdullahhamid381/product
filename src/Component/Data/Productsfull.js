import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Productfulldetail, Productsdetail } from "./Data";
import ProductImagesSlider from "./Slider";


import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'



const Productsfull = () => {
  const [state, setstate] = useState(0);
  const { id } = useParams();
  const Filterfullproduct = Productsdetail.filter((pro) => pro.id == id);

  const {
    descrive,
    price,
    catageory,
    title,
    img,
    formorebrand,
    id: product__id,
  } = Filterfullproduct[0];


  return (
    <div>
      <div className="productfull-grid">
        {/*  PRODUCT IMAGE */}
        <ProductImagesSlider />
        <div>
          <img src={img} alt="" />
        </div>

        {/* PRODUCT DETAILS */}

        <div style={{ width: "80%" }}>
          <h1 className="productfull-title">
            {descrive}
          </h1>
          <div className="brand-detail">
            <span style={{ color: "gray", fontSize: "18px" }}> Brand : </span>
            <span className="brand-name"> No Brand </span>
            <span className="for-more-brand">
              {formorebrand}
              {catageory}
            </span>
          </div>

          {/* PRODUCT PRICE SECTION */}

          <div className="product-price-parent">
            <h1 className="product-now-price">{price}</h1>
            <h3 className="discount">
              <del style={{ fontSize: "18px" }}> Rs 199 </del>
              <span
                className="product-discou
                            nt"
              >
                {" "}
                50% Discount
              </span>
            </h3>
          </div>

          {/* PRODUCT QUATINTY AND ADD TO CART */}
          <div>
            <span style={{ fontSize: "25px" }}> Quantinty : </span>
            <button
              onClick={() => setstate(state + 1)}
              className="increment-product"
            >
              {" "}
              Increment
            </button>
            <span className="product-quantity">{state}</span>
            <button
              onClick={() => (state > 0 ? setstate(state - 1) : setstate(0))}
              className="increment-product"
            >
              {" "}
              Decrement
            </button>
          </div>
          <div>
            <button className="productfull-add-to-cart"> Add to Cart </button>
          </div>
        </div>

        {/* DELEVIRY SECTION */}

        <div>
          {/* DISPATCH LOCATION */}
          {/*   <div>
                        <h1  style={{fontWeight:500,}}>Delivery</h1>



                        <div>
                            <h3 className='dispatch-location'>Sindh, Karachi - Gulshan-e-Iqbal, Block 15</h3> <button className='dispatch-change-location'>Change</button>
                        </div>
                    </div>
 */}

          {/* DELEIVERY TIME DURATION */}

          {/*   <div>
                        <h1 className='deleviery'>Standard Delivery</h1>
                        <span className='delivery-duration'>3 - 5 day(s)</span>
                        <span className='delivery-duration'>RS 119</span>
                    </div> */}

          {/* CASH ON DELEIEVRY */}
          {/* <div>
                        <h3 className='cash-on'>Cash On Delivery Available</h3>
                    </div> */}

          {/* RETURNING METHOOD */}
          {/*  <div>
                        <h1>Services</h1> <h5>7 Days Returns</h5> <h6>Change of mind is not applicable</h6>
                    </div> */}
          {/* <div>
                        <h3>Warranty not available</h3>
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default Productsfull;
