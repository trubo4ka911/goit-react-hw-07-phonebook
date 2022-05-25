import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts-operations";
import { MdDeleteForever } from "react-icons/md";
import contactsOperations from "../../redux/contacts-operations.js";
import {
  ContactBtn,
  ContactItem,
  ContactList,
  ContactText,
} from "./Contact.styled.js";

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

export default function ContactsList() {
  const contacts = useSelector((state) =>
    getVisibleContacts(state.contacts.items, state.contacts.filter)
  );
  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(deleteContact(id));

  return (
    <>
      <ContactList>
        {contacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
            <ContactText>{name}:</ContactText>
            <ContactText>{number}</ContactText>
            <ContactBtn onClick={() => onDeleteContact(id)}>
              <MdDeleteForever />
            </ContactBtn>
          </ContactItem>
        ))}
      </ContactList>
    </>
  );
}
