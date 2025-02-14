import React from "react";
import axios from "axios";
import './sendpost.css';

function SendPost() {
    
    return (
        <div className="send">
            <form>
                <label>Title :</label>
                <input type="text" name="title" placeholder="Enter title" required></input>
                <br></br>
                <label>Body:</label>
                <textarea type="text" name="body" placeholder="Enter body" required></textarea>
                <br></br>
                <button type="submit" >Send</button>
            </form>

        </div>
    );
}
export default SendPost;
