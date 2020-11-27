import React, { useRef, useEffect, useState } from "react";
import "./Landing.scss";

import { Link } from "react-router-dom";

import { showTime } from "../../base";

import useKeyClick from "../../Hooks/useKeyClick";
import LandingUnder from "./LandingUnder";

export default function Landing() {
  const clockRef = useRef();
  const dayRef = useRef();

  useEffect(() => {
    showTime(clockRef, dayRef);
  }, []);

  useKeyClick({
    enter: {
      func: () => searchRef.current.focus(),
      shiftFunc: () => (window.location = "https://www.google.com/"),
    },
    downarrow: {
      shiftFunc: () => underRef.current.scrollIntoView(),
    },
    uparrow: {
      shiftFunc: () => aboveRef.current.scrollIntoView(),
    },
    n: "/notes",
    p: "/projects",
    h: "/",
  });

  const searchRef = useRef();
  const underRef = useRef();
  const aboveRef = useRef();

  const [links, setLinks] = useState([
    {
      to:
        "https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript",
      icon: <i class="fas fa-cart-plus"></i>,
      shortcut: "g",
    },
    {
      to:
        "https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript",
      icon: <i class="fas fa-cart-plus"></i>,
      shortcut: "g",
    },
  ]);

  return (
    <>
      <div ref={aboveRef} className="landing">
        <div className="landing__top">
          <Link to="/notes">
            <div className="landing__notes">
              <i class="far fa-clipboard"></i>
            </div>
          </Link>
          <Link to="/projects">
            <div className="landing__projects">
              <i class="fas fa-code"></i>
            </div>
          </Link>
        </div>
        <div className="landing__mid">
          <div className="landing__dateTime">
            <div ref={clockRef} class="landing__clock"></div>
            <div ref={dayRef} class="landing__day"></div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (searchRef.current.value == "") return;
              window.location = `https://www.google.com/search?q=${searchRef.current.value}`;
              searchRef.current.value = "";
            }}
            className="landing__search"
          >
            <i class="fas fa-search"></i>
            <input
              ref={searchRef}
              className="landing__search-bar"
              type="text"
            />
          </form>
        </div>
        <div className="landing__bottom">
          {links.map((link) => (
            <div className="landing__link">
              <a href={link.to}>{link.icon}</a>
              <div className="landing__link-del">
                <i class="fas fa-times"></i>
              </div>
            </div>
          ))}

          <div
            onClick={() =>
              setLinks((prev) => [
                ...prev,
                {
                  to: "/notes",
                  icon: <i class="fas fa-plus"></i>,
                },
              ])
            }
            className="landing__link landing__link--add"
          >
            {<i class="fas fa-plus"></i>}
          </div>
        </div>
      </div>
      <LandingUnder ref={underRef} />
    </>
  );
}

{
  /* <iframe
          src="https://open.spotify.com/embed/playlist/3otWMKNnFcofJcxAWIAEaZ"
          width="300"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe> */
}
