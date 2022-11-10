import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./componets/Home";
import NavBar from "./componets/NavBar";
import Notes from "./componets/Notes/Notes";
import Reminder from "./componets/Reminder/Reminder";
import TodoList from "./componets/Todo/TodoList";

function App() {
  return (
    <div className="container-fluid">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/todo" element={<TodoList />}></Route>
        <Route exact path="/notes" element={<Notes />}></Route>
        <Route exact path="/reminder" element={<Reminder />}></Route>
      </Routes>
    </div>
  );
}

export default App;
