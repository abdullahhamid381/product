import React from 'react'
import { ProductImg } from '../Data/Data'
const FilterMenu = (title) => {
    const updatelist = ProductImg.filter((title)=>{
return 
    })
    return (
        <div>
            <div >
                <span className='buttons'>
                    <button onClick={()=>FilterMenu('Clothes')}>Clothes</button>
                    <button>Jewlery</button>
                    <button>Watches</button>
                    <button>Shoes</button>
                    <button>Glasses</button>
                </span>
            </div>
        </div>
    )
}

export default FilterMenu