import { useSelector, useDispatch } from 'react-redux';

import { addData } from '../../redux/phonebookOperations';
import {
  ContactForm,
  FormLabel,
  LabelTitle,
  FormInput,
  AddButton,
} from './Form.styled';

const Form = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  let inputNumber;
  let inputName;

  const handleInput = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        inputName = value;
        break;
      case 'number':
        inputNumber = value;
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const names = contacts.map(contact => contact.name.toLowerCase());

    if (names.includes(inputName.toLowerCase())) {
      alert(`Please, enter unique name. ${inputName} is already exist`);
      return;
    } else {
      const contact = { name: inputName, number: inputNumber };
      dispatch(addData(contact));
    }

    e.currentTarget.reset();
  };

  return (
    <ContactForm
      name="addContactForm"
      autocomplete="off"
      onSubmit={handleSubmit}
    >
      <FormLabel>
        <LabelTitle>Name</LabelTitle>
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleInput}
          value={inputName}
          required
        />
      </FormLabel>

      <FormLabel>
        <LabelTitle>Number</LabelTitle>
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleInput}
          value={inputNumber}
          minlength="7"
          required
        />
      </FormLabel>

      <AddButton type="submit">+ Add to contacts</AddButton>
    </ContactForm>
  );
};

export default Form;
