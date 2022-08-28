import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getData, removeData } from '../../redux/phonebookOperations';

import Filter from '../Filter';

import {
  Contacts,
  List,
  ListTitle,
  Contact,
  ContactName,
  ContactNumber,
  DeleteButton,
  Marker,
} from './ContactsList.styled';

const ContactsList = ({ title }) => {
  const contactsList = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const getFilteresContacts = filterValue => {
    return contactsList.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };
  const filteredContacts = getFilteresContacts(filterValue);
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <Contacts>
      <ListTitle>{title}</ListTitle>
      <Filter />
      <List>
        {filteredContacts.map(contact => (
          <Contact key={contact.id}>
            <Marker>&#9742; </Marker>
            <ContactName>{contact.name}: </ContactName>
            <ContactNumber>{contact.number}</ContactNumber>
            <DeleteButton
              type="button"
              onClick={() => {
                dispatch(removeData(contact.id));
              }}
            >
              x Delete
            </DeleteButton>
          </Contact>
        ))}
      </List>
    </Contacts>
  );
};

ContactsList.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ContactsList;
