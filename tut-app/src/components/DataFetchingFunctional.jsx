import React, { useState,useEffect } from 'react';
import axios from 'axios';

function DataFetchingFunctional () {

    const [post,SetPost] = useState({});
   
    //Important for controlled input
    const [id, SetId] = useState(1);
    
    //Important for our useEffect
    const [idForRender, setidForRender] = useState(1);
    
    useEffect(
        ()=>{
            let url = `https://jsonplaceholder.typicode.com/posts/${idForRender}`;
            axios.get(url)
            .then(response => {
                console.log(response);
                SetPost(response.data)
            })
            .catch(error=> console.log(error))
            // setChange(false);
        }
            
    ,[idForRender])

    return  <> <h1>Fetched Data</h1>
        <span>Enter Id Number: 
            <input type='text' value={id} onChange={(event)=>SetId(event.target.value)}/>
            <button onClick={()=>setidForRender(id)}>Get Data</button>
        </span>
        <h2>
        <div>Showing Id Number {idForRender}</div>
        <div key={post.idForRender}> {post.title}</div>
        </h2>
        </>
}

export default DataFetchingFunctional;