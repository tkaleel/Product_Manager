import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const Edit = (props) => {
    let history = useHistory();
    const { id } = useParams();


    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                console.log(res.data.product);
                setTitle(res.data.product.title);
                setPrice(res.data.product.price);
                setDescription(res.data.product.description);
            })
            .catch(err => console.log(err))
    }, [id])

    const updateProduct = (e) => {
        e.preventDefault();

        //create object from the form
        const newProduct = {
            title: title,
            price: price,
            description: description
        }
        //send post request to database
        axios.put("http://localhost:8000/api/products/" + id, newProduct)
            .then(res => {
                console.log(res.data.product);
                console.log("Success writing to the database!");
                history.push("/");
            })
            .catch(err => {
                console.log("❌ERROR write to DB failed");
                console.log(err);
            })
    }


    return (
        <div>
            <h3>Update</h3>
            {JSON.stringify(title)}
            <form onSubmit={updateProduct}>
                Title:
                <input type="text" onChange={e => setTitle(e.target.value)} value={title} />
                <br />
                Price:
                <input type="number" onChange={e => setPrice(e.target.value)} value={price} />
                <br />
                Description:
                <textarea onChange={e => setDescription(e.target.value)} value={description} />
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
};

export default Edit;
