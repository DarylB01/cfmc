import React from "react";
import DelayLink from "react-delay-link";
//img list
import emailImg from "../../Images/Footer/email.png";
import locationImg from "../../Images/Footer/location.png";
import phoneImg from "../../Images/Footer/phone.png";
import footerBg from "../../Images/Footer/footer-bg.jpg";

const index = (props) => {
  //to be used for the contacts
  const contactItems = [
    {
      content: "325 Holy Road",
      imgSrc: locationImg,
    },
    {
      content: "cfmc17@yahoo.com",
      imgSrc: emailImg,
    },
    {
      content: "(403) 992-0541",
      imgSrc: phoneImg,
    },
  ];
  //To be looped through the links
  const linkItems = ["ABOUT", "EVENTS", "VIDEOS", "CONTACT"];
  return (
    <footer className="footer">
      <section
        className="footer__img"
        style={{
          backgroundImage: `url(${footerBg})`,
        }}
      />
      <section className="footer__content">
        {/* Newsletter Signup  (Hooked up to mailchimp)*/}

        <section className="footer__newsletter">
          <h3>Newsletter</h3>
          <form
            action="https://netlify.us19.list-manage.com/subscribe/post?u=e4a40efc41827061ba6fc41d4&amp;id=52a15ca743"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
          >
            <div className="input__button">
              <input
                type="email"
                name="EMAIL"
                className="email"
                id="mce-EMAIL"
                placeholder="email address"
                required
              />
              <input
                type="submit"
                value="Sign Up"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              />
            </div>
          </form>
        </section>

        {/* Contact List */}

        <section className="footer__contact">
          <h3 className="title">Contact</h3>
          <ul className="list">
            {contactItems.map((item, index) => {
              return (
                <li key={index}>
                  <img src={item.imgSrc} alt="item" />
                  {item.content}
                </li>
              );
            })}
          </ul>
        </section>

        {/* Footer Links */}

        <section className="footer__links">
          <h3>Links</h3>
          <ul>
            {linkItems.map((item, index) => {
              return (
                <li key={index}>
                  <DelayLink
                    to={item.toLowerCase()}
                    delay={200}
                    clickAction={() => {
                      if (props.activePage !== item) {
                        props.setIsLoading(true);
                      }
                    }}
                  >
                    <a href="">{item}</a>
                  </DelayLink>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Schedule for mass */}
        <section className="footer__schedule">
          <h3>Schedule</h3>
          <time>Sundays 1:30 p.m. to 3:30 p.m.</time>
        </section>
      </section>
    </footer>
  );
};

export default index;
