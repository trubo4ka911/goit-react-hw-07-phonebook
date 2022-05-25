import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/contactsAction";
import { FilterForm, FilterInput, FilterBtn } from "./Filter.styled";
import { MdSearch } from "react-icons/md";

export default function Filter() {
  const value = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();
  const onChange = (e) => dispatch(changeFilter(e.target.value));
  return (
    <>
      <h3>Find contacts by name</h3>
      <FilterForm>
        <FilterInput
          type="text"
          name="filter"
          onChange={onChange}
          value={value}
          placeholder="Search name"
          autoComplete="off"
        />
        <FilterBtn className="filter-button" type="submit">
          <MdSearch />
        </FilterBtn>
      </FilterForm>
    </>
  );
}
