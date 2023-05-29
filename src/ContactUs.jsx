import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bw1pj97",
        "template_itbu2jx",
        form.current,
        "lUoGYvSMmiFQMYzq-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Email</label>
      <input type="email" name="email_id" />
      <input type="submit" value="Send" />
    </form>
  );
};
