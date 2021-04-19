import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ComponentA(){
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState('');
        const [fetchedData, setFetchedData] = useState({});
                
        useEffect(
                ()=>{
                        axios('https://jsonplaceholder.typicode.com/postss/1')
                        .then(Response => {
                                setLoading(false);
                                setError('');
                                setFetchedData(Response.data);
                                console.log(Response);
                        })
                        .catch(Error => {
                                setLoading(false);
                                setError('Something Went Wrong!');
                                setFetchedData({});
                                console.log(Error);
                        })
                }
        , []);
 

        return <>
        {loading ? 'Loading' :fetchedData.title}
        {error ? error : null}
        </>
        
}

export default ComponentA;
