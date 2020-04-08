import React from "react";

const EventCard = (props) => {
  return (
    <article className="event__card">
      <div
        className="preview"
        style={{ backgroundImage: `url(${props.previewImg})` }}
      >
        <div className="filter"></div>
      </div>
      <div className="text">
        <h3>{props.title}</h3>
        <date>{props.date}</date>
        <p>{props.desc}</p>
        {props.redirect}
      </div>
    </article>
  );
};

export default EventCard;
