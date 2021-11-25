import React, { useState } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [email_id, setEmail_id] = useState("");
  const [mobile_no, setMobile_no] = useState("");

  const handleSubmit = (e) => {
    // fetch(props.url, {
    //   method: "POST",
    //   body: {
    //     name: name,
    //     email_id: email_id,
    //     mobile_no: mobile_no,
    //   },
    // })
    //   .then((resp) => resp.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));

    axios
      .post(props.url, {
        name: name,
        email_id: email_id,
        mobile_no: mobile_no,
      })
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));

    e.preventDefault();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={name}
            placeholder="enter your name"
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email_id"
            id="email_id"
            placeholder="enter your email"
            value={email_id}
            onChange={(e) => setEmail_id(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Mobile number</Label>
          <Input
            type="tel"
            name="mobile_no"
            id="mobile_no"
            placeholder="enter your mobile number"
            value={mobile_no}
            onChange={(e) => setMobile_no(e.target.value)}
          />
        </FormGroup>
        <Button color="primary" type="submit">
          Create
        </Button>
      </Form>
    </div>
  );
};

export default UserForm;
