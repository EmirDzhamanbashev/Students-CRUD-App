import { Button } from "reactstrap";

function SingleStudent({
  fname,
  lname,
  avatar,
  age,
  country,
  index,
  id,
  handleStudentDelete,
  toggle,
}) {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{<img src={avatar} alt="fname" className="avatar" />}</td>
      <td>{fname}</td>
      <td>{lname}</td>
      <td>{age}</td>
      <td>{country}</td>
      <td>
        <Button color="primary" onClick={() => toggle(id, "edit")}>
          <i className="fa fa-pencil"></i>
        </Button>
        <Button
          color="danger"
          className="mx-2"
          onClick={() => toggle(id, "delete")}
        >
          <i className="fa fa-trash"></i>
        </Button>
        <Button color="info" onClick={() => toggle(id, "info")}>
          <i className="fa fa-info"></i>
        </Button>
      </td>
    </tr>
  );
}

export default SingleStudent;
