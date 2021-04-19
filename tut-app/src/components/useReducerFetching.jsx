import React, { useEffect, useReducer} from 'react';
import axios from 'axios';

const initialState = {
        loading:true,
        error:'',
        fetchedData:{}
}

const reducer = (currentState, action) => {
        switch(action.type)
        {
                case "FETCHED_SUCCESS":
                        return { loading:false, error:'', fetchedData:action.data}
                case "FAILED":
                        return {loading :false, error:action.error, fetchedData:{}}
                default:
                         return currentState
        }
}
function useReducerFetching(){
       
        const [currentState, dispatch] = useReducer(reducer,initialState);
                                
        useEffect(
                ()=>{
                        axios('https://jsonplaceholder.typicode.com/posts/1')
                        .then(Response => {
                                dispatch({type:'FETCHED_SUCCESS', data:Response.data});
                                console.log(Response);
                        })
                        .catch(Error => {
                                dispatch({type:'FAILED',error:'Something Went Wrong!'});
                                console.log(Error);
                        })
                }
        , []);
                
        

        return <>
        {currentState.loading ? 'Loading' :currentState.fetchedData.title}
        {currentState.error ? currentState.error : null}
        </>
        
}

export default useReducerFetching;
