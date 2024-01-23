import React from "react";
import { Modal } from "reactstrap";
import DeleteModal from "./DeleteModal";
import InfoModal from "./InfoModal";
import AddModal from "./AddModal";
import EditModal from "./EditModal";

function AppModal({
  modal,
  toggle,
  handleStudentDelete,
  studentId,
  modalAction,
  student,
  handleStudentAdd,
  handleStudentEdit
}) {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        {modalAction === "delete" && (
          <DeleteModal
            toggle={toggle}
            handleStudentDelete={handleStudentDelete}
            studentId={studentId}
          />
        )}
        {modalAction === "add" && (
          <AddModal toggle={toggle} handleStudentAdd={handleStudentAdd} />
        )}
        {modalAction === "edit" && (
          <EditModal student={student} toggle={toggle} handleStudentEdit={handleStudentEdit} />
        )}
        {modalAction === "info" && <InfoModal {...student} toggle={toggle} />}
      </Modal>
    </div>
  );
}

export default AppModal;
