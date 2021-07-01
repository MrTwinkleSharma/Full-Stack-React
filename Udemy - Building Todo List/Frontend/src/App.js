import './App.css';
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
   </div>

  );
}

export default App;
