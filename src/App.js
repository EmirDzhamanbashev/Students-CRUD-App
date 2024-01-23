import "./App.css";
import Header from "./components/Header";
import { Container, Table } from "reactstrap";
import Students from "./components/Students";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [modalAction, setModalAction] = useState(null);
  const [modal, setModal] = useState(false);
  const [studentId, setStudentId] = useState(null);

  

  return (
    <div className="App">
      <h1>Students CRUD App</h1>
      <Header
        setModal={setModal}
        setModalAction={setModalAction}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Students
        studentId={studentId}
        modal={modal}
        setModal={setModal}
        modalAction={modalAction}
        setModalAction={setModalAction}
        searchQuery={searchQuery}
        setStudentId={setStudentId}
      />
      <footer>Seytech LLC. All Rights Reserved.</footer>
    </div>
  );
}

export default App;
