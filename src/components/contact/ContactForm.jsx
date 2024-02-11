import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import classes from "./ContactForm.module.css";

const ContactForm = () => {
  const formRef = useRef();
  const [loading, setloading] = useState(false);

  const [form, setform] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setform((prevSate) => {
      return {
        ...prevSate,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {};

  return (
    <div className={classes["contact-wrapper"]}>
      <p className={classes["contact-title"]}>Visszahívást kérek</p>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          name="phone"
          type="number"
          value={form.phone}
          onChange={handleChange}
        />

        <button type="submit">{loading ? "Küldés..." : "Küldés"}</button>
      </form>
    </div>
  );
};

export default ContactForm;
