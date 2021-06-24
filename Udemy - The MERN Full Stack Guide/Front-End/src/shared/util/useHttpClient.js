import { useCallback, useState } from "react";

export const useHttpClient =  () =>{
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const clearError = () => {
        setError(null);
    }

    const sendRequest = useCallback(async (requestObject) => {
        console.log(requestObject)
        setIsLoading(true);
        try{
            const response =  await fetch(`http://localhost:5000${requestObject.api}`, {
                method:requestObject.method,
                headers:{
                    "Content-Type": "application/json; charset=UTF-8"
                },
                body:JSON.stringify(requestObject.body)
            });
            const responseData = await response.json();
            console.log("Working Inside", responseData);
            setIsLoading(false);
            if(!response.ok)
            {
                throw Error(responseData.message);
            }
            return responseData;

        }
        catch(err){
            setIsLoading(false);  
            setError(err.message || 'Something Went Wrong!');
        }
    },[]);
    return [isLoading, error, clearError, sendRequest];
}