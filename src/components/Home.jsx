import React, { useEffect, useState } from 'react'
import ReactCarousel from './ReactCarousel'
import '../styles/Home.css'
import Products from './Products'
import { db } from '../firebase'
import Footer from './Footer'

const Home = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        db.collection('products').onSnapshot((snapshot) => {
            setData(snapshot.docs.map(doc => ({
                id : doc.id,
                item : doc.data()
            })))
        })
    }, [])

    return (
        <div>
            <ReactCarousel />
            <div className='products_div'>
             {
                data.map(({id, item}) => (
                    <Products
                    key = {id}
                    postId = {id}
                    imgSrc={item.imgSrc}
                    price = {item.price}
                    cardContent={item.cardContent}
                    />
                ))
            }
            </div>    
            <Footer />
        </div>
    )
}

export default Home
