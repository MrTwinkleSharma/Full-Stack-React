import listArray from "./dummyList";
import TodoItems from "./TodoItems";


const List = () => {  

    return <div className='ui grid center aligned'>
        {listArray.map(todo =>  
            <TodoItems 
                key={todo.title} 
                title={todo.title}
                description={todo.description}
                isCompleted={todo.isCompleted}
            />    
        )}
        </div>;
};

export default List;