import TodoItems from "./TodoItems"

const List = (props) => {
    return <div className='ui grid center aligned'>
        <TodoItems 
        title='Codechef Lunchtime' 
        description='You must have to participate in the July lunchtime'/>
        <TodoItems 
        title="Complete Explore's Book App"
        description="Mern application explore's book is pending"/>
        <TodoItems 
        title="E-Commerce React & React Native" 
        description='Main Project as MERN Developer'/>
    </div>

};

export default List;