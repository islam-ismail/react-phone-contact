import React, { Component } from "react";
import axios from "axios";
import ListContacts from "./ListContacts";

class Home extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=20").then(response =>
      this.setState({
        contacts: response.data.results
      })
    );
  }

  render() {
    return <ListContacts contacts={this.state.contacts} />;
  }
}

export default Home;
