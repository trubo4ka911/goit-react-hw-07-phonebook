import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "../Form/Form";
import { ContactsPage } from "../ContactsPage";
import Filter from "../Filter/Filter";

const Phonebook = () => {
  return (
    <>
      <ToastContainer position="top-right" theme="colored" />
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactsPage />
    </>
  );
};

export default Phonebook;
