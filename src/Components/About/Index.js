import React, { useEffect } from "react";
//components
import Item from "./Item";
import itemContent from "./itemContent";
import Banner from "../Banners/Banner1";
//images
import bannerImg from "../../Images/About/banner-img.jpg";

const Index = (props) => {
  let content = itemContent;
  //state
  useEffect(() => {
	  props.setActivePage("ABOUT")
  }, []);
  return (
    <main className="about">
      <Banner
        bannerImg={bannerImg}
        title={"Our Mission"}
        content={
          <React.Fragment>
            <p>
              To reach out to as many people as we possibly can to share with
              them the good news of God's redeeming love in Jesus Christ.
              <br />
              <br /> To lead them to that new life of faith, trust, love and
              obedience to Jesus Christ.
              <br />
              <br /> To continue nurturing them to become Christ-like in their
              lives.
            </p>
            <a className="button-link" href="">
              Get In Touch
            </a>
          </React.Fragment>
        }
      />
      <section className="about__content">
        {content.map((item, index) => {
          return (
            <Item
              key={"item" + index}
              title={item.title}
              desc={item.desc}
              img={item.imgSrc}
            />
          );
        })}
      </section>
    </main>
  );
};

export default Index;
