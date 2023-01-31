import React, { Fragment, useState } from 'react'
import { Productsdetail } from './Data/Data';
import Products from './Products';


const uniqueList = [
    ...new Set(Productsdetail.map((Productdatamap) => {
        return Productdatamap.catageory
    }))]






const ProductsMenu = () => {
    const [Productdata, setProductdata] = useState(Productsdetail);
    const [Uniquedata, setUniquedata] = useState(uniqueList);
    const filter = (catageory) => {
        const updatelist = Productsdetail.filter((Productdatamap) => {
            return Productdatamap.catageory === catageory
        });
        setProductdata(updatelist)
    }
    return (
        <Fragment>


            <div className='coulmn-divison'>
                <div className='product-filter-button'>
                <h1 style={{padding:'20px 20px'}}>Catageory</h1>
                <button onClick={() => setProductdata(Productsdetail)}>All Products</button>
                    {
                        Uniquedata.map((Productdatamap) => {
                            return (
                                <div> <button onClick={() => filter(Productdatamap)}>
                                    {Productdatamap}
                                </button>

                                </div>
                            )
                        })
                    }
                   
                </div>

                <div>
                    <Products Productdata={Productdata} />
                </div>
            </div>
        </Fragment>
    )
}

export default ProductsMenu