import React, { useState } from "react";
import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from "../../redux/contacts/contactsSlice";
import { MdAccountBox, MdPhoneIphone } from "react-icons/md";
import {
  PhonebookForm,
  PhonebookLabel,
  PhonebookField,
  PhonebookButton,
} from "./Form.styled";
import { toast } from "react-toastify";

export default function Form() {
  const [contactInfo, setContactInfo] = useState({ name: "", number: "" });
  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const { data } = useFetchContactsQuery();
  const [createContact] = useCreateContactMutation();

  const onCheckNumberValue = (contactNumber) => {
    if (data.some((contact) => contact.phone === contactNumber)) {
      toast.info(`${contactInfo.number} is already in contacts!`);
      return;
    }
    createContact(contactInfo);
    toast.success("Contact has been added successfully!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCheckNumberValue(e.target.number.value);
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
