import React, { useEffect } from "react";
//images
import churchImg from "../../Images/Home/church-bg.jpg";
//components
import ImgGallery from "./ImgGallery";
import EventList from "./EventList";
import ShortLive from "./ShortLive";
import ShortAbout from "./ShortAbout";
const Index = (props) => {
  useEffect(() => {
    props.setActivePage("HOME");
  }, []);
  return (
    <React.Fragment>
      <main className="home">
        <section className="bgfilter" />
        <img className="bg" alt="bible" src={churchImg} />
        <section className="home__content">
          <ImgGallery />
          <section className="text">
            <h2>A Caring Church for changing times.</h2>
            <p>
              Occaecat dolore veniam velit ut ullamco exercitation aliquip ut ut
              pariatur incididunt tempor. Labore labore ipsum adipisicing anim
              laborum est quis irure labore enim nostrud consequat aliquip.
              Mollit aliqua ullamco magna irure consectetur consectetur.
            </p>
          </section>
        </section>
      </main>
      <ShortLive />
      <ShortAbout />
      <EventList />
    </React.Fragment>
  );
};

export default Index;
