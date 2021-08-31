import React from "react";
import BEMHelper from "react-bem-helper";
import { useForm, SubmitHandler } from "react-hook-form";
import "./Contact.css";
import { Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

const classes = new BEMHelper({
  name: "contact-form",
});

interface IFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact = () => {
  console.log();
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data: any, e: any) => {
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID as string,
        process.env.REACT_APP_TEMPLATE_ID as string,
        data,
        process.env.REACT_APP_USER_ID as string
      )
      .then(
        (result) => {
          alert("Thank you, I'll be in touch.");
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <Form {...classes()} onSubmit={handleSubmit(onSubmit)}>
      <div {...classes("items")}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control {...register("name")} type="text" placeholder="Henry Cook" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control {...register("email")} type="email" placeholder="henry.cook@gmail.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control {...register("subject")} type="text" placeholder="Linguistic problem" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            {...register("message")}
            as="textarea"
            placeholder="Hello, I was looking at verbal prefixes..."
            style={{ height: "100px" }}
          />
        </Form.Group>
        <Button {...classes("button")} variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};
