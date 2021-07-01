import { useState } from "react";

const TodoItems = (props) => {
    const [isEditing, setIsEditing] = useState();

    const doubleClickHandlerToShow = ()  => {
        setIsEditing(true);
    }
    const doubleClickHandlerToHide = ()  => {
        setIsEditing(false);
    }

    return(
    isEditing ?
    <div className='row' onDoubleClick={doubleClickHandlerToHide}>
        <div className='column five wide'> 
            Editing Will be processed Here!!              
        </div>
        <div className='column two wide'>
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
    
    :

    <div className='row' onDoubleClick={doubleClickHandlerToShow}>
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
        <div className='column two wide'>
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
