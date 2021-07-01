import './App.css';
import List from './components/List';
import Section from './components/Section';
import Form from './util/form';

function App() {
  
  return (
    //This Css class will give a container which is center aligned 
   <div className='ui container center aligned'>
    <Section> 
   <h1>To Do Application</h1>
   </Section>
   <Section>
    <Form/>
    </Section>
    <List/>
   </div>

  );
}

export default App;
