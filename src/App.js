// import logo from './logo.svg';
import './App.css';
// import {Form} from 'react-bootstrap'
import { PrimaryButton, TestButton} from './Components/Buttons'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import BasicExample from './Components/Forms';
import { Container } from 'react-bootstrap';
import BasicCardExample from './Components/Cards';

function App() {
  return (
    <div className="App">
      <Container>
      React App Demo
      <Button>Test Button</Button>
       <TestButton buttonname={"login"}/>
       <TestButton buttonname={"sign up"}/>
       <PrimaryButton></PrimaryButton>
       <BasicExample></BasicExample>
       <BasicCardExample></BasicCardExample>
      <TestButton/>
      </Container>
      
    </div>
  );
}

export default App;