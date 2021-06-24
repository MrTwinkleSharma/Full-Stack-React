//3rd Party Modules
import React, { useEffect,useState } from 'react';

//Local Modules
import UserList from '../Components/UserList';
import LoadingSpinner from '../../shared/Components/UIElements/LoadingSpinner';
import ErrorModal from '../../shared/Components/UIElements/ErrorModal';

function Users (){
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [loadedUsers, setLoadedUsers] = useState([]);
    
    useEffect(()=>{

        //IIFE
        const sendRequest = async ()=>{
            try{
                setIsLoading(true);
                const response  = await fetch('http://localhost:5000/api/users',{
                    headers:{
                        'Content-Type':"application/json ; charset=UTF-8"                    
                    },
                    method:'GET'                 
                })
                const responseData = await response.json();
                setIsLoading(false);

                if(!response.ok) throw Error(response.message);

                const ITEMS = responseData.data;
                setLoadedUsers(ITEMS);
                // console.log(ITEMS);
            }
            catch(err){
                setIsLoading(false);
                setError(err.message || "Something Went Wrong!");
            }
        }
        sendRequest();

    }
    ,[]);
    const errorHandler = ()=>{
        setError(null);
    }

    return <>
    {isLoading && <div className='center'> <LoadingSpinner asOverlay/> </div>}
    {error && <ErrorModal onClear={errorHandler} error={error}/>}
    {!isLoading && !error && <UserList items={loadedUsers}></UserList> }
    </>
}
export default Users;