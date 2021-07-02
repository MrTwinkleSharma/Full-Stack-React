import React, { useState } from "react";

const Form = () =>{
    const [task, setTask] = useState({
        title:'',
        description:'',
        isCompleted:false
    });
    const handleTaskInputChange = (event) =>{
        if(event.target.name==='title'){
            setTask({
                ...task,
                title:event.target.value
            });
        
        }
        if(event.target.name==='description'){
            setTask({
                ...task,
                description:event.target.value
            });
        }
    }

    const taskSubmitHandler = (event) =>{
        event.preventDefault();
        console.log(task)
    
    }

    return <form className='ui form' onSubmit={taskSubmitHandler}>
    <div className='ui container'>
        <div className='ui grid center aligned'>
            <div className='row'>
                <div className='column five wide'>
                    <input type='text' name='title' placeholder='Enter some task title to do!' value={task.title} onChange={handleTaskInputChange}/>
                </div>
                <div className='column five wide'>
                    <input type='text' name='description' placeholder='Enter some task descritpion to do!' value={task.description} onChange={handleTaskInputChange}/>
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