import { InputGroup, Button } from "reactstrap";
import Search from "./Search";

function Header({
  searchQuery,
  setSearchQuery,
  setModalAction,
  setModal
}) {
  const handleAddBtnClick = () => {
    setModal(true)
    setModalAction("add")
  }
  return (
    <div>
      <InputGroup className="w-50 my-2 mx-auto">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Button
          className="ms-2"
          color="success"
          onClick={handleAddBtnClick}
        >
          {/* ms === margin start */}
          Add New Student
        </Button>
      </InputGroup>
    </div>
  );
}

export default Header;
