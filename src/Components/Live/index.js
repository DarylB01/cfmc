import React from "react";
//images
import bgImg from "../../Images/Live/live-bg.jpg";
//components
import Banner from "../Banners/Banner1";
import Summary from "./Summary";
import { VideoCollection } from "./VideoCollection";

const index = () => {
  return (
    <main className="live">
      <Banner
        bannerImg={bgImg}
        title={"Join our Livestream"}
        content={
          <React.Fragment>
            <p>
              Pariatur eu dolore non labore eu et mollit duis in. Sit dolore
              eiusmod aute labore exercitation esse sint sunt quis.
            </p>
            <a className="button-link" href="">
              Watch stream
            </a>
          </React.Fragment>
        }
      />
      <Summary />
      <VideoCollection />
    </main>
  );
};

export default index;
