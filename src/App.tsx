import React from 'react';
import './App.css';
import {Head} from './components/Head'
import {Button} from './components/Button'
import {Input} from './components/Input'
import {ReducerButtons} from './components/ReducerButton'
import {GlobalProvider} from './components/GlobalState'

const App: React.FC = () => {
  return (
    <GlobalProvider>
    <div className="App">
      <Head title="Heyy" isActive={false} />
      <Button onClick={(e) => {
        e.preventDefault()
        console.log("Event", e)
        }}
        >
          children as a prop
        </Button>
        <Input />
        <ReducerButtons />
    </div>
    </GlobalProvider>
  );
}

export default App;
