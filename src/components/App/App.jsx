import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { Filter } from 'components/Filter/Filter';
import { NameInput } from 'components/NameInput/NameInput';
import { Contacts } from 'components/Contacts/Contacts';

import { Wrapper } from './app.styled';
export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localStor = JSON.parse(localStorage.getItem('contacts'));

    setContacts(prev => {
      return localStor ?? prev;
    });
  }, []);

  useEffect(() => {
    const localStor = JSON.parse(localStorage.getItem('contacts'));
    // console.log(0 !== 0 || 2);
    console.log(localStor !== null);
    if (localStor === null) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }

    // localStorage.setItem('contacts', JSON.stringify(contacts));
    // if (contacts.length > 0) {
    //   localStorage.setItem('contacts', JSON.stringify(contacts));
    // }
  }, [contacts]);

  const addContact = contact => {
    setContacts(prev => {
      contact.id = nanoid();
      return [contact, ...prev];
    });
  };
  const getFilter = value => {
    let name = value.currentTarget.value.toLowerCase();
    setFilter(name);
  };
  const deleteContact = cont => {
    setContacts(contacts => {
      return contacts.filter(e => e.id !== cont);
    });
  };

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <NameInput addContact={addContact} contacts={contacts} />
      <Filter filter={getFilter} />
      <Contacts
        contacts={contacts}
        filter={filter}
        deleteContact={deleteContact}
      />
    </Wrapper>
  );
};
// class oldApp extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//     name: '',
//     number: '',
//   };
//   componentDidMount() {
//     if (JSON.parse(localStorage.getItem('contacts'))) {
//       this.setState({
//         contacts: JSON.parse(localStorage.getItem('contacts')),
//       });
//     }
//   }

//   componentDidUpdate() {
//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   }

//   addContact = cont => {
//     this.setState(prevState => {
//       cont.id = nanoid();
//       return {
//         contacts: [cont, ...prevState.contacts],
//       };
//     });
//   };
//   deleteContact = cont => {
//     this.setState(({ contacts }) => {
//       return {
//         contacts: contacts.filter(e => e.id !== cont),
//       };
//     });
//   };
//   getFilter = value => {
//     let name = value.currentTarget.value.toLowerCase();
//     this.setState({
//       filter: name,
//     });
//   };
//   render() {
//     return (
//       <Wrapper>
//         <h1>Phonebook</h1>
//         <NameInput addstate={this.addContact} state={this.state} />
//         <Filter filter={this.getFilter} />
//         <Contacts state={this.state} deleteContact={this.deleteContact} />
//       </Wrapper>
//     );
//   }
// }
