import React from "react";
//images
import fillerImg from "../../Images/AllEvents/filler-img.jpg";
//components
import EventCard from "../EventCard";

const List = () => {
  const eventList = [];
  //filler data for events
  for (let i = 0; i < 10; i++) {
    eventList.push({
      title: "Dolore quis esse.",
      date: "June 12, 2020",
      desc: "Veniam reprehenderit.",
      previewImg: fillerImg,
      redirect: (
        <a href="" className="button-link">
          Read More
        </a>
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
