import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router";
// import { useParams } from "react-router";

const Users = () => {
  // let { name } = useParams(); //useParams will return an Object we have to specify the key while using it
  const [users, setUsers] = useState([]);
  const history = useHistory();
  useEffect(() => {
    fetch("https://6188e783d0821900178d75f4.mockapi.io/api/v1/user")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  const viewUserDeatils = (id) => {
    history.push(`user/${id}`);
  };

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email Id</th>
            <th>Mobile No.</th>
            <th>View</th>
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
                  <button onClick={() => viewUserDeatils(user.id)}>View</button>
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
