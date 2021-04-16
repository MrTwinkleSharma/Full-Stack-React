import React, { useState,useEffect } from 'react';
import axios from 'axios';

function DataFetchingFunctional () {

    const [posts,SetPosts] = useState([]);
    
    useEffect(
        ()=>{
            axios.get('https://jsonplaceholder.typicode.com/posts/')
             .then(response => {
            console.log(response);
            SetPosts(response.data)
        })
        .catch(error=> console.log(error))

        }
            
    ,[])

    return  <> <h1>Fetched Data</h1>
            <ul> 
                {
                    posts.length ?
                    posts.map((element)=> <li key={element.id}> {element.title} </li>)
                    : null
                }
            </ul>
        </>
}

export default DataFetchingFunctional;