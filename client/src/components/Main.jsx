import React, {useState, useEffect} from 'react';
import axios from 'axios';
import style from '../components/Main.module.css';
import {Link} from 'react-router-dom';

const Main = (props) => {

    const [products, setProducts] = useState([])

    useEffect( () => {
        getProductsFromDB()
    }, [] ) 

    const getProductsFromDB = () =>{
        axios.get("http://localhost:8000/api/products")
        .then( res => {
            console.log(res.data.products);
            setProducts(res.data.products);
        })
        .catch( err => console.log(err))
    }

    return (
        <div>
            <h3>All Products</h3>
            {/* {JSON.stringify(products)} */}
            <hr />
            {
                products.map((product, idx) => {
                    return(
                        <div key={product._id} className={style.product}>
                            <Link to={"/products/" +product._id}>
                            <h3>{product.title}</h3>
                            </Link>
                            <p>${product.price}</p>
                            <p>{product.description}</p>
                            <p>Product Created: {Date(product.createdAt)}</p>
                            <p><button>Edit</button> | <button>Delete</button></p>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Main;