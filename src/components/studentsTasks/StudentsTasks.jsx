// import React, { useEffect, useState } from "react";
// import TasksItem from "../tasks/TasksItem/TasksItem";
// import { useDispatch, useSelector } from "react-redux";
// import { getTasks } from "../../store/tasks/tasksActions";
// import "./StudentsTasks.css";

// const StudentsTasks = () => {
//   const { tasks, loading } = useSelector((state) => state.tasks);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getTasks());
//   }, []);
//   console.log(tasks);

//   const boards = [
//     {
//       id: 1,
//       title: "Текущие задания:",
//       items: tasks.map((task) => {
//         if (task.isDone === false) {
//           return <TasksItem key={task.id} task={task} />;
//         }
//       }),
//     },
//     {
//       id: 2,
//       title: "Сделанные:",
//       items: tasks.map((task) => {
//         if (task.isDone === true) {
//           return <TasksItem key={task.id} task={task} />;
//         }
//       }),
//     },
//   ];

//   return (
//     <div className="studentsTasks">
//       {boards.map((board) => {
//         return (
//           <div className="board" key={board.id}>
//             <div className="board--title">{board.title}</div>
//             {board.items}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default StudentsTasks;

// import React, { useEffect, useState } from "react";
// import TasksItem from "../tasks/TasksItem/TasksItem";
// import { useDispatch, useSelector } from "react-redux";
// import { getTasks } from "../../store/tasks/tasksActions";
// import "./StudentsTasks.css";

// const StudentsTasks = () => {
//   const { tasks, loading } = useSelector((state) => state.tasks);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getTasks());
//   }, [dispatch]);

//   // Используйте состояние компонента для хранения задач
//   const [boards, setBoards] = useState([
//     {
//       id: 1,
//       title: "Сделать",
//       items: tasks,
//     },
//     {
//       id: 2,
//       title: "На проверке",
//       items: [],
//     },
//     {
//       id: 3,
//       title: "Проверено",
//       items: [],
//     },
//   ]);

//   useEffect(() => {
//     // При получении задач из Redux, обновите локальное состояние
//     setBoards((prevBoards) =>
//       prevBoards.map((board) => {
//         if (board.id === 1) {
//           return { ...board, items: tasks };
//         }
//         return board;
//       })
//     );
//   }, [tasks]);

//   const onDragStart = (e, boardId, taskId) => {
//     e.dataTransfer.setData("boardId", boardId);
//     e.dataTransfer.setData("taskId", taskId);
//   };

//   const onDragOver = (e) => {
//     e.preventDefault();
//   };

//   const onDrop = (e, boardId) => {
//     const sourceBoardId = e.dataTransfer.getData("boardId");
//     const taskId = e.dataTransfer.getData("taskId");

//     if (sourceBoardId !== boardId) {
//       const updatedBoards = boards.map((board) => {
//         if (board.id === Number(sourceBoardId)) {
//           const task = tasks.find((task) => task.id === Number(taskId));
//           if (task) {
//             board.items = board.items.filter((item) => item.id !== task.id);
//             return board;
//           }
//         }
//         if (board.id === boardId) {
//           const task = tasks.find((task) => task.id === Number(taskId));
//           if (task) {
//             board.items.push(task);
//             return board;
//           }
//         }
//         return board;
//       });
//       setBoards(updatedBoards);
//     }
//   };

//   return (
//     <div className="studentsTasks">
//       {boards.map((board) => {
//         return (
//           <div
//             className="board"
//             key={board.id}
//             onDragOver={(e) => onDragOver(e)}
//             onDrop={(e) => onDrop(e, board.id)}
//           >
//             <div className="board--title">{board.title}</div>
//             {board.items.map((task) => (
//               <div
//                 key={task.id}
//                 draggable
//                 onDragStart={(e) => onDragStart(e, board.id, task.id)}
//               >
//                 <TasksItem task={task} />
//               </div>
//             ))}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default StudentsTasks;

import React, { useEffect, useState } from "react";
import TasksItem from "../tasks/TasksItem/TasksItem";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../store/tasks/tasksActions";
import "./StudentsTasks.css";
import TaskBoard from "./TaskBoard/TaskBoard";

const StudentsTasks = () => {
  const { tasks, loading } = useSelector(({ tasks }) => tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks()).catch((error) => {
      console.error("Failed to load tasks:", error);
    });
  }, []);

  const [currentTasks, setCurrentTasks] = useState(
    tasks.filter((task) => !task.isDone)
  );
  const [doneTasks, setDoneTasks] = useState(
    tasks.filter((task) => task.isDone)
  );

  const handleDragStart = (event, taskId) => {
    event.dataTransfer.setData("taskId", taskId);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, isDone) => {
    event.preventDefault();
    const taskId = event.dataTransfer.getData("taskId");
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isDone };
      }
      return task;
    });
    const currentTasks = updatedTasks.filter((task) => !task.isDone);
    const doneTasks = updatedTasks.filter((task) => task.isDone);
    setCurrentTasks(currentTasks);
    setDoneTasks(doneTasks);
  };

  return (
    <div className="studentsTasks">
      <TaskBoard
        tasks={currentTasks}
        title="Текущие задания"
        isDone={false}
        handleDragStart={handleDragStart}
        handleDragOver={handleDragOver}
        handleDrop={handleDrop}
      />
      <TaskBoard
        tasks={doneTasks}
        title="Сделанные"
        isDone={true}
        handleDragStart={handleDragStart}
        handleDragOver={handleDragOver}
        handleDrop={handleDrop}
      />
    </div>
  );
};

export default StudentsTasks;
