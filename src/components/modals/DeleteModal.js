import { Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function DeleteModal({ toggle, handleStudentDelete, studentId}) {
  return (
    <>
      <ModalHeader toggle={toggle}>Delete user</ModalHeader>
      <ModalBody>Are you sure you would like to delete this user?</ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={() => {
            handleStudentDelete(studentId);
            toggle(null, null);
          }}
        >
          Delete
        </Button>{" "}
        <Button color="secondary" onClick={() => toggle(null, null)}>
          Cancel
        </Button>
      </ModalFooter>
    </>
  );
}

export default DeleteModal;
