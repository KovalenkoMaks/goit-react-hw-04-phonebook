import { FilterInput } from './Filter.styled';
export function Filter({ filter }) {
  return (
    <>
      <h2>Find contacts by name</h2>
      <FilterInput type="text" name="filter" onChange={filter} />
    </>
  );
}
