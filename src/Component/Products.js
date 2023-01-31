import React, { Fragment } from 'react';
const Products = ({ Productdata ,search,setSearch}) => {

    return (
        <Fragment>
          <div className='product-grid '>
          {
            Productdata.filter(filterItem=> filterItem.title.toLowerCase().includes(search)).map((Productdatamap) => {
                const {img , title , price,btn,descrive } = Productdatamap;

                return (
                    <div className='products-parent'>
                        <div>
                            <img src={img} alt="" className='product-img'/>
                        </div>
                        <div className='title'>
                            <span className='product-title'><h1>{title}</h1></span>
                            <span><span className='product-price'>Price</span><span style={{float:'right'}} className='product-price-text'>{price}</span></span>
                         
                          
                          <h3  className='product-describe' >{descrive}</h3>
                        </div>
                        <div><center><button className='add-to-cart'>{btn}</button></center></div>
                    </div>
                )
            })
        }
          </div>

        </Fragment>
    );
}

export default Products;
