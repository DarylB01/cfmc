import React, { useEffect } from "react";
import DelayLink from "react-delay-link";
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
    window.scrollTo(0, 0);
    props.setActivePage("ABOUT");
    props.setDelayIsLoading(false);
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
            <DelayLink
              to="contact"
              delay={200}
              clickAction={() => {
                props.setIsLoading(true);
              }}
            >
              <button className="button-link" href="">
                Get In Touch
              </button>
            </DelayLink>
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
              setIsLoading={
                index === content.length - 1 ? props.setIsLoading : null
              }
            />
          );
        })}
      </section>
    </main>
  );
};

export default Index;
