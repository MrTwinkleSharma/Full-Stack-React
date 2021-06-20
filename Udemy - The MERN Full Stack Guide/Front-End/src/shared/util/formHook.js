//3rd Party Modules
import { useCallback, useReducer } from 'react';

const formReducer = (currentStateOfInput, action) =>{
    switch(action.type)
    {
        case 'input_change':            
            let isFormValid = true;
            for(const inputId in currentStateOfInput.inputs)
            {
                // Considering the input field which is changed
                if(action.inputId === inputId)
                {
                    isFormValid = isFormValid && action.isValid
                }

                // Considering the input field which were not changed in last event
                else
                isFormValid = isFormValid && currentStateOfInput.inputs[inputId].isValid;
            }
            return {
                ...currentStateOfInput,
                inputs: {
                  ...currentStateOfInput.inputs,
                  [action.inputId]: { value: action.value, isValid: action.isValid }
                },
                isFormValid: isFormValid
              };                
        default:
            return currentStateOfInput;
    }
  
};
function useForm (initialStateofForm, initialValidityOfForm){

   const [currentStateOfInput, dispatch] = useReducer(formReducer,{
        inputs:initialStateofForm,
        isFormValid: initialValidityOfForm});

    const inputChangeHandler = useCallback((id, currentValue, isValid) => {
        dispatch({type:'input_change',inputId:id, isValid:isValid, value:currentValue});
    
    },[]);
    return [currentStateOfInput,inputChangeHandler];
}

export default useForm;
