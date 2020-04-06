import React from "react";
//images
import fillerPreview from "../../Images/Live/preview.jpg";
import playButton from "../../Images/Live/play-button.png";
import EventCard from "../EventCard";

export const VideoCollection = () => {
  const fillerData = [];

  for (let i = 0; i < 10; i++) {
    fillerData.push({
      title: "Video Title",
      date: "Jan 05, 2021",
      previewImg: fillerPreview,
      desc: "Consequat voluptate labore.",
      redirect: (
        <a className="imglink" href="">
          <img src={playButton}></img>
        </a>
      ),
    });
  }
  return (
    <section className="live__collection">
      <h2 className="collection__title">Our Video Collection</h2>
      <h4 className="collection__subhead">
        Et et excepteur velit dolor laborum fugiat.
      </h4>
      <section className="collection__list">
        {fillerData.map((vid, index) => {
          return <EventCard {...vid} />;
        })}
      </section>
    </section>
  );
};
