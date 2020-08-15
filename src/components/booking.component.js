import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Button } from "react-bootstrap";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import DateFnsUtils from "@date-io/date-fns";
import AuthService from "../services/auth.service";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 80,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Booking = (props) => {
  const classes = useStyles();
  const [time, setTime] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(new Date(""));
  const [appointmentSubmitted, setAppointmentSubmitted] = React.useState(false);

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const clickSubmit = () => {
    setAppointmentSubmitted(true);
    AuthService.submit(time, selectedDate);
    setTime("");
    setSelectedDate("");
  };
  return (
    <div style={{ display: "flex", justify: "right", padding: 30 }}>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Typography
            component="div"
            style={{ backgroundColor: "white", height: "40vh" }}
          >
            {" "}
            <h3>Make an appointment</h3>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">Time</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={time}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>10:00 AM</MenuItem>
                <MenuItem value={1}>1:00 PM</MenuItem>
                <MenuItem value={3}>3:00 PM</MenuItem>
              </Select>
              <FormHelperText>Select a time</FormHelperText>
            </FormControl>
            <br />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                //format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                //label="Date picker inline"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
            <br />
            <Button variant="btn btn-success" onClick={clickSubmit}>
              Submit
            </Button>
            {appointmentSubmitted ? (
              <h5>your appointment is submitted successfully</h5>
            ) : (
              <h1></h1>
            )}
          </Typography>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default Booking;
