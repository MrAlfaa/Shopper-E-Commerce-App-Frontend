import React from 'react'
import './Item.css'

const Item = (Props) => {
  return (
    <div className='item'>
        <img src={Props.image} alt="" />
        <p>{Props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                Rs{Props.new_price}
                
            </div>
            <div className="item-price-old">
            Rs{Props.old_price}

            </div>

        </div>

      
    </div>
  )
}

export default Item
