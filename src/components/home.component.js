import React, { Component } from "react";
import { Jumbotron, Button } from "reactstrap";
import Sidebar from "./sidebar.component";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import Booking from "./booking.component";

const items = [
  { name: "home", label: "Home" },
  {
    name: "billing",
    label: "Billing",
    items: [
      { name: "statements", label: "Statements" },
      { name: "reports", label: "Reports" },
    ],
  },
  {
    name: "settings",
    label: "Settings",
    items: [
      { name: "profile", label: "Profile" },
      { name: "insurance", label: "Insurance" },
      {
        name: "notifications",
        label: "Notifications",
        items: [
          { name: "email", label: "Email" },
          {
            name: "desktop",
            label: "Desktop",
            items: [
              { name: "schedule", label: "Schedule" },
              { name: "frequency", label: "Frequency" },
            ],
          },
          { name: "sms", label: "SMS" },
        ],
      },
    ],
  },
];

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };
    // this.state = {
    //   bookingForm: false,
    // };
  }

  // handleBooking() {
  //   //this.setState({ bookingForm: false });
  //   //window.location.reload(false);
  //   console.log("hello");
  // }

  componentDidMount() {
  }

  /*
    render() {
    var imageName = require('./../images/header.png')
    return (
      <div className="container">
        <header img src={imageName}>

        </header>
      </div>
    );
    */

  render() {
    //const { bookingForm } = this.state;

    return (
      <div>
        <header className="jumbotron">
          <p className="lead">Tangle's Beauty Service</p>
          <hr className="my-2" />
          <p>Providing highest quality service for beauty appointments</p>
          <p className="lead">
            <Button color="primary">Learn</Button>
          </p>
        </header>
      </div>
    );
  }
}
