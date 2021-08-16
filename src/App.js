import "./style/App.css";
import {
  createTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Form from "./components/Form/Form";
import TaskBox from "./components/TaskBox/TaskBox";
import { useState } from "react";
import { useEffect } from "react";

const useStyles = makeStyles({
  appDesign: {
    backgroundColor: "#37474f",
    width: "100%",
    height: "100vh",
    color: "#fff",
  },

  taskSectionDesign: {
    marginTop: 50,
  },
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#001064",
    },
  },
});

function App() {
  const classes = useStyles();
  const [taskes, setTaskes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/allTakes")
      .then((res) => res.json())
      .then((data) => setTaskes(data));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.appDesign}>
        <Typography variant="h1" component="h2" gutterBottom>
          What to Do!
        </Typography>
        <div className="form-section-design">
          <Form />
        </div>
        <div className={classes.taskSectionDesign}>
          {taskes &&
            taskes.map((task) => <TaskBox task={task} key={task._id} />)}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
