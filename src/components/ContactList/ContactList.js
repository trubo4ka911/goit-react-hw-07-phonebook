import React from "react";
import { useSelector } from "react-redux";
import { getFilter } from "../../redux/contacts/selectors.js";
import { MdDeleteForever } from "react-icons/md";
import {
  ContactBtn,
  ContactItem,
  ContactList,
  ContactText,
} from "./Contact.styled.js";

export default function ContactsList({ contacts, isFetching, onDelete }) {
  const filter = useSelector(getFilter);
  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts?.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };
  const contactsNormalize = getVisibleContacts();

  return (
    <>
      <ContactList>
        {contactsNormalize.map(({ id, name, phone }) => (
          <ContactItem key={id} id={id} name={name} number={phone}>
            <ContactText>{name}:</ContactText>
            <ContactText>{phone}</ContactText>
            <ContactBtn onClick={() => onDelete(id)}>
              <MdDeleteForever />
            </ContactBtn>
          </ContactItem>
        ))}
      </ContactList>
    </>
  );
}
