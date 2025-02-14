import React,{useState,useEffect} from "react";
import axios from 'axios';
import './navbar.css';



function GetPost(){
    const[data, setdata]= useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response=>setdata(response.data)).catch(err=>console.log(err));

    })
    return(
        <div className="post">
            {
                data.map((obj)=>{
                    return(
                        <div className="design">
                            <h2>{obj.title}</h2>
                            <p>{obj.body}</p>
                        </div>
                    )
                })
            }
            
        </div>
    );
}
export default GetPost;