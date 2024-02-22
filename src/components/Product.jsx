import React from 'react'

import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({items,cart,setCart}) => {

  const addToCart=(id,price,title,description,imgSrc)=>{
    const obj={
      id,price,title,description,imgSrc
    }
    setCart([...cart,obj]);
    console.log("cart element =",cart)
    const notify = () => toast("Item added on Cart!");
    notify()
  }


  return (
   <>
   <ToastContainer />
   
   <div classNameName="container ">
   
    {
        items.map((product)=>{
            return(
                <>
              
                <div className="card">
                  <Link to={`/product/${product.id}`}
                  style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                  }}>
  <img src={product.imgSrc} className="card-img-top"  alt="..."/></Link>
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text ">{product.description}</p>
    <button className='btn btn-primary mx-3'>{product.price} ₹</button>
    <button 
    onClick={()=>addToCart(product.id,product.price,product.title,product.description,product.imgSrc)}
    className='btn btn-warning'>Add To Cart</button>
  </div>
  </div>
                </>
            )
        })
    }
   </div>

   </>
  )
}

export default Product
