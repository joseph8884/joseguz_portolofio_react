import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
import React from "react";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    const ID = process.env;

    try {
      await emailjs.sendForm(
        ID.REACT_APP_SERVICE_ID || "",
        ID.REACT_APP_TEMPLATE_ID || "",
        form.current,
        ID.REACT_APP_USER_ID || ""
      );

      e.target.reset();
    } catch (error) {
      alert("Error: Message not delivered!");
    }
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>josegzm08@gmail.com</h5>
            <a
              href="mailto:josegzm08@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>+57 3052951490</h5>
            <a
              href="https://api.whatsapp.com/send?phone3052951490"
              target="_blank"
              rel="noreferrer"
            >
              Send a Massage
            </a>
          </article>
          <article className="contact_option">
            <BsLinkedin className="contact_option-icon" />
            <h4>Linkedln</h4>
            <a
              href="https://www.linkedin.com/in/héctor-jose-guzmán-montaño-2093a2238/"
              target="_blank"
              rel="noreferrer"
            >
              Connect +
            </a>
          </article>
          <article className="contact_option">
            <BsGithub className="contact_option-icon" />
            <h4>GitHub</h4>
            <a
              href="https://www.linkedin.com/in/héctor-jose-guzmán-montaño-2093a2238/"
              target="_blank"
              rel="noreferrer"
            >
              Follow
            </a>
          </article>
        </div>
        {/* =========== eND OF CONTACT OPTIONS =========== */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
