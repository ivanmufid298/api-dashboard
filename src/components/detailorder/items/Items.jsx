import React, { useState } from 'react'
import image1 from '../../../img/image1.jpeg'
import image2 from '../../../img/image2.jpg'
import image3 from '../../../img/image3.jpg'
import image4 from '../../../img/image4.jpg'
import "./items.css"
/* eslint-disable */

function Items() {
    const [images, setImages] = useState([image1, image2, image3, image4]);
  
    const renderedItems = images.map((img, index) => {
      return (
        <div key={index} className="container-item">
          <div className="box-image">
            <img src={img} alt={img} />
          </div>
          <div className="box-text">
            <span className="text1">Fresh Salad Bowl</span>
            <span className="text2">Extra Sweet Corn</span>
          </div>
          <div className="box-quantity">
            <span>2 Items</span>
          </div>
        </div>
      );
    });
  
    return <section className="items">{renderedItems}</section>;
  }

export default Items