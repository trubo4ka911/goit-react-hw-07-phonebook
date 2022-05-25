import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts-operations";
import { MdAccountBox, MdPhoneIphone } from "react-icons/md";
import { nanoid } from "nanoid";
import {
  PhonebookForm,
  PhonebookLabel,
  PhonebookField,
  PhonebookButton,
} from "./Form.styled";

export default function Form() {
  const [contactInfo, setContactInfo] = useState({ name: "", number: "" });
  const dispatch = useDispatch();
  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact(contactInfo));
    // dispatch(addItem({ name, number }));
    setContactInfo({ name: "", number: "" });
  };
  const { name, number } = contactInfo;
  return (
    <PhonebookForm className="phonebook-form" onSubmit={handleSubmit}>
      <PhonebookLabel>
        <PhonebookField
          className="phonebook-field"
          type="text"
          placeholder="Enter contact name"
          autoComplete="off"
          value={name}
          onChange={handleNameChange}
          name="name"
          id={nanoid(5)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <MdAccountBox style={{ verticalAlign: "middle" }} size="42px" />
      </PhonebookLabel>
      <PhonebookLabel>
        <PhonebookField
          className="phonebook-field"
          type="tel"
          value={number}
          onChange={handleNameChange}
          name="number"
          id={nanoid(5)}
          placeholder="Enter phone number"
          autoComplete="off"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <MdPhoneIphone style={{ verticalAlign: "middle" }} size="42px" />
      </PhonebookLabel>

      <PhonebookButton className="phonebook-button" type="submit">
        Add contact
      </PhonebookButton>
    </PhonebookForm>
  );
}
