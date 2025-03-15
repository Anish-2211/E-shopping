import React, { useContext } from 'react'
import "./ProductDisplay.css"
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'


const ProductDisplay = (props) => {
    const{product} = props;
    const{addToCart} = useContext(ShopContext);
  return (
    <div className='productDisplay'>
        <div className="productDisplay-left">
            <div className="productDisplay-img-list">
                <img src={product.image} alt="img" />
                <img src={product.image} alt="img" />
                <img src={product.image} alt="img" />
                <img src={product.image} alt="img" />

            </div>

            <div className="productDisplay-image">
                <img src={product.image} alt="img" className="productDisplay-main-img" />
            </div>
        </div>


        <div className="productDisplay-right">
            <h1>{product.name}</h1>
            <div className="productDisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productDisplay-right-prices">
                <div className="productDisplay-right-price-old">${product.old_price}</div>
                <div className="productDisplay-right-price-new">${product.new_price}</div>
            </div>

            <div className="productDisplay-right-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                 Dicta aut totam velit sapiente accusamus eum esse itaque a,
                  autem deleniti porro optio harum exercitationem qui sed magni. 
                  Laboriosam, magnam? Excepturi?
            </div>
            <div className="productDisplay-right-size">
                <h1>Select Size</h1>
                <div className="productDisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productDisplay-right-category'>
                <span>Category: </span>Women, T_Shirt, Crop Top
            </p>

            <p className='productDisplay-right-category'>
                <span>Tags: </span>Modern, Latest
            </p>
        </div>
      
    </div>
  )
}

export default ProductDisplay
