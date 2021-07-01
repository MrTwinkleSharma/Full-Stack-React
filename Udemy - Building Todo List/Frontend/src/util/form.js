import React from "react";

const Form = (props) =>{

    return <form className='ui form'>
    <div className='ui container'>
        <div className='ui grid center aligned'>
            <div className='row'>
                <div className='column five wide'>
                    <input type={props.type[0]} name={props.name[0]} placeholder='Enter some task to do!'/>
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