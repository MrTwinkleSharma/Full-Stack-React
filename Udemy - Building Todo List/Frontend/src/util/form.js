import React, { useState } from "react";

const Form = () =>{
    const [input, setInput] = useState();
    const handleInputChange = (event) =>{
        setInput(event.target.val);
    }

    return <form className='ui form'>
    <div className='ui container'>
        <div className='ui grid center aligned'>
            <div className='row'>
                <div className='column five wide'>
                    <input type='text' name='task' placeholder='Enter some task to do!' value={input} onChange={handleInputChange}/>
                </div>
                <div className='column one wide'> 
                    <button type='submit' className='ui button circular icon green'><i className='plus icon white' ></i></button>
                </div>
            </div>
        </div>
    </div>
    </form>
    
}

export default Form;