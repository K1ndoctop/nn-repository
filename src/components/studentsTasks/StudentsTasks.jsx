// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { getTasks } from "../../store/tasks/tasksActions";
// import TasksItem from "../tasks/TasksItem/TasksItem";
// import "./StudentsTasks.css";
// const StudentsTasks = () => {
//   const { tasks, loading } = useSelector((state) => state.tasks);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getTasks());
//   }, []);

//   const [currentBoard, setCurrentBoard] = useState(null);
//   const [currentItem, setCurrentItem] = useState(null);

//   function dragOverHandler(e) {
//     e.preventDefault();
//     if (e.target.className == "item") {
//       e.target.style.boxShadow = "0 4px 3px gray";
//     }
//   }

//   function dragLeaveHandler(e) {
//     e.target.style.boxShadow = "none";
//   }

//   function dragStartHandler(e, board, item) {
//     setCurrentBoard(board);
//     setCurrentItem(item);
//   }

//   function dragEndHandler(e) {
//     e.target.style.boxShadow = "none";
//   }

//   function dropHandler(e, board, item) {
//     e.preventDefault();
//     const currentIndex = currentBoard.items.indexOf(currentItem);
//     currentBoard.items.splice(currentIndex, 1);
//     const dropIndex = board.items.indexOf(item);
//     board.items.splice(dropIndex + 1, 0, currentItem);
//     setBoards(
//       boards.map((b) => {
//         if (b.id === board.id) {
//           return board;
//         }
//         if (b.id === currentBoard.id) {
//           return currentBoard;
//         }
//       })
//     );
//   }

//   function dropCardHandler(e, board) {
//     board.items.push(currentItem);
//     const currentIndex = currentBoard.items.indexOf(currentItem);
//     currentBoard.items.splice(currentIndex, 1);
//     setBoards(
//       boards.map((b) => {
//         if (b.id === board.id) {
//           return board;
//         }
//         if (b.id === currentBoard.id) {
//           return currentBoard;
//         }
//       })
//     );
//   }

//   const [boards, setBoards] = useState();

//   return (
//     <div className="studentsTasks">
//       <div id="board-1" className="board">
//         <h3>Board number 1</h3>
//         <div
//           onDragOver={(e) => dragOverHandler(e)}
//           onDrop={(e) => dropCardHandler(e, board)}
//         >
//           {loading ? (
//             <h3>Loading...</h3>
//           ) : (
//             <div>
//               {tasks.map((task) => {
//                 if (task.isDone === false) {
//                   return (
//                     <div
//                       draggable={true}
//                       onDragOver={(e) => dragOverHandler(e)}
//                       onDragLeave={(e) => dragLeaveHandler(e)}
//                       onDragStart={(e) => dragStartHandler(e, board, item)}
//                       onDragEnd={(e) => dragEndHandler(e)}
//                       onDrop={(e) => dropHandler(e, board, item)}
//                     >
//                       <TasksItem key={task.id} task={task} />
//                     </div>
//                   );
//                 }
//               })}
//             </div>
//           )}
//         </div>
//       </div>
//       <div id="board-2" className="board">
//         <h3>Board number 2</h3>
//         <div
//           onDragOver={(e) => dragOverHandler(e)}
//           onDrop={(e) => dropCardHandler(e, board)}
//         >
//           {loading ? (
//             <h3>Loading...</h3>
//           ) : (
//             <div>
//               {tasks.map((task) => {
//                 if (task.isDone === true) {
//                   return (
//                     <div
//                       draggable={true}
//                       onDragOver={(e) => dragOverHandler(e)}
//                       onDragLeave={(e) => dragLeaveHandler(e)}
//                       onDragStart={(e) => dragStartHandler(e, board, item)}
//                       onDragEnd={(e) => dragEndHandler(e)}
//                       onDrop={(e) => dropHandler(e, board, item)}
//                     >
//                       <TasksItem key={task.id} task={task} />
//                     </div>
//                   );
//                 }
//               })}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentsTasks;
import React, { useEffect, useState } from "react";
import TasksItem from "../tasks/TasksItem/TasksItem";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../store/tasks/tasksActions";
import "./StudentsTasks.css";

const StudentsTasks = () => {
  const { tasks, loading } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  const [boards, setBoards] = useState([
    {
      id: 1,
      title: "Сделать",
      items: tasks,
    },
    {
      id: 2,
      title: "На проверке",
      items: [],
    },
    {
      id: 3,
      title: "Проверено",
      items: [],
    },
  ]);

  useEffect(() => {
    setBoards((prevBoards) =>
      prevBoards.map((board) => {
        if (board.id === 1) {
          return { ...board, items: tasks };
        }
        return board;
      })
    );
  }, [tasks]);

  const onDragStart = (e, boardId, taskId) => {
    e.dataTransfer.setData("boardId", boardId);
    e.dataTransfer.setData("taskId", taskId);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, boardId) => {
    const sourceBoardId = e.dataTransfer.getData("boardId");
    const taskId = e.dataTransfer.getData("taskId");

    if (sourceBoardId !== boardId) {
      const updatedBoards = boards.map((board) => {
        if (board.id === Number(sourceBoardId)) {
          const task = tasks.find((task) => task.id === Number(taskId));
          if (task) {
            board.items = board.items.filter((item) => item.id !== task.id);
            return board;
          }
        }
        if (board.id === boardId) {
          const task = tasks.find((task) => task.id === Number(taskId));
          if (task) {
            board.items.push(task);
            return board;
          }
        }
        return board;
      });
      setBoards(updatedBoards);
    }
  };
  return (
    <div className="studentsTasks">
      {boards.map((board) => {
        return (
          <div
            className="board"
            key={board.id}
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => onDrop(e, board.id)}
          >
            <div className="board--title">{board.title}</div>
            {board.items.map((task) => (
              <div
                key={task.id}
                draggable
                onDragStart={(e) => onDragStart(e, board.id, task.id)}
              >
                <TasksItem task={task} />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default StudentsTasks;
