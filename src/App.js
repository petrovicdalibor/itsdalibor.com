import { useEffect } from "react";
import gsap from "gsap";

import Banner from "./components/Banner";
import Header from "./components/Header";
import "./styles/global.scss";

function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    const tl = gsap.timeline();

    gsap.to("body", 0, { css: { visibility: "visible" } });

    tl.from(".line span", 1.8, {
      y: 100,
      ease: "power4.out",
      delay: 0.5,
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    })
      .to(".overlay", 1, {
        opacity: 0,
        delay: 0.4,
      })
      .to(".colorful", 0.5, { css: { color: "rgb(56, 255, 198)" } })
      .to(".overlay", 0, { css: { display: "none" } });
  }, []);

  return (
    <>
      <div className="overlay"></div>
      <Header />
      <Banner />
    </>
  );
}

export default App;
