import React from "react";
import Fade from "react-reveal";
import DelayLink from "react-delay-link";
//images
import fillerImg from "../../Images/Events/fillerEventImg.jpg";
//components
import EventCard from "../EventCard";

const index = (props) => {
  const eventsArray = [];

  for (let i = 0; i < 4; i++) {
    eventsArray.push({
      title: "Lorem ipsum dolor",
      date: "Jan 01, 2020",
      previewImg: fillerImg,
      desc: "Lorem ipsum dolor sit amet.",
      redirect: (
        <DelayLink
          to="/instance"
          delay={200}
          clickAction={() => {
            props.setIsLoading(true);
          }}
        >
          <button className="button-link">Read More</button>
        </DelayLink>
      ),
    });
  }
  return (
    <section className="events">
      <section className="events__content">
        <Fade left>
          <h2 className="events__header">UPCOMING EVENTS</h2>
        </Fade>
        <section className="events__list">
          {eventsArray.map((item, index) => {
            return (
              <Fade left>
                <EventCard key={`even${index}`} {...item} />
              </Fade>
            );
          })}
        </section>
        <Fade left>
          <DelayLink
            to="/events"
            delay={200}
            clickAction={() => {
              props.setIsLoading(true);
            }}
          >
            <button className="button-link" href="">
              See more
            </button>
          </DelayLink>
        </Fade>
      </section>
    </section>
  );
};

export default index;
