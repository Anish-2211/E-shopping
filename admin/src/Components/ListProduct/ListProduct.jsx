import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'

const ListProduct = () => {

    const [allproducts, setAllProducts] = useState([]);


    const fetchInfo = async()=>{
        await fetch('https://e-shopping-lhmq.onrender.com/allproducts')
        .then((res)=> res.json())
        .then((data)=> setAllProducts(data));
    }

    useEffect(()=>{
        fetchInfo();
    },[]);


    const removeProduct = async(id)=>{
        await fetch('https://e-shopping-lhmq.onrender.com/removeproduct',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id:id}),
        })
        console.log(id)
        await fetchInfo();
    }

  return (
    <div className='list-product'>
        <h1>All Products List</h1>
        <div className="listproduct-format-main">
            <p>products</p>
            <p>Title</p>
            <p>Old Price</p>
            <p>New Price</p>
            <p>Category</p>
            <p>Remove</p>
        </div>
      
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product,index)=>{
            return <> 
            {/* {console.log(product.id)} */}
            <div key={index} className='listproduct-format-main listproduct-format'>
                <img src={product.image} className="listproduct-product-icon" alt='img' />
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <img onClick={()=>{removeProduct(product.id)}} src={cross_icon} className='listproduct-remove-icon' />


            </div>
            <hr />
            </>
        })}
      </div>
    </div>
  )
}

export default ListProduct
