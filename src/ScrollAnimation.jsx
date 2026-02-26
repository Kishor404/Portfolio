import React, { useState, useEffect } from "react";
import "./ScrollAnimation.css";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Backend from "./Pages/Backend";
import FullStack from "./Pages/FullStack";

const ScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);

    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setWindowHeight(window.innerHeight);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollProgress = windowHeight > 0 ? scrollY / windowHeight : 0;

  /* Phase 1: zoom */
  const contentTranslateY = Math.max(-100, Math.min(0, -(scrollProgress * 100)));
  const zoomProgress = Math.max(0, Math.min(1, (scrollProgress - 1) / 1.5));

  /* Phase 2: mobile */
  const mobileProgress = Math.max(0, Math.min(1, (scrollProgress - 3) / 1.5));

  /* STOP animation after mobile */
  const stopAnimation = scrollProgress > 4.5;

  /* wrapper transforms */
  const wrapperWidth = 100 - (mobileProgress * 80);
  const wrapperHeight = 100 - (mobileProgress * 25);
  const wrapperLeft = 50 + (mobileProgress * 25);
  const wrapperRadius = mobileProgress * 40;

  /* laptop transforms */
  const laptopScale = 1 - (zoomProgress * 0.6) - (mobileProgress * 0.23);
  const laptopX = -(zoomProgress * 20) + (mobileProgress * 20);
  const laptopY = -(mobileProgress * 16);

  /* web text */
  const textOpacity = Math.max(0, zoomProgress - (mobileProgress * 2));
  const textX = (zoomProgress * 25) - (mobileProgress * 25);
  const textY = (mobileProgress * 22);

  /* mobile text */ 

  const mobileTextOpacity = stopAnimation ? 1 : mobileProgress;

  return (
    <>
      <div className="scroll-wrapper">
        {/* Removed the 'release' class logic */}
        <div className="fixed-viewport"> 

          {/* Website Text */}
          <div
            className="info-text web-text"
            style={{
              opacity: textOpacity,
              transform: `translate(-50%, -50%) translate(${textX}vw, ${textY}vh)`
            }}
          >
            <h2>Website Development</h2>
            <p>Building modern responsive websites.</p>
          </div>

          {/* Mobile Text */}
          <div
            className="info-text mobile-text"
            style={{
              opacity: mobileTextOpacity,
              position: "absolute", 
              transform: `translateY(-50%) translateX(20vw)`, 
            }}
          >
            <h2>Mobile App Development</h2>
            <p>Creating powerful Android and iOS apps.</p>
          </div>

          {/* Device Wrapper */}
          <div
            className="device-wrapper"
            style={{
              width: `${wrapperWidth}vw`,
              height: `${wrapperHeight}vh`,
              left: `${wrapperLeft}%`,
              top: "50%",
              borderRadius: `${wrapperRadius}px`,
              backgroundColor: mobileProgress > 0 ? "#000" : "transparent"
            }}
          >
            <div
              className="laptop-wrapper"
              style={{
                transform: `translate(-50%, -50%) translate(${laptopX}vw, ${laptopY}vh) scale(${laptopScale})`
              }}
            >
              <div className="laptop-screen">
                <div
                  className="inner-website"
                  style={{ transform: `translateY(${contentTranslateY}vh)` }}
                >
                  <Hero />
                  <About />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NORMAL WEBSITE SECTIONS */}
      {/* These will seamlessly scroll up from the bottom right after the animation finishes! */}
      <Backend />
      <FullStack />
    </>
  );
};

export default ScrollAnimation;