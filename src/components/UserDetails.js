import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const UserDetails = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    fetch(`https://6188e783d0821900178d75f4.mockapi.io/api/v1/user/${id}`)
      .then((res) => res.json())
      .then((data) => setUserDetails(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>{userDetails?.name}</h1>
      <h1>{userDetails?.email_id}</h1>
      <h1>{userDetails?.mobile_no}</h1>
    </div>
  );
};

export default UserDetails;
