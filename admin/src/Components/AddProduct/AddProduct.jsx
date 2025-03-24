import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'

const AddProduct = () => {
    const[image, setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:""
    })


    const imageHandler = (e)=>{
        setImage(e.target.files[0]);
    }

    const changeHandler = (e)=>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
        }

        const addProduct = async()=>{
            console.log(productDetails)
            let responseData;
            let product = productDetails;

            let formData = new FormData();
            formData.append('product',image);

            await fetch("http://localhost:5007/upload",{
                method:'POST',
                headers:{
                    Accept: "application/json"
                },
                body: formData,
            }).then((resp)=> resp.json())
            .then((data)=> responseData = data);

            // console.log(responseData)
            
            if(responseData.Success){
                // console.log("hello")

                product.image = responseData.image_url;
                // console.log(product)
                await fetch('http://localhost:5007/addproduct',{
                    method:'POST',
                    headers:{
                        Accept:'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(product),
                }).then((resp)=>resp.json()).then((data)=>{
                    console.log("data")
                    data.success? alert('product added') :alert('failed')
                })
            }

        }



  return (
    <div className='add-product'>
        <div className="addproduct-itemfield">
            <p>Product Title</p>
            <input type="text" placeholder='Type here' name='name' value={productDetails.name} onChange={changeHandler} />
        </div>


        <div className="addproduct-price">
            <div className="addproduct-itemfield">
                <p>Price</p>
                <input value={productDetails.old_price} onChange={changeHandler} type="text" placeholder='Type here' name='old_price' />
            </div>
        
            <div className="addproduct-itemfield">
                <p>Offer Price</p>
                <input value={productDetails.new_price} onChange={changeHandler} type="text" placeholder='Type here' name='new_price' />
            </div>
        </div>

        <div className="addproduct-itemfield">
            <p>Product Category</p>
            <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="kid">Kid</option>
            </select>
        </div>
        <div className="addproduct-itemfield">
            <label htmlFor="file-input">
                <img src={image?URL.createObjectURL(image) : upload_area} className='addproduct-thumnail-img' />
            </label>
            <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
        </div>
            <button onClick={()=> {addProduct()}} className="addproduct-btn">ADD</button>
      
    </div>
  )
}

export default AddProduct
