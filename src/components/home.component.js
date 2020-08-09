import React, { Component } from "react";
import { Jumbotron, Button } from "reactstrap";
import UserService from "../services/user.service";
import Sidebar from "./sidebar.component";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

const items = [
  { name: 'home', label: 'Home' },
  {
    name: 'billing',
    label: 'Billing',
    items: [
      { name: 'statements', label: 'Statements' },
      { name: 'reports', label: 'Reports' },
    ],
  },
  {
    name: 'settings',
    label: 'Settings',
    items: [
      { name: 'profile', label: 'Profile' },
      { name: 'insurance', label: 'Insurance' },
      {
        name: 'notifications',
        label: 'Notifications',
        items: [
          { name: 'email', label: 'Email' },
          {
            name: 'desktop',
            label: 'Desktop',
            items: [
              { name: 'schedule', label: 'Schedule' },
              { name: 'frequency', label: 'Frequency' },
            ],
          },
          { name: 'sms', label: 'SMS' },
        ],
      },
    ],
  },
]

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
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
    return (
      <div>
        <header className="jumbotron">
          <p className="lead">Tangle's Beauty Service</p>
          <hr className="my-2" />
          <p>Providing highest quality service for beauty appointments</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </header>
      </div>
    );
  }
}