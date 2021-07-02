import { useState } from 'react';
import List from './components/List';
import Section from './components/Section';
import Form from './util/form';
import dummyList from './dummyList';

function App() {
  const [list, setList] = useState(dummyList);

  const addTodo = (task)=>{
    console.log(task);
    setList(prevList=>[...prevList, task]); 
  }

  return(  
    <div className='ui container center aligned'>
    <Section> 
   <h1>To Do Application</h1>
   </Section>
   <Section>
    <Form addTodo={addTodo}/>
    </Section>
    <List list={list}/>
   </div>
  );
}

export default App;
