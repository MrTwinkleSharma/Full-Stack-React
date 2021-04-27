import React, {useReducer} from 'react';


import './Input.css';


const initialValue = {value:'', isValid:false};

const reducer = (currentValue, action) =>{
  switch(action.type)
  {
    case 'change':
      return {
        ...currentValue, 
        value:action.val,
        isValid:true
      };

      default:
        return currentValue;

  }
}
const Input = props => {
  
  const [currentValue, dispatch] = useReducer(reducer, initialValue);

  const changeHandler = event => {
    dispatch({type:'change', val:event.target.value})
}

  const element = props.element==='input' ?(

    <input id={props.id} type={props.type} placeholder={props.placeholder} value={currentValue.value} onChange={changeHandler} />

    ) : (

      <textarea id={props.id} rows={props.rows || 3} value={currentValue.value} onChange={changeHandler}/>

    );

  return <div className={`form-control ${!currentValue.isValid && 'form-control--invalid'}`}>
   <label htmlFor={props.id} > {props.label}</label>
   {element}
   {!currentValue.isValid && <p>{props.errorText}</p>}
  </div>
};

export default Input;
