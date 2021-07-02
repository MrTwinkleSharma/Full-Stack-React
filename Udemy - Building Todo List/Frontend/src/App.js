import { useState } from 'react';
import List from './components/List';
import Section from './components/Section';
import Form from './util/form';
import dummyList from './dummyList';

function App() {
  const [list, setList] = useState(dummyList);

  const addTask = (task)=>{
    console.log(task);
    setList(prevList=>[...prevList, task]); 
  }
  const deleteTask = (taskId)=>{
    console.log(taskId);
    setList(prevList=>prevList.filter((prevListItem)=>taskId!==prevListItem.title)); 
  }


  return(  
    <div className='ui container center aligned'>
    <Section> 
   <h1>To Do Application</h1>
   </Section>
   <Section>
    <Form addTask={addTask}/>
    </Section>
    <List list={list} deleteTask={deleteTask}/>
   </div>
  );
}

export default App;
