import React from "react";
import Template from "./Template";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import UserInput from "./UserInput";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: "200px",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function TemplateGenerator() {
  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [action, setAction] = useState("");
  const [duration, setDuration] = useState("");
  const [reason, setReason] = useState("");
  const [about, setAbout] = useState("");
  const [value, setvalue] = useState(1);

  const setInput = (e) => {
    if (e.title !== undefined) setTitle(e.title);
    else if (e.name !== undefined) setName(e.name);
    else if (e.action !== undefined) setAction(e.action);
    else if (e.duration !== undefined) setDuration(e.duration);
    else if (e.reason !== undefined) setReason(e.reason);
    else if (e.about !== undefined) setAbout(e.about);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <UserInput
              setInput={setInput}
              title={title}
              name={name}
              action={action}
              duration={duration}
              reason={reason}
              about={about}
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {" "}
            <Template
              value={value}
              setvalue={setvalue}
              title={title}
              name={name}
              action={action}
              duration={duration}
              reason={reason}
              about={about}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default TemplateGenerator;
