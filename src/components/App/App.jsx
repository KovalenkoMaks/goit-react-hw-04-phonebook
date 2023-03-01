import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { Filter } from 'components/Filter/Filter';
import { NameInput } from 'components/NameInput/NameInput';
import { Contacts } from 'components/Contacts/Contacts';

import { Wrapper } from './app.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };
  // localStor = [];
  componentDidMount() {
    // this.localStor = JSON.parse(localStorage.getItem('contacts'));

    if (JSON.parse(localStorage.getItem('contacts'))) {
      this.setState({
        contacts: JSON.parse(localStorage.getItem('contacts')),
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  addContact = cont => {
    this.setState(prevState => {
      cont.id = nanoid();
      return {
        contacts: [cont, ...prevState.contacts],
      };
    });
  };
  deleteContact = cont => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(e => e.id !== cont),
      };
    });
  };
  getFilter = value => {
    let name = value.currentTarget.value.toLowerCase();
    this.setState({
      filter: name,
    });
  };
  render() {
    return (
      <Wrapper
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   flexDirection: 'column',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      // }}
      >
        <h1>Phonebook</h1>
        <NameInput addstate={this.addContact} state={this.state} />
        <Filter filter={this.getFilter} />
        <Contacts state={this.state} deleteContact={this.deleteContact} />
      </Wrapper>
    );
  }
}
