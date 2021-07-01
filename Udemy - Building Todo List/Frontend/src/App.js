import './App.css';
import Form from './util/form';

function App() {
  return (
    //This Css class will give a container which is center aligned 
   <div className='ui container center aligned'>
   <h1>To Do Application</h1>
    <Form type={["text"]} name={["title"]}/>
   </div>

  );
}

export default App;
