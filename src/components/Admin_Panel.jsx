import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import '../styles/AdminPanel.css'

const Admin_Panel = () => {

    const [proData, setProData] = useState([]);

    useEffect(() => {
        db.collection('user_details').onSnapshot((snapshot) => {
            setProData(snapshot.docs.map(doc => (doc.data())))
        })
    }, [])

    return (
        <div className='admin_panel'>
            <div className="admin_data">
            <ul>
            <li>
            <h6 className='table_head'><i className='bx bxs-calendar-check'></i>Name</h6>
                {
                proData.map((item) => (
                        <p className='table_data'>
                        {item.name}
                        </p>  
                ))}
            </li>
            <li >
                <h6 className='table_head'><i className="far fa-envelope"></i>Email</h6>
                {
                proData.map((item) => (
                    <p className='table_data'>
                    {item.email}
                    </p>  
                ))}
                
            </li>
            
            <li >
                <h6 className='table_head'><i class="fas fa-dollar-sign"></i>Price</h6>
                {
                    proData.map((item) => (
                    <p className='table_data'>
                    {item.price}
                    </p>  
                ))}
            </li>
            <li >
                <h6 className='table_head'><i class="fas fa-archive"></i>Product Details</h6>
                {
                    proData.map((item) => (
                    <p className='table_data'>
                    {item.product_name}
                    </p>  
                ))}
            </li>
            </ul>
            </div>
        </div>
    )
}

export default Admin_Panel
