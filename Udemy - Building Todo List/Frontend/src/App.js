import { useEffect, useState } from 'react';
import List from './components/List';
import Section from './components/Section';
import Form from './util/form';
import axios from 'axios';

function App() {
  const [list, setList] = useState();
  const [fetchingList, setFetchingList] = useState(true);
  const [listChanged, setListChanged] = useState(true);

  useEffect(()=>{
    async function getRequest(){
      const response =  await axios.get('http://localhost:5000/todo');
      console.log(response.data.data);
      setList(response.data.data);
      setFetchingList(false);
    }getRequest();
  },[listChanged]);

  const addTask = (task)=>{
    console.log(task);
    async function postRequest(){
      await axios({
      method: "POST",
      url: "http://localhost:5000/todo",
      data: JSON.stringify(task),
      headers: { "Content-Type": "application/json" },
    })
    }postRequest();
    setListChanged(prevState=>!prevState);

  }

  const deleteTask = (taskId)=>{
    console.log(taskId);
    async function deleteRequest(){
      await axios({
      method: "DELETE",
      url: `http://localhost:5000/todo/${taskId}`,
      headers: { "Content-Type": "application/json" },
    })
    }deleteRequest();
    setListChanged(prevState=>!prevState);
  }

  return<>
        <div className='ui container center aligned'>
        <Section> 
        <h1>To Do Application</h1>
        </Section>
        <Section>
        <Form addTask={addTask}/>
        </Section>

        {
        fetchingList ?
        <div className="ui">
          <div className="ui active inverted dimmer">
            <div className="ui text loader">Fetching ToDo List!</div>
          </div>
        <p></p>
        </div>
        :
        <List list={list} deleteTask={deleteTask}/>
        }
        </div>
      
        
    </>;
}

export default App;
