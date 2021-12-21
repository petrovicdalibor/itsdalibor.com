import React from "react";

function Banner() {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>
                Hi, my name is <div className="colorful">Dalibor</div>
              </span>
            </div>
            <div className="line">
              <span>
                I design and develop <p className="nl">webapps</p>
              </span>
            </div>
            <div className="line">
              <span>webapps</span>
            </div>
          </h2>
          <div className="btn-row">
            <a href="https://github.com/petrovicdalibor">Let me show you</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
