import React from "react";
import Fade from "react-reveal/Fade";
import DelayLink from "react-delay-link";
//images
import liveImg from "../../Images/Home/liveImg.jpg";
import liveIcon from "../../Images/Home/liveIcon.png";
const Live = (props) => {
  return (
    <section className="shortlive">
      <section className="shortlive__content">
        <Fade left>
          <section className="text">
            <img alt="video camera" src={liveIcon} />
            <h2>Join us on Facebook Live!</h2>
            <p>
              Tempor elit ut ex aute cupidatat consectetur cupidatat elit do.
              Esse consequat pariatur magna ut enim amet. Id in irure magna esse
              culpa mollit excepteur magna. Ex consectetur in ex veniam magna
              dolor do exercitation irure minim minim. Pariatur consequat
              aliquip ullamco fugiat aliquip magna deserunt. Consectetur nostrud
              consectetur ut veniam Lorem quis ex.
              <br />
              <br />
              Duis amet ad labore magna deserunt aliquip nostrud labore. Ut
              dolor ad irure ex. Do consectetur est cupidatat in irure est ut ex
              enim anim velit reprehenderit ad. Deserunt laboris elit velit
              cupidatat laborum magna commodo enim enim sit eu aliqua
              consectetur.
            </p>
            <DelayLink
              delay={500}
              to={"live"}
              replace={false}
              clickAction={() => {
                props.setIsLoading(true);
              }}
            >
              <button className="button-link">Join us LIVE</button>
            </DelayLink>{" "}
          </section>
        </Fade>
        <Fade right>
          <section className="img">
            <img src={liveImg} />
            <div className="filter" />
          </section>
        </Fade>
      </section>
    </section>
  );
};

export default Live;
