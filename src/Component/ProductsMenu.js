import React, { Fragment, useState } from 'react'
import { Productsdetail } from './Data/Data';
import Products from './Products';



/* THIS MAP IS FOR THE CATAGEORY FILTER BUTTON  */

const uniqueList = [
    ...new Set(Productsdetail.map((Productdatamap) => {
        return Productdatamap.catageory
    }))]






const ProductsMenu = () => {

    /* FOR STORING THE PRODUCT DETAILS */

    const [Productdata, setProductdata] = useState(Productsdetail);


    /* FOR STORING THE UNIQUE CATAGEORY OF FILTER BUUTON */

    const [Uniquedata, setUniquedata] = useState(uniqueList);


    /* FOR SEARCHING THE PRODUCt */

    const [search, setSearch] = useState('');

    /* FOR FILTER THE PRODUCTS */

    const filter = (catageory) => {
        const updatelist = Productsdetail.filter((Productdatamap) => {
            return Productdatamap.catageory === catageory
        });
        setProductdata(updatelist)
    }

    return (
        <Fragment>


            <div className='coulmn-divison'  /*  this div for the coulmn division */ >
                <div className='product-filter-button'>
                    <input type="text" placeholder='Search Here' className='input-search' value={search} onChange={(e) => setSearch(e.target.value)} />
                    <h1 style={{ padding: '20px 20px' }}>Catageory</h1>
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
                {/* FOR CALLING THE PRODUCT CARD DATA */}
                <div>
                    <Products search={search} setSearch={setSearch} Productdata={Productdata} />
                </div>
            </div>
        </Fragment>
    )
}

export default ProductsMenu