import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cart from '../cart/Cart'
import { deleteItem } from '../service/products'
import './detailorder.css'


const DetailOrder = () => {
    const dispatch = useDispatch()
    const {cart} = useSelector(state=> state.products)
    const handleDelete = (id)=> dispatch(deleteItem(id))
    const [currentTab, setCurrentTab] = useState()
    const tab = [
        {
            id: 1,
            tabTitle: 'items',
            title: 'title 1',
            content: <Cart product={cart} deleteItem={handleDelete} />
        },
        {
            id: 2,
            tabTitle: 'Progress',
            title: 'title 2',
            content: 'test 2'
        },
        {
            id: 3,
            tabTitle: 'Review',
            title: 'title',
            content: 'test 3 '
        }
    ]

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id)
    }

  return (
    <div className='container container-tab'>
        <h4 className='text-left mt-5' style={{fontWeight:'bold'}}>Detail Order</h4>
        <div className="tabs">
            {tab.map((tab, i) => 
                <button className='text-center'
                    key={i}
                    id={tab.id} 
                    disabled={currentTab === `${tab.id}`}
                    onClick={(handleTabClick)}
                >
                {tab.tabTitle}
                </button>
            )}
        </div>
        <div className="content-tab">
            {tab.map((tab, i) =>
                <div key={i}>
                    {currentTab === `${tab.id}`  &&
                        <div>
                            <p>{tab.title}</p>
                            <p>{tab.content}</p>
                        </div>
                    }
                </div>
            )}
        </div>
    </div>
  )
}

export default DetailOrder