import { useState } from "react";

function useInput(){
  
    const [value ,setValue ] = useState('');
   
    const bind = {
        value,
        onChange(event){
        console.log(event.target.value);
        setValue(event.target.value);
        }
    }
    return [value, bind];

}

export default useInput;

