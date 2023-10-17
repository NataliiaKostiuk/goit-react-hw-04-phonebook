import { List,ListItem, Btn ,Div} from './contactList.styled';
import { nanoid } from 'nanoid';
export const ContactList = ({contacts,onDelete}) => {
    return (
      <List>
          {contacts.map(contact => {
              return (
                  <ListItem key={nanoid()}
                      name={contact.name}
                      contact={contact.number}>
                      <Div>{contact.name}</Div>
                      <Div>{contact.number}</Div>
                      <Btn onClick={()=>onDelete(contact.id)}>Del</Btn>
                  </ListItem>
              )
          })}
       </List>
  );
}
