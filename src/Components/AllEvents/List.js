import React from "react";
import DelayLink from "react-delay-link";
//images
import fillerImg from "../../Images/AllEvents/filler-img.jpg";
//components
import EventCard from "../EventCard";

const List = (props) => {
  const eventList = [];
  //filler data for events
  for (let i = 0; i < 10; i++) {
    eventList.push({
      title: "Dolore quis esse.",
      date: "June 12, 2020",
      desc: "Veniam reprehenderit.",
      previewImg: fillerImg,
      redirect: (
        <DelayLink
          to="/instance"
          delay={200}
          clickAction={() => {
            props.setIsLoading(true);
          }}
        >
          <button href="" className="button-link">
            Read More
          </button>
        </DelayLink>
      ),
    });
  }
  return (
    <section className="allevents__list">
      {eventList.map((item, index) => {
        return <EventCard key={`event${index}`} {...item} />;
      })}
    </section>
  );
};

export default List;
