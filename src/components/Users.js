import React, { useEffect } from "react";
// import { useParams } from "react-router";

const Users = () => {
  // let { name } = useParams(); //useParams will return an Object we have to specify the key while using it

  useEffect(() => {
    fetch("https://6188e783d0821900178d75f4.mockapi.io/api/v1/user")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return <div>Users Component</div>;
};

export default Users;
