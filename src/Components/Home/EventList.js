import React from "react";
//images
import fillerImg from "../../Images/Events/fillerEventImg.jpg";
//components
import EventCard from "../EventCard";

const index = () => {
  const eventsArray = [];

  for (let i = 0; i < 4; i++) {
    eventsArray.push({
      title: "Lorem ipsum dolor",
      date: "Jan 01, 2020",
      previewImg: fillerImg,
      desc: "Lorem ipsum dolor sit amet.",
      redirect: (
        <a href="" className="button-link">
          Read More
        </a>
      ),
    });
  }
  return (
    <section className="events">
      <section className="events__content">
        <h2 className="events__header">UPCOMING EVENTS</h2>
        <section className="events__list">
          {eventsArray.map((item, index) => {
            return <EventCard key={`even${index}`} {...item} />;
          })}
        </section>
        <a className="button-link" href="">
          See more
        </a>
      </section>
    </section>
  );
};

export default index;
