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
          alert("Děkuji, ozveme se Vám.");
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
          <Form.Label>Jméno</Form.Label>
          <Form.Control {...register("name")} type="text" placeholder="Tomáš Novák" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>E-mail</Form.Label>
          <Form.Control {...register("email")} type="email" placeholder="novak@gmail.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="subject">
          <Form.Label>Předmět</Form.Label>
          <Form.Control {...register("subject")} type="text" placeholder="Lingvistický problém" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Zpráva</Form.Label>
          <Form.Control
            {...register("message")}
            as="textarea"
            placeholder="Dobrý den, díval jsem se na verbální prefixy..."
            style={{ height: "100px" }}
          />
        </Form.Group>
        <Button {...classes("button")} variant="primary" type="submit">
          Odeslat
        </Button>
      </div>
    </Form>
  );
};
