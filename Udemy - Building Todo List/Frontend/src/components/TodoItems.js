import { useState } from "react";

const TodoItems = (props) => {
    const [isEditing, setIsEditing] = useState();
    const [value, setValue] = useState(props);
    const [tempValue, setTempValue] = useState(props);

    const editRequestClick = ()  => {
        setIsEditing(true);
    }
    const editDoneClick = ()  => {
        setIsEditing(false);
    }
    const handleEnterAndESC = (event)  => {
        const key = event.keyCode;
        
        //Key is Enter || Exit
        if(key===13)
        {
            setValue(tempValue);
            setIsEditing(false);
        }
        if(key===27){
            setIsEditing(false);
        }
    }
    const inputChangeHandler = (event)  => {
        setTempValue({
            ...value,
            title:event.target.value
        })
    }

    return(
    <div className='row' >
        {isEditing ?
        <>
        <div className='column nine wide'> 
            <div className='ui input fluid'>
                <input 
                    onChange={inputChangeHandler}
                    onKeyDown={handleEnterAndESC}
                    autoFocus={true}
                    value={tempValue.title}
                />
            </div>           
        </div>
        <div className='column two wide' onClick={editDoneClick} >
            <button type='submit' className='ui button circular icon green'>                
                <i className="check circle icon white"></i>
            </button>
        </div>
        </>
        :
        <>
        <div className='column five wide'>                  
            <div className="ui list">
                <div className="item">
                    <div className="content">
                        <div className="header">
                        {value.title}
                        </div>
                        {value.description}
                    </div>
                </div>
            </div>
        </div>
        <div className='column two wide' onClick={editRequestClick}>
            <button type='submit' className='ui button circular icon black'>
                <i className="edit icon white"></i>
            </button>
            <b>Edit</b>
        </div>

        <div className='column two wide'>
            <button type='submit' className='ui button circular icon blue'>
                <i className="calendar check icon white"></i>
            </button>
            <b style={{color:'#2185d0'}}>Done</b>
        </div>

        <div className='column two wide'>
            <button type='submit' className='ui button circular icon red'>                
                <i className="minus circle icon white"></i>
            </button>
            <b style={{color:'#db2828'}}>Delete</b>
        </div>
        </>
        }
    </div>
    
)

};

export default TodoItems;
