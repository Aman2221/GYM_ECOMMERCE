import { Button } from '@material-ui/core'
import React from 'react'
import '../styles/Products.css'
import { useStateValue } from '../StateProvider'
import { Link } from 'react-router-dom'
import { db } from '../firebase'

const Products = ({imgSrc, price, cardContent, postId}) => {

    const [{basket}, dispatch] = useStateValue();

    const handleCart = () => {
        dispatch({
            type : 'ADD_TO_BASKET',
            item : {
                imgSrc,
                price,
                cardContent,
            }
        })
    }

    return (
        <div className="row">
            <div className="col s12 m7">
                <div className="card">
                    <div className="card-image">
                    <img src={imgSrc} />
                    <span className="card-title">{price}</span>
                    </div>
                    <div className="card-content">
                    <p>{cardContent}</p>
                    </div>
                    <div className="card-action">
                    <Link onClick={handleCart}>
                    Add to wishlist
                    </Link>
                    <Button onClick={handleCart} className='addtocartBtn' variant="outlined" color="secondary">Add to Cart</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
