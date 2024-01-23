import { InputGroup, Input, Button } from "reactstrap";

function Search({ searchQuery, setSearchQuery }) {
  return (
    <>
      {searchQuery && <Button onClick={() => setSearchQuery("")} color="danger">X</Button>}
      <Input
        value={searchQuery}
        placeholder="Search..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </>
  );
}

export default Search;
