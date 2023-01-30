import React, { Fragment, useState } from 'react';
import './Style.css'
const Navbar = () => {
    return (
        <Fragment>
          <div className='nav-parent'>
          
          <div className="container-nav">
          <div className="logo">
              <h1>Tac</h1>
          </div>
          <span className='buttons'>
              <button>Clothes</button>
              <button>Jewlery</button>
              <button>Watches</button>
              <button>Shoes</button>
              <button>Glasses</button>
          </span>
      </div>
          </div>

        </Fragment>
    );
}

export default Navbar;
