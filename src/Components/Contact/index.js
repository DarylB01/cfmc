import React, { useEffect } from "react";
//components
import Banner from "../Banners/Banner1";
//images
import contactBg from "../../Images/Contact/contact-bg.jpg";
import emailImg from "../../Images/Contact/email.png";
import locationImg from "../../Images/Contact/location.png";
import phoneImg from "../../Images/Contact/phone.png";

const Index = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    props.setActivePage("CONTACT");
    props.setDelayIsLoading(false);
  }, []);
  return (
    <main className="contact">
      <Banner
        bannerImg={contactBg}
        title={"Get In Touch"}
        content={<p>Contact our church ministry to learn more</p>}
      />
      <section className="contact__content">
        <form action="https://formspree.io/mgelywer" method="POST">
          <div className="name-email-input">
            <article>
              <label for="name">Name</label>
              <input required name="name" type="text" />
            </article>
            <article>
              <label for="email">E-Mail Address</label>
              <input required name="email" type="email" />
            </article>
          </div>
          <label for="subject">Subject</label>
          <input required name="subject" type="text" />
          <label for="message">Message</label>
          <textarea required name="message" />
          <button type="submit">Send</button>
        </form>
        <section>
          <section className="content">
            <h2>How can we help you?</h2>
            <p>
              Magna aliqua et nulla ex anim anim elit culpa sit non amet. Anim
              et fugiat qui pariatur in. Amet sint velit eiusmod sunt sit
              voluptate adipisicing. Voluptate velit nisi tempor sint qui velit
              in sunt laborum ea eu duis. Tempor commodo dolore reprehenderit
              sunt culpa voluptate culpa. Incididunt officia eu sit ut anim
              officia eiusmod velit ut.
            </p>
            <ul className="contactInfo">
              <li>
                <img src={emailImg} />
                <div>cfmc@gmail.com</div>
              </li>
              <li>
                <img src={phoneImg} />
                <div>(403) 912-2192</div>
              </li>
              <li>
                <img src={locationImg} />
                <div>912 Holy Road NE, Calgary, AB</div>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Index;
