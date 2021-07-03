import { useState } from "react";
import axios from 'axios';


const TodoItems = (props) => {
    const [isEditing, setIsEditing] = useState();
    const [tempValue, setTempValue] = useState(props);
    const [isCompleted, setIsCompleted] = useState(props.isCompleted);

    const editRequestClick = ()  => {
        setIsEditing(true);
    }
    const editDoneClick = ()  => {
        setIsEditing(false);
    }
    const handleEnterAndESC = (event)  => {
        const key = event.keyCode;
        
        //Key is Enter || Exit
        if(key===13 && tempValue.title.trim()!=='' && tempValue.description.trim()!=='' )
        {
            async function patchRequest(){
                await axios({
                method: "PATCH",
                url: `http://localhost:5000/todo/${props.id}`,
                data: JSON.stringify(tempValue),
                headers: { "Content-Type": "application/json" },
              }).then(()=>{
                setIsEditing(false);
                props.setListChanged(prevState=>!prevState);
            }).catch((err)=>{
                console.log(err);
              })
            }patchRequest();
           
           
        }
        if(key===27){
            setIsEditing(false);
            setTempValue(props);      
        }
    }
    const inputChangeHandler = (event)  => {
        
        if(event.target.name==='title'){
            setTempValue({
                ...tempValue,
                title:event.target.value
            });
        
        }
        if(event.target.name==='description'){
            setTempValue({
                ...tempValue,
                description:event.target.value
            });
        }
    }

    const completionHandler = ()  => {
        async function patchRequest(){
            await axios({
            method: "PATCH",
            url: `http://localhost:5000/todo/${props.id}`,
            data: JSON.stringify({isCompleted:!isCompleted}),
            headers: { "Content-Type": "application/json" },
          }).then(()=>{
            setIsCompleted(prevState=>!prevState);
        }).catch((err)=>{
            console.log(err);
          })
        }patchRequest();        
            
    }

    const taskDeleteHandler = ()  => {
        console.log(props.id);  
        props.deleteTask(props.id);      
    }

    return(<>
     
    <div className='row' >
        {isEditing ?
        <>
        <div className='column ten wide'> 
            <div className='ui input fluid'>
                <input 
                    onChange={inputChangeHandler}
                    onKeyDown={handleEnterAndESC}
                    autoFocus={true}
                    value={tempValue.title}
                    name='title'
                />
                <input 
                    onChange={inputChangeHandler}
                    onKeyDown={handleEnterAndESC}
                    value={tempValue.description}
                    name='description'
                />
            </div>           
        </div>
        <div className='column one wide' onClick={editDoneClick} >
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
                    <div className="content" style={(isCompleted) ? {color:'green'} : {} }>
                        <div className={"ui header" + (isCompleted) ? " green" : ""}>
                        {props.title}
                        </div>
                        {props.description}
                    </div>
                </div>
            </div>
        </div>
        <div className='column two wide'>
            <button onClick={completionHandler} className='ui button circular icon blue'>
                <i className={(isCompleted) ? 'calendar check outline icon white': 'calendar outline icon white'}></i>
            </button>
            <b style={{color:'#2185d0'}}>{isCompleted ? 'Done' : 'Pending'}</b>
        </div>


        <div className='column two wide' >
            <button type='submit' onClick={editRequestClick} className='ui button circular icon black'>
                <i className="edit icon white"></i>
            </button>
            <b>Edit</b>
        </div>

        
        <div className='column two wide'>
            <button type='submit' onClick={taskDeleteHandler} className='ui button circular icon red'>                
                <i className="trash alternate outline icon white"></i>
            </button>
            <b style={{color:'#db2828'}}>Delete</b>
        </div>
        </>
        }
    </div>
    </>
    
)

};

export default TodoItems;
