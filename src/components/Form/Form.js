import { Button, makeStyles, TextField } from "@material-ui/core";
import "./formDesign/FormDesign.css";
import React from "react";
import { useState } from "react";

// const useStyles = makeStyles({
//   inputDesign: {
//     backgroundColor: "#fff",
//     width: 370,
//   },
//   button: {
//     height: 56,
//     width: 150,
//     fontSize: 20,
//   },
// });

const Form = () => {
  // const classes = useStyles();
  const [task, setTask] = useState([])

  // const submitForm = () => {
  //   fetch('http://localhost:4000/addProduct', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(task)
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // }

  return (
    <div className="form-section">
      <form action="http://localhost:4000/addTask" method="post">
        <div>
          <input onChange={(e) => setTask(e.target.value)} className="input" type="text" placeholder="type your task" name="task" />
          <Button type="submit" className="button" variant="contained">
            Default
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
