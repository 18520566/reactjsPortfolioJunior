import React, { useRef } from "react";
import "./index.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsPhone } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    console.log('it goes here')
    e.preventDefault()

    emailjs.sendForm(
      "service_jvlz5xn",
      "template_ua8ry58",
      form.current,
      "AKI2sWddux2KkMjxn"
    );

    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>I would truly appreciate if we get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>tiendat.hoang192@gmail.com</h5>
            <a href="mailto:tiendat.hoang192@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Dat Hoang</h5>
            <a href="https://m.me/dat.hoang.2000">Send a message</a>
          </article>
          <article className="contact__option">
            <BsPhone className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>+84 934236606</h5>
          </article>
        </div>
        {/* end of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
