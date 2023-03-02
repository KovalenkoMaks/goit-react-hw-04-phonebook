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
    localStorage.setItem('contacts', JSON.stringify(contacts));
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
