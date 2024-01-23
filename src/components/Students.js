import { useEffect, useState } from "react";
import { Spinner, Container, Table } from "reactstrap";
import { fetchData } from "./utils/apiCalls/getData";
import SingleStudent from "./SingleStudent";
import { deleteData } from "./utils/apiCalls/deleteData";
import AppModal from "./modals/AppModal";
import { createData } from "./utils/apiCalls/createData";
import { updateData } from "./utils/apiCalls/updateData";

function Students({
  searchQuery,
  studentId,
  modal,
  modalAction,
  setModal,
  setModalAction,
  setStudentId,
}) {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [student, setStudent] = useState(null);

  const fetchAndSetState = async () => {
    //most recommended
    setIsLoading(false);
    const data = await fetchData();
    setStudents(data);
    setIsLoading(true);
  };

  useEffect(() => {
    // fetchData().then(data => setStudents(data))

    // (async() => {
    //     setStudents(await fetchData())
    // })()

    fetchAndSetState();
  }, []);

  // modalAction: delete, edit, add, info
  const toggle = (id, action) => {
    setStudent(students.find((student) => student.id === id));
    setModalAction(action);
    setModal(!modal);
    setStudentId(id);
  };

  const handleStudentDelete = (id) => {
    deleteData(id).then((data) => {
      // console.log("Successfully deleted student", data);
      fetchAndSetState();
    });
  };

  const handleStudentAdd = (newStudent) => { //values
    createData(newStudent).then((data) => {
      // console.log("Successfully added a new student", data);
      fetchAndSetState();
    });
  };

  const handleStudentEdit= (newStudent) => { //values
    updateData(newStudent).then((data) => {
      // console.log("Successfully updated the student", data);
      fetchAndSetState();
    });
  };

  const filteredStudents = students.filter(
    (student) =>
      student.fname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.lname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container className="border p-3">
      {/* <button onClick={() => fetchAndSetState()}>Refetch</button> */}
      {filteredStudents.length === 0 && !isLoading ? (
        <Spinner color="primary">Loading...</Spinner>
      ) : (
        <Table bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Avatar</th>
              <th>First Name</th>
              <th>Last name</th>
              <th>Age</th>
              <th>Country</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => {
              return (
                <SingleStudent
                  toggle={toggle}
                  handleStudentDelete={handleStudentDelete}
                  key={student.id}
                  {...student}
                  index={index}
                />
              );
            })}
          </tbody>
        </Table>
      )}
      {modal && (
        <AppModal
          modalAction={modalAction}
          modal={modal}
          toggle={toggle}
          handleStudentDelete={handleStudentDelete}
          studentId={studentId}
          student={student}
          handleStudentAdd={handleStudentAdd}
          handleStudentEdit={handleStudentEdit}
        />
      )}
    </Container>
  );
}

export default Students;
