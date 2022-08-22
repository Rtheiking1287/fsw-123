import './App.css';
import TodoList from './TodoList';
import './STORE';

function App({todos}) {
  
  return (
    <TodoList items ={todos}/>
  );
}

export default App;

