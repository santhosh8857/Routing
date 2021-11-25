import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router";
import UserForm from "./UserForm";
// import { useParams } from "react-router";

const Users = () => {
  let apiURL = "https://6188e783d0821900178d75f4.mockapi.io/api/v1/user";
  // let { name } = useParams(); //useParams will return an Object we have to specify the key while using it
  const [users, setUsers] = useState([]);
  const history = useHistory();
  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  const viewUserDeatils = (id) => {
    history.push(`user/${id}`);
  };

  const deleteUser = (id) => {
    axios
      .delete(`${apiURL}/${id}`)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <UserForm url={apiURL} />
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email Id</th>
            <th>Mobile No.</th>
            <th>View/Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, key) => {
            return (
              <tr key={key}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email_id}</td>
                <td>{user.mobile_no}</td>
                <td>
                  <Button
                    color="primary"
                    onClick={() => viewUserDeatils(user.id)}
                  >
                    View
                  </Button>
                  <Button color="danger" onClick={() => deleteUser(user.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
