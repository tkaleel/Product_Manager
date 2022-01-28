import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const New = (props) => {

    let history = useHistory();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const createProduct = (e) => {
        e.preventDefault();

        //create object from the form
        const newProduct = {
            title: title,
            price: price,
            description: description
        }
        //send post request to database
        axios.post("http://localhost:8000/api/products", newProduct)
        .then(res=> {
            console.log(res.data);
            console.log("Success writing to the database!");
            history.push("/");
        })
        .catch(err =>{
            console.log("❌ERROR write to DB failed");
            console.log(err);
        })
    }

    return <div>
        <h3>Form</h3>
        {JSON.stringify(title)}
        <form onSubmit={createProduct}>
            Title:
            <input type="text" onChange={e => setTitle(e.target.value)} value={title}/> 
            <br/>
            Price:
            <input type="number" onChange={e => setPrice(e.target.value)} value={price}/>
            <br />
            Description:
            <textarea onChange={e => setDescription(e.target.value)} value={description}/>
            <br />
            <button>Submit</button>
        </form>
    </div>;
};

export default New;
