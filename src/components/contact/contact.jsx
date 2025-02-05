import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { useEffect, useState } from "react";
import React from "react";
import "./contact.css";

const Contact = () => {
  const [ip, setIp] = useState("");
  const [locationInfo, setLocationInfo] = useState("");
  const [timeStart] = useState(Date.now());

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLocationInfo(`${pos.coords.latitude}, ${pos.coords.longitude}`);
    });
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setIp(data.ip));
  }, []);

  const handleSubmit = (e) => {
    const timeSpent = (Date.now() - timeStart) / 1000;
    e.target.elements.timeSpent.value = timeSpent;
    e.preventDefault();
    e.target.submit();
  };
  return (
    <>
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
          <form
            onSubmit={handleSubmit}
            action="https://formsubmit.co/fc956266785ff39d6cb9af91241399ba"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <input type="hidden" name="ip" value={ip} />
            <input type="hidden" name="location" value={locationInfo} />
            <input type="hidden" name="timeSpent" value="" />
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
      <div className="gab">.</div>
    </>
  );
};

export default Contact;
