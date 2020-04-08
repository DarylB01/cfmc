import React from "react";
import Fade from "react-reveal";
//images

const Item = (props) => {
  return (
    <article className="about__item">
      <img
        src={props.img}
        className="picture"
        alt="group of people"
        onLoad={props.setIsLoading ? props.setIsLoading(false) : null}
      />
      <div className="text">
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
    </article>
  );
};

export default Item;
