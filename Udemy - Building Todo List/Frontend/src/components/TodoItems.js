import { useState } from "react";

const TodoItems = (props) => {
    const [isEditing, setIsEditing] = useState();

    const editRequestClick = ()  => {
        setIsEditing(true);
    }
    const editDoneClick = ()  => {
        setIsEditing(false);
    }
    const handleInput = (event)  => {
        const key = event.keyCode;
        
        //Key is Enter or Exit
        if(key===13 || key===27)
            setIsEditing(false);
    }

    return(
    isEditing ?
    <div className='row' >
        <div className='column nine wide'> 
            <div className='ui input fluid'>
                <input 
                    onKeyDown={handleInput}
                    autoFocus={true}
                />
            </div>           
        </div>
        <div className='column two wide' onClick={editDoneClick} >
            <button type='submit' className='ui button circular icon green'>                
                <i className="check circle icon white"></i>
            </button>
        </div>
    </div>
    
    :

    <div className='row' >
        <div className='column five wide'>                  
            <div className="ui list">
                <div className="item">
                    <div className="content">
                        <div className="header">
                        {props.title}
                        </div>
                        {props.description}
                    </div>
                </div>
            </div>
        </div>
        <div className='column two wide' onClick={editRequestClick}>
            <button type='submit' className='ui button circular icon black'>
                <i className="edit icon white"></i>
            </button>
            Edit
        </div>

        <div className='column two wide'>
            <button type='submit' className='ui button circular icon blue'>
                <i className="calendar check icon white"></i>
            </button>
            Done
        </div>

        <div className='column two wide'>
            <button type='submit' className='ui button circular icon red'>                
                <i className="minus circle icon white"></i>
            </button>
            Delete
        </div>
    </div>
)

};

export default TodoItems;
