import './App.css';
import TodoList from './TodoList';
import {todos} from './STORE';

function App() {
  
  return (
    <TodoList items ={todos}/>
  );
}

export default App;
