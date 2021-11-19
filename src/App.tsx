// import logo from "./logo.svg";
// import "./App.css";
// import { useState, useEffect } from "react";
// import Loading from "./components/Loading";
// import TodoList from "./components/TodoList";
// import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";

// function App() {
//   const [todos, setTodos] = useState(null as any);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [body, setBody] = useState("");

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/comments")
//       .then((result) => {
//         setTodos(result.data);
//       });
//   }, []);

//   //   const onUpdateTodo = (todo) => {
//   //     const todoItemIndex = todos.findIndex((x) => x.id == todo.id);
//   //     const newTodos = [...todos];
//   //     newTodos[todoItemIndex].completed = !newTodos[todoItemIndex].completed;
//   //     // const newTodo = newTodos[todoItemIndex];
//   //     // newTodo.completed = !newTodo.completed;
//   //     // newTodos[todoItemIndex] = newTodo;
//   //     setTodos(newTodos);
//   //   };

//   function handleSubmit() {
//     const data = {
//       postId: 1,
//       id: Math.floor(Math.random() * 800 + 201),
//       name: name,
//       email: email,
//       body: body,
//     };

//     axios
//       .post("https://jsonplaceholder.typicode.com/comments", data)
//       .then((res) => {
//         setTodos([...todos, res.data]);
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   return (
//     <div>
//       <div className="container">
//         <h2>Comment PROJECT</h2>
//         Add Comment:
//         <input
//           value={name}
//           type="text"
//           name="todo"
//           onChange={(event) => {
//             setName(event.target.value);
//           }}
//           //     align="left"
//         />
//         <input
//           value={email}
//           type="text"
//           name="email"
//           onChange={(event) => {
//             setEmail(event.target.value);
//           }}
//           //     align="left"
//         />
//         <input
//           value={body}
//           type="text"
//           name="body"
//           onChange={(event) => {
//             setBody(event.target.value);
//           }}
//           //     align="left"
//         />
//         <button className="btn btn-primary" onClick={handleSubmit}>
//           Add
//         </button>
//       </div>
//       <div className="container">
//         {todos ? <TodoList todos={todos} /> : <Loading />}
//       </div>
//     </div>
//   );
// }

// export default App;


import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState(null as any);
  const [todo, setTodo] = useState("");

  const onUpdateTodo = (todo:any) => {
    const todoItemIndex = todos.findIndex((x:any) => x.id == todo.id);
    const newTodos = [...todos];
    newTodos[todoItemIndex].completed = !newTodos[todoItemIndex].completed;
    // const newTodo = newTodos[todoItemIndex];
    // newTodo.completed = !newTodo.completed;
    // newTodos[todoItemIndex] = newTodo;
    setTodos(newTodos);
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((result) => {
      setTodos(result.data);
    });
  }, []);

  

  function handleSubmit() {
    const data = {
      userId: 1,
      id: Math.floor(Math.random() * 800 + 201),
      title: todo,
      completed: false,
    };

    axios
      .post("https://jsonplaceholder.typicode.com/todos", data)
      .then((res) => {
        setTodos([...todos, res.data]);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <div className="container">
        <h2>TODO PROJECT</h2>
        Add ToDo:
        <input
          value={todo}
          type="text"
          name="todo"
          onChange={(event) => {
            setTodo(event.target.value);
          }}
         // align="left"
        />
        <button className="btn btn-primary" onClick={handleSubmit}>
          Add
        </button>
      </div>
      <div className="container">
        {todos ? (
          <TodoList todos={todos} onUpdateTodo={onUpdateTodo} />
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default App;
