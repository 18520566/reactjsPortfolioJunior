import emailjs from "emailjs-com";
import React, { useRef } from "react";
import { contactArrItem } from "../../GlobalContanst";
import "./index.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    console.log("it goes here");
    e.preventDefault();

    emailjs.sendForm(
      "service_jvlz5xn",
      "template_ua8ry58",
      form.current,
      "AKI2sWddux2KkMjxn"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>I would truly appreciate if we get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {contactArrItem.map((item) => {
            return (
              <article className="contact__option">
                {item.icon}
                <h4>{item.title}</h4>
                <h5>{item.subTitle}</h5>
                <a href={item.href ?? undefined} target="_blank">
                  {item.text}
                </a>
              </article>
            );
          })}          
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
