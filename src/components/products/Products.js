import React from 'react'

 function Products({products, addtoCart}) {
  return (
    <div>
        <div className='row'>
            {products?.map((val,index)=> 
                <div className='card' style={{width: '15rem'}} key={index}>
                    <img src={val?.image} className='card-img-top' alt=""/>
                    <div className='card-body'>
                        <p className='card-title'>{val.title}</p>
                        <p className='card-text'>{val.price}</p>
                        <div className='btn btn-block btn-success' onClick={()=>addtoCart(val)}>
                            Add
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Products
