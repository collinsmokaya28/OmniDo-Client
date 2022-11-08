import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './componets/NavBar';
import Notes from './componets/Notes/Notes';
import Reminder from './componets/Reminder/Reminder';
import Todo from './componets/Todo/Todo';

function App() {
  return (
    <div className="container-fluid">
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Todo />} ></Route>
        <Route exact path='/notes' element={<Notes />}></Route>
        <Route exact path='/reminder' element={<Reminder />}></Route>
      </Routes>
    </div>
  );
}

export default App;
