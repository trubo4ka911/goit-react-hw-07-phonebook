import { useSelector, useDispatch } from "react-redux";
import { filterContact } from "../../redux/contacts/contactsSlice";
import { getFilter } from "../../redux/contacts/selectors";
import { FilterForm, FilterInput } from "./Filter.styled";

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const handleFilter = (e) => dispatch(filterContact(e.currentTarget.value));
  return (
    <>
      <h3>Find contacts by name</h3>
      <FilterForm>
        <FilterInput
          type="text"
          name="filter"
          onChange={handleFilter}
          value={filter}
          placeholder="Search name"
          autoComplete="off"
        />
      </FilterForm>
    </>
  );
}
