import { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';

function App() {


  // const [toDos, setTodos] = useState([]);
  // const [toDo, setTodo] = useState("");
  // const [done, setDone] = useState([]);
  // const [error, setError] = useState("");

  // const deleteTodo = (id) => {
  //   setTodos(toDos.filter(obj => obj.id !== id));
  //   setDone(done.filter(obj => obj.id !== id));
  // };

  // const addTodo = () => {
  //   if (toDo.trim() === "") {
  //     setError("Please enter a to-do item.");
  //     return;
  //   }
  //   if (toDos.some(obj => obj.text === toDo)) {
  //     setError("This to-do item already exists.");
  //     return;
  //   }

  //   setTodos([...toDos, { id: Date.now(), text: toDo, status: false }]);
  //   setTodo("");
  //   setError("");
  // };

  // const timestamp = Date.now();
  // const dayOfWeekNumber = new Date(timestamp).getDay();

  // const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  // const dayName = daysOfWeek[dayOfWeekNumber];

  return (
    <>
      <ToDoList />
    </>







    // <div className="app">
    //   <div className="mainHeading">
    //     <h1>To-Do List</h1>
    //     <h1>Plan Your {dayName}</h1>
    //   </div>
    //   <div className="subHeading">
    //     <br />
    //     <h2>Whoop, it's {dayName} 🌝 ☕</h2>
    //     <h2 className='d-flex justify-center'>What's On your Mind?</h2>
    //   </div>

    //   <div className="input">
    //     <input value={toDo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
    //     <i onClick={addTodo} className="fas fa-plus"></i>
    //   </div>
    //   {error && <div className="error">{error}</div>}

    //   <div className="todos">
    //     {toDos.map((obj) => {
    //       return (
    //         <div className="todo" key={obj.id}>
    //           <div className="left">
    //             <input
    //               onChange={(e) => {
    //                 setTodos(toDos.map(obj2 => {
    //                   if (obj2.id === obj.id) {
    //                     obj2.status = e.target.checked;
    //                   }
    //                   return obj2;
    //                 }));
    //                 if (e.target.checked) {
    //                   setDone([...done, { id: obj.id, text: obj.text }]);
    //                 } else {
    //                   setDone(done.filter(doneObj => doneObj.id !== obj.id));
    //                 }
    //               }}
    //               checked={obj.status}
    //               type="checkbox"
    //             />
    //             <p>{obj.text}</p>
    //           </div>
    //           <div className="right">
    //             <i onClick={() => deleteTodo(obj.id)} className="fa-solid fa-trash-can"></i>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>

    //   <div className="jobdone">
    //     <h4>Completed Jobs</h4>
    //     {done.map((item, index) => {
    //       return <h6 key={index}>- {item.text}</h6>;
    //     })}
    //   </div>

    //   <div className="jobdone">
    //     <h5>Pending Jobs</h5>
    //     {toDos.map((item, index) => {
    //       if (!item.status) {
    //         return <h6 key={index}>- {item.text}</h6>;
    //       }
    //       return null;
    //     })}
    //   </div>

    //   <div className='footer'></div>
    // </div>
  );
}

export default App;


// const editTodo = (id, newText) => {

//   setTodos(
//     toDos.map((obj) => {
//       if (obj.id === id) {
//         return { ...obj, text: newText };
//       }
//       return obj;
//     })
//   );
// };

//  <input type="text"
// value={obj.text}
// onChange={(e) => editTodo(obj.id, e.target.value)}
// />  