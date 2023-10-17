import { useEffect, useState } from 'react';
import { ContactForm } from './contactForm/contactForm';
import { Filter } from './filter/filter';
import { ContactList } from './contactList/contactList';
import data from '../../src/data.json/data.json';
import { nanoid } from 'nanoid';
import { Container, MainTitle, Title } from './app.styled/app.styled';

const savedContacts = localStorage.getItem('contacts');
export const App = () => {
  const [contacts, setContacts] = useState(() => {
    if (savedContacts !== null) {
    return JSON.parse(savedContacts)
    }
    return [...data]
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]); 

  const addContact = data => {
    const newContact = contacts.find(
      el => el.name.toLowerCase() === data.name.toLowerCase()
    );
    if (newContact) return alert(newContact.name + ' is already in contacts.');
    data.id = nanoid();
    setContacts(prevState=> [data, ...prevState]) 
  }

 const onFilter = value => {
    setFilter(value);
  };

  const onDelete = id => {
   setContacts(prevState=>prevState.filter(contact => contact.id !== id))
  };

  const filterNormilized = filter.toLowerCase().trim();
  const visibleContacts = contacts.filter(contact =>
   contact.name.toLowerCase().includes(filterNormilized)
   );
    return (
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm addContact={addContact} />
        <Title>Contacts</Title>
        <Filter value={filter} onFilter={onFilter} />
        <ContactList contacts={visibleContacts} onDelete={onDelete} />
      </Container>
    );
  }


