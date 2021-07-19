import './App.css';
import { Button } from 'semantic-ui-react';
import { Button as Button2 } from 'gestalt';

function App() {
  return (
    <>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
      <Button2 text="Medium-sized button" />
    </>
  );
}

export default App;
