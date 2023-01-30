import React, { useState } from 'react'
import { ProductImg } from '../Data/Data'

const Products = () => {
    const [Product, setstate] = useState(ProductImg)
    return (
        <div>

            <div className='products-title'><center><h1>Featured Products</h1><h5>Top sale on this week</h5></center></div>

            <div>
                {
                    Product.map((ProductImgmap) => {
                        return (
                            <div>
                                <div>
                                    <img src={ProductImgmap.img} alt="" style={{width:'20%'}}/>
                                </div>
                                <div>
                                    <span>{ProductImgmap.title}</span>
                                    <span>{ProductImgmap.price}</span>
                                </div>
                                <div>
                                <button>{ProductImgmap.btn}</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Products