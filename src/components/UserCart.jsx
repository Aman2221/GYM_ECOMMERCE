import { Button } from '@material-ui/core';
import React from 'react'
import { useEffect, useState } from 'react';
import { useStateValue } from '../StateProvider'
import '../styles/Cart.css'
import { db } from '../firebase'
const UserCart = () => {

    const [{basket,user}] = useStateValue();
    const handleProduct = () => {
        basket.map(item => (
                    db.collection('user_details').add({
                        name : user.displayName,
                        email : user.email,
                        product_name : item.cardContent,
                        price : item.price
                    }).then(() => {
                        
                    })
            ))
            window.confirm(`${basket.length} Products are in the cart please confirm booking ✔️`)
        }
    return (
         <div className='cart'>
            {
                basket.map(item => (
                    <div className='cart_products'>
                        <img src={item.imgSrc} alt="product image"/>
                        <div className='product_details'>
                            <p>{item.cardContent}</p>
                            <h6>{item.price}</h6>
                                <Button variant="contained" color="secondary" onClick={handleProduct}>Buy Now</Button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default UserCart
