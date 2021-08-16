import { Button, Typography } from "@material-ui/core";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import "./TaskBoxDesign/TaskBoxDesign.css";
import { useState } from "react";
import { useEffect } from "react";
import { ContactSupportOutlined } from "@material-ui/icons";

const TaskBox = (props) => {
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState("");
  const { task, _id } = props.task;

  const updatedTask = (id) => {
    fetch(`http://localhost:4000/update/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ update }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
      });
    console.log(update);
  };

  const jwolt = (e, id) => {
    if (e.keyCode === 13) {
      updatedTask(id);
    }
  };

  const deleteTask = (id) => {
    fetch(`http://localhost:4000/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
      });
  };

  return (
    <div className="task-box">
      {edit ? (
        <input
          className="taskbox-text"
          type="text"
          placeholder={task}
          name="task"
          onChange={(e) => setUpdate(e.target.value)}
          onKeyDown={(e) => jwolt(e, _id)}
        />
      ) : (
        <h2>{task.length > 30 ? task.slice(0, 30) + "..." : task}</h2>
      )}

      <div className="action">
        {!edit ? (
          <button className="action-button" onClick={() => setEdit(!edit)}>
            <EditIcon />
          </button>
        ) : (
          <button className="action-button" onClick={() => setEdit(!edit)}>
            <SystemUpdateAltIcon />
          </button>
        )}
        <button className="action-button" onClick={() => deleteTask(_id)}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default TaskBox;
