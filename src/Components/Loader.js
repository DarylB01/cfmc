import React, { useEffect } from "react";

//Loader
import BeatLoader from "react-spinners/BeatLoader";
//transition
import { Transition } from "react-transition-group";
//transition style
const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1, pointerEvents: "auto" },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const defaultStyle = {
  transition: `opacity 0.2s`,
  opacity: 0,
  zIndex: 99999,
  pointerEvents: "none",
};

const Loader = (props) => {
  //component initial mount
  useEffect(() => {
    let root = document.getElementById("root");
    if (props.isLoading) {
      root.style.height = "100vh";
      root.style.overflow = "hidden";
    } else {
      root.style.height = null;
      root.style.overflow = null;
    }
  }, [props.isLoading]);
  return (
    <Transition in={props.isLoading} timeout={100} unmountOnExit={false}>
      {(state) => (
        <div
          className="loader"
          style={{
            zIndex: "500",
            ...defaultStyle,

            ...transitionStyles[state],
          }}
        >
          <BeatLoader />
        </div>
      )}
    </Transition>
  );
};

export default Loader;
