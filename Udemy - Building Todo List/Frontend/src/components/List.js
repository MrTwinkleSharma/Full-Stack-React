import TodoItems from "./TodoItems";


const List = (props) => {  

    if(props.list.length===0)
    {
        return <div className='ui grid center aligned'>
                No items are Found!
            </div>
    }

    return <div className='ui grid center aligned'>
        {props.list.map(todo =>  
            <TodoItems 
                key={todo.title} 
                id={todo.title} 
                title={todo.title}
                description={todo.description}
                isCompleted={todo.isCompleted}
                deleteTask={props.deleteTask}
            />    
        )}
        </div>;
};

export default List;