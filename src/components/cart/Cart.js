import React from 'react'
import { Icon } from '@iconify/react';

function Cart({product,decreament,increament,deleteItem}) {
  return (
    <div>
        {product?.map((val, index)=><div key={index} className='card' style={{width:'25rem'}}>
         <div className='row'>
            <div className='col-6'>
            <img className='card-img-top' style={{width:'5rem'}} src={val.image} alt=''/>
            </div>
            <div className='col-6'>
            <div className='card-body'>
                <p className='card-title'>{val?.title}</p>
                <div className='row'>
                    <div className='col'>
                    <div style={{cursor:'pointer'}} onClick={()=>decreament(val.id)}>
                        -
                    </div>
                    </div>
                    <div className='col'>
                    <p className='card-text'>{val.qty}</p>
                    </div>
                    <div className='col'>
                    <div style={{cursor:'pointer'}} onClick={()=>increament(val.id)}>
                        +
                    </div>
                    </div>
                </div>
                <p className='card-text'>{val.price*val.qty}</p>
                 <Icon icon="mdi:trash-can-outline" color="red" onClick={()=> deleteItem(val.id)}/>
            </div>
            </div>
         </div>
        </div>)}
        {product.length?<div>
            Total : $ {
                product.reduce((sum,item)=>{
                    return sum + (item.qty * item.price)
                },0)
            }</div>:<p>Belum ada produk yang ditambahakan</p>}
        </div>
  )
}

export default Cart
