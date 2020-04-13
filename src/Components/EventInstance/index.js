import React, { useEffect, useState } from "react";
import moment from "moment";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
//images
import fillerBg from "../../Images/filler-event.jpg";
import locationImg from "../../Images/EventInstance/location.png";
import calendarImg from "../../Images/EventInstance/calendar.png";
import moneyImg from "../../Images/EventInstance/money.png";
import facebookImg from "../../Images/EventInstance/facebook.png";
//components
import Banner from "../Banners/Banner1";
//get data from contentful
import fetchData from "../fetchData";

const Index = (props) => {
  //state
  const [data, setData] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
    props.setActivePage("EVENTS");
    props.setDelayIsLoading(false);

    //fetching contentful
    const getData = async () => {
      let res = await fetchData.fetchOne(props.match.params.id);
      try {
        console.log(res);
        setData(res);
      } catch (err) {
        console.log(err);
      }
    };
	getData();
	
  }, []);
  return (
    <main className="event__instance">
      <Banner
        bannerImg={
          data.imgSrc
            ? "https:" + data.imgSrc.fields.file.url.substring(1)
            : fillerBg
        }
        title={data.title}
        content={<p>{data.subHeading}</p>}
        F
      />
      <section className="event__instance__content">
        <section className="content__info">
          <div className="item">
            <img src={calendarImg} />
            <div>
              <h4>Date</h4>
              <div className="">{moment(data.date).format("MMM, D YYYY")}</div>
            </div>
          </div>
          <div className="item">
            <img src={locationImg} />
            <div>
              <h4>Location</h4>
              <div className="">{data.locationOfEvent}</div>
            </div>
          </div>
          <div className="item">
            <img src={moneyImg} />
            <div>
              <h4>Cost</h4>
              <div className="">{data.cost}</div>
            </div>
          </div>
        </section>
        <section className="content__text">
          {documentToReactComponents(data.content)}
          <a href="">
            Share on <img src={facebookImg} />
          </a>
        </section>
      </section>
    </main>
  );
};

export default Index;
