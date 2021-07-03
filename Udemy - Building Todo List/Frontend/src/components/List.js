import TodoItems from "./TodoItems";


const List = (props) => {  

    if(props.list.length===0)
    {
        return <div className='ui grid center aligned'>
                <div className='row'>
                    <div className='column twelve wide' style={{border:'1px solid black' }}> No items are Found!</div>
                </div>
            </div>
    }

    return <div className='ui grid center aligned'>
        {props.list.map(todo =>  
            <TodoItems 
                key={todo.id} 
                id={todo.id} 
                title={todo.title}
                description={todo.description}
                isCompleted={todo.isCompleted}
                deleteTask={props.deleteTask}
                setListChanged={props.setListChanged}
            />    
        )}
        </div>;
};

export default List;