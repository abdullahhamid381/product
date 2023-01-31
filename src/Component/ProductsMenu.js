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
    const [search, setSearch] = useState('');
    const filter = (catageory) => {
        const updatelist = Productsdetail.filter((Productdatamap) => {
            return Productdatamap.catageory === catageory
        });
        setProductdata(updatelist)
    }
    console.log(search);
    return (
        <Fragment>


            <div className='coulmn-divison'>
                <div className='product-filter-button'>
                <input type="text" placeholder='Search Here' value={search} onChange={(e)=> setSearch(e.target.value)} />
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

                <div>
                    <Products search={search} setSearch={setSearch} Productdata={Productdata} />
                </div>
            </div>
        </Fragment>
    )
}

export default ProductsMenu