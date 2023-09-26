import React, { useState, useEffect } from "react";

export const App = () => {
  const [tasks, updateTasks] = useState([]);

  useEffect(() => {
    window.addEventListener("@vt/react-route/todo/add-task", (event) => {
      console.log(event);
      updateTasks((oldTasks) => [...oldTasks, event.detail]);
    });
  }, []);

  return (
    <>
      <h1>@mc/react-parcel</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.describe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
