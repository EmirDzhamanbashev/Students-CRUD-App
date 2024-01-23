import React from "react";
import { useState } from "react";

import {
  Form,
  FormGroup,
  Col,
  Label,
  Input,
  Button,
  ModalHeader,
  ModalBody,
} from "reactstrap";

function EditModal({ toggle, student, handleStudentEdit }) {
  const initialValues = { ...student };
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const shallowEqual = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (let key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }

    return true;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (!shallowEqual(student, values)) {
      handleStudentEdit(values);
    } else {
      alert("Nothing has been changed!");
    }
    toggle(null, null);
  };

  const { fname, lname, country, company, age } = values;
  return (
    <>
      <ModalHeader toggle={toggle}>Edit student?</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleFormSubmit}>
          <FormGroup row>
            <Label sm={2}>First Name *</Label>
            <Col sm={10}>
              <Input
                value={fname}
                onChange={handleInputChange}
                name="fname"
                type="text"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Last Name *</Label>
            <Col sm={10}>
              <Input
                value={lname}
                onChange={handleInputChange}
                name="lname"
                type="text"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Country *</Label>
            <Col sm={10}>
              <Input
                value={country}
                onChange={handleInputChange}
                name="country"
                type="text"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Company *</Label>
            <Col sm={10}>
              <Input
                value={company}
                onChange={handleInputChange}
                name="company"
                type="text"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Age *</Label>
            <Col sm={10}>
              <Input
                value={age}
                onChange={handleInputChange}
                name="age"
                type="number"
              />
            </Col>
          </FormGroup>
          <FormGroup className="d-flex justify-content-end">
            <Button className="me-3" color="primary">
              Submit
            </Button>{" "}
            <Button color="secondary" onClick={() => toggle(null, null)}>
              Cancel
            </Button>
          </FormGroup>
        </Form>
      </ModalBody>
    </>
  );
}

export default EditModal;
