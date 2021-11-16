import React from "react";
import BEMHelper from "react-bem-helper";
import { useForm, SubmitHandler } from "react-hook-form";
import "./Contact.css";
import { Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import { useTranslation } from "../../utils/useTranslation";

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
  const t = useTranslation();
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
          alert(t("thanks"));
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
          <Form.Label>{t("name")}</Form.Label>
          <Form.Control {...register("name")} type="text" placeholder="Tomáš Novák" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>E-mail</Form.Label>
          <Form.Control {...register("email")} type="email" placeholder="novak@gmail.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="subject">
          <Form.Label>{t("subject")}</Form.Label>
          <Form.Control {...register("subject")} type="text" placeholder={t("subject_example")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>{t("message")}</Form.Label>
          <Form.Control {...register("message")} as="textarea" placeholder={t("message_example")} style={{ height: "100px" }} />
        </Form.Group>
        <Button {...classes("button")} variant="primary" type="submit">
          {t("send")}
        </Button>
      </div>
    </Form>
  );
};
