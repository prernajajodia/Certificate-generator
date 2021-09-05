import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";

const paperStyle = {
  padding: 20,
  width: 720,
  marginTop: "110px",
  marginLeft: "20px",
  backgroundColor: "rgb(221 221 228)",
  boxShadow: "-10px 25px 50px rgba(0, 0, 0, .2)",
};

function UserInput(props) {
  return (
    <div>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2> Fill in the info here</h2>

          <TextField
            label="Certifiacte Title"
            fullWidth
            required
            onChange={(e) => props.setInput({ title: e.target.value })}
            value={props.title}
          />
          <TextField label="Certificate action" fullWidth required />
          <TextField label="Duration" fullWidth required />
          <TextField label="Certificate awarded for" fullWidth required />
          <TextField label="Certificate recipient" fullWidth required />
          <TextField label="About candidate" fullWidth required />
        </Grid>
      </Paper>
    </div>
  );
}

export default UserInput;
