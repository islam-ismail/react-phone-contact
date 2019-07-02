import React, { Component } from "react";
import "./ListContacts.css";

class ListContacts extends Component {
  state = {
    searchTerm: ""
  };

  getData = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };
  render() {
    let contacts = this.props.contacts;
    let searchTerm = this.state.searchTerm;
    const filterContacts =
      searchTerm === ""
        ? contacts
        : contacts.filter(contact => {
            return (
              contact.name.first.toLowerCase().includes(searchTerm) ||
              contact.name.last.toLowerCase().includes(searchTerm)
            );
          });
    return (
      <div>
        <div className="main-div">
          <div className="right-div" />
          <div className="left-div" />
          <div className="main-search-div">
            <div className="title">
              <h2>Contact List</h2>
            </div>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search contacts..."
                value={this.state.searchTerm}
                onChange={this.getData}
              />
            </div>
          </div>
          <ol className="contact-list">
            {filterContacts.map((contact, index) => (
              <div>
                <li key={index}>
                  <div
                    className="contact-image"
                    style={{
                      backgroundImage: `url(${contact.picture.large})`,
                      width: "100px",
                      height: "100px",
                      borderRadius: "100px"
                    }}
                  />
                  <div className="contact-details">
                    <h3>
                      {contact.name.first} {contact.name.last}
                    </h3>
                    <h6>{contact.email}</h6>
                  </div>
                </li>
                <hr className="line" />
              </div>
            ))}
          </ol>
          <div className="bottom-div" />
        </div>
      </div>
    );
  }
}

export default ListContacts;
