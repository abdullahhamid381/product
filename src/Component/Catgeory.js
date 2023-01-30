import React, { useState } from 'react'
import { CatgeoryImgs } from '../Data/Data'
const Catgeory = () => {
    const [stateCatgeory, setsateCatgeory] = useState(CatgeoryImgs);
    return (
        <div className="cata-parent">
            {
                stateCatgeory.map((CatgeoryImgsmap) => {
                    return (
                        <div className='cata-background'>
                            <div>
                                <h1 className='cata-title'>{CatgeoryImgsmap.title}</h1>
                                <h5 className='cata-describe'>{CatgeoryImgsmap.describe}</h5>
                            </div>
                        </div>
                    )
                })

            }

        </div>
    )
}

export default Catgeory