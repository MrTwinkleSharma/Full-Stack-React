import React, { useState,useEffect } from 'react';
import axios from 'axios';

function DataFetchingFunctional () {

    const [post,SetPost] = useState({});
    const [id, SetId] = useState(1);
    const [changed, setChange] = useState(false);
    
    useEffect(
        ()=>{
            let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
            axios.get(url)
            .then(response => {
                console.log(response);
                SetPost(response.data)
            })
            .catch(error=> console.log(error))
            // setChange(false);
        }
            
    ,[changed])

    return  <> <h1>Fetched Data</h1>
        <span>Enter Id Number: 
            <input type='text' value={id} onChange={(event)=>SetId(event.target.value)}/>
            <button onClick={()=>setChange(true)}>Get Data</button>
        </span>
        <div key={post.id}> {post.title}</div>
        </>
}

export default DataFetchingFunctional;