import { Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function InfoModal({
  toggle,
  fname,
  lname,
  country,
  company,
  age,
  avatar,
  phone,
}) {
  return (
    <>
      <ModalHeader toggle={() => toggle(null, null)}>
        Info about{" "}
        <strong>
          {fname} {lname}
        </strong>
      </ModalHeader>
      <ModalBody>
        <div style={{ textAlign: "center" }}>
          <img width="150" height="150" src={avatar} alt={fname} />
          <div style={{ padding: "10px" }}>
            <div>
              <strong>Age: </strong> {age}
            </div>
            <div>
              <strong>Country: </strong> {country}
            </div>
            <div>
              <strong>Phone #: </strong> {phone}
            </div>
            <div>
              <strong>Company: </strong> {company}
            </div>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={() => toggle(null, null)}>
          Close
        </Button>
      </ModalFooter>
    </>
  );
}

export default InfoModal;
