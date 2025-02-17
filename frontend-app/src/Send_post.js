import React, { useState } from "react";
import axios from "axios";
import "./sendpost.css";

function SendPost() {
    const handleChange = (e)=>{
        setFormData({
            ...FormData,
            [e.target.name]: e.target.value,
        });
        
    }
    const [FormData, setFormData] = useState({
        title: "",
        body: "",
    });
    function handleSubmit (e){
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', FormData)
        .then((response)=>{
            console.log(response);
        })
        
    }

    return (
        <div className="send">
            <form onSubmit={handleSubmit}>
                <label>Title :</label>
                <input
                    type="text"
                    name="title"
                    placeholder="Enter title"
                    value={FormData.title}
                    onChange={handleChange}
                    required
                />
                <br />
                <label>Body:</label>
                <textarea
                    name="body"
                    placeholder="Enter body"
                    value={FormData.body}
                    onChange={handleChange}
                    required
                />
                <br />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default SendPost;
