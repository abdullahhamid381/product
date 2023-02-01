import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
const Products = ({ Productdata, search, setSearch }) => {

    const navigate =  useNavigate()
    return (
        <Fragment>
            {/* THIS IS FOR THE CONVERT IN TO ROW CARDS */}

            <div className="product-grid ">
                {
                    /* USING FOR SEARCHING THE PRODUCTS */

                    Productdata.filter((filterItem) =>
                        filterItem.title.toLowerCase().includes(search)
                    ).map((Productdatamap) => {

                        /* FOR DESTRUCTUREING  */

                        const { img, title, price, btn, descrive ,id} =
                            Productdatamap;



                        /* PRODUCT CARDS START HERE  */

                        return (
                            <div className="products-parent" onClick={()=> navigate(`/${id}`)}>
                                <div>
                                    <img src={img} alt="" className="product-img" />
                                </div>
                                <div className="title">
                                    <span className="product-title">
                                        <h1>{title}</h1>
                                    </span>
                                    <span>
                                        <span className="product-price">Price</span>
                                        <span
                                            style={{ float: "right" }}
                                            className="product-price-text"
                                        >
                                            {price}
                                        </span>
                                    </span>

                                    <h3 className="product-describe">{descrive}</h3>
                                </div>
                                <div>
                                    <center>
                                        <button className="add-to-cart">{btn}</button>
                                    </center>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </Fragment>
    );
};

export default Products;
