// import { useState } from "react";

// export const TodoList = () => {
//   const date = new Date();
//   const [todoCounter, setTodoCounter] = useState(1);
//   const [list, setList] = useState([
//     {
//       id: 1,
//       createdAt: date,
//     },
//   ]);

//   const sortByEarliest = () => {
//     const sortedList = [...list].sort((a, b) => {
//       return a.createdAt - b.createdAt;
//     });
//     setList(sortedList);
//   };

//   const sortByLatest = () => {
//     const sortedList = [...list].sort((a, b) => {
//       return b.createdAt - a.createdAt;
//     });
//     setList(sortedList);
//   };

//   const addToEnd = () => {
//     const date = new Date();
//     const nextId = todoCounter + 1;
//     const newList = [...list, { id: nextId, createdAt: date }];
//     setList(newList);
//     // setTodoCounter(nextId);
//   };
// };
