import {
  useDeleteContactMutation,
  useFetchContactsQuery,
} from "../redux/contacts/contactsSlice";
import ContactsList from "./ContactList/ContactList";

export const ContactsPage = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  return (
    <div>
      {contacts && (
        <ContactsList
          contacts={contacts}
          onDelete={deleteContact}
          isFetching={isFetching}
        />
      )}
    </div>
  );
};
