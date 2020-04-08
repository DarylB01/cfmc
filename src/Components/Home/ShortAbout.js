import React from "react";
import Fade from "react-reveal";
import DelayLink from "react-delay-link";
//images
import aboutBg from "../../Images/Home/about-bg.jpg";

const ShortAbout = (props) => {
  return (
    <section className="shortabout">
      <Fade left>
        <section className="shortabout__content">
          <h2>WHO WE ARE</h2>
          <p>
            Pariatur cupidatat nostrud et magna anim nostrud do culpa et. Esse
            aliqua irure ipsum aliqua velit id et occaecat mollit qui veniam.
            Occaecat irure irure nostrud sint non dolore nostrud ea ipsum do id
            tempor cillum id. Culpa ipsum commodo cillum mollit. Dolore pariatur
            consequat consectetur ipsum non tempor aliqua. Et laboris
            reprehenderit officia non ut consequat. Id culpa exercitation dolore
            id deserunt ut ad nulla cupidatat.
            <br /> <br /> Et consectetur deserunt elit excepteur eu ea ex sit
            anim esse et quis magna. Exercitation ea consectetur reprehenderit
            ipsum labore ea reprehenderit adipisicing. Non duis ipsum fugiat
            elit in commodo laborum sunt aute aliqua ea esse quis. Tempor ut
            exercitation consequat adipisicing cupidatat velit. Ipsum ut et
            ullamco elit nulla in esse sint ex. Sit aliqua proident laborum
            nulla sunt in cillum magna excepteur. Amet consectetur non deserunt
            exercitation amet exercitation sint sint voluptate esse. Incididunt
            culpa aliqua Lorem officia et id. Consectetur minim ex excepteur
            velit in do aliqua duis aliquip exercitation.
          </p>
          <DelayLink
            replace={false}
            to="about"
            clickAction={() => {
              props.setIsLoading(true);
            }}
          >
            <button className="button-link" href="">
              Learn More
            </button>
          </DelayLink>
        </section>
      </Fade>
      <section className="bg" style={{ backgroundImage: `url(${aboutBg})` }} />
      <section className="filter" />
    </section>
  );
};

export default ShortAbout;
