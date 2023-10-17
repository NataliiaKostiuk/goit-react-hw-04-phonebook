import { Component } from 'react';
import { ContactForm } from './contactForm/contactForm';
import { Filter } from './filter/filter';
import { ContactList } from './contactList/contactList';
import data from '../../src/data.json/data.json';
import { nanoid } from 'nanoid';
import { Container, MainTitle, Title } from './app.styled/app.styled';

export class App extends Component {
 state = {
  contacts: [...data],
   filter: ''
  }
  
componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      })
    }
  }

   addContact = data => {
    const newContact = this.state.contacts.find(
      el => el.name.toLowerCase() === data.name.toLowerCase()
    );
    if (newContact) return alert(newContact.name + ' is already in contacts.');
    data.id = nanoid();
    this.setState(prev => ({ contacts: [data, ...prev.contacts] }))
  };
  onDelete = id => {
   this.setState(prevState => ({
    contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  onFilter = value => {
    this.setState({ filter: value });
  };
  componentDidUpdate(_,prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  render() {
    const filterNormilized = this.state.filter.toLowerCase().trim();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormilized)
    );
    return (
      <Container>
<MainTitle>Phonebook</MainTitle>
        <ContactForm addContact={this.addContact } />
        <Title>Contacts</Title>
  <Filter value={this.state.filter} onFilter={this.onFilter} />
  <ContactList contacts={visibleContacts}onDelete={this.onDelete} />
      </Container>
    );
  }
};
