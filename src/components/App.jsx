import Form from 'components/Form';
import ContactsList from 'components/ContactsList';

import { BookContainer, Title } from './App.styled';

const App = () => {
  return (
    <BookContainer>
      <Title>Phonebook</Title>
      <Form />
      <ContactsList title={'Contacts'} />
    </BookContainer>
  );
};

export default App;
