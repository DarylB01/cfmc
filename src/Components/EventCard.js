import React from "react";
import DelayLink from "react-delay-link";
import Fade from "react-reveal";
import moment from "moment";

const EventCard = (props) => {
  return (
    <Fade left delay={200}>
      <article className="event__card">
        <DelayLink
          delay={500}
          to={`/event/${props.id}`}
          clickAction={() => {
            props.setIsLoading(true);
          }}
        >
          <div
            className="preview"
            style={{ backgroundImage: `url(${props.previewImg})` }}
          >
            <div className="filter" />
          </div>
          <div className="text">
            <h3>{props.title}</h3>
            <date>{moment(props.date).format("MMM, D YYYY")}</date>
            <p>{props.desc}</p>
          </div>
        </DelayLink>
      </article>
    </Fade>
  );
};

export default EventCard;
