import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const ShowOne = (props) => {
    const {id} = useParams();
    const [product, setProduct] = useState([])


    useEffect( () => {
        axios.get("http://localhost:8000/api/products/"+id)
        .then( res => {
            console.log(res.data.product);
            setProduct(res.data.product);
        })
        .catch( err => console.log(err))
    }, [id] )

    return (
    <div>

        <h3>{product.title}</h3>
        <p>{product.price}</p>
        <p>{product.description}</p>


    </div>
    )};

export default ShowOne;
