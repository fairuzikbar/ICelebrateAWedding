import Foto1 from "../assets/img/20230624_0010_01.jpg";
import Foto2 from "../assets/img/20230624_0003_01.jpg";
import Foto3 from "../assets/img/20230624_0005_01.jpg";
import Foto4 from "../assets/img/20230624_0006_01.jpg";
import Foto5 from "../assets/img/20230624_0008_01.jpg";
import Foto6 from "../assets/img/20230624_0009_01.jpg";
import React, { useState } from "react";

export default function Gallery() {
  return (
    <>
      <section id="gallery" className="photo-gallery pt-4 pt-xl-5 pt-5 py-2">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <h1
                className="fw-bold text-center"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Gallery
              </h1>
              <p
                className="w-lg-50"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Momen, momen apa yang bikin pusing?
                <br />
                Momentum xixixi
              </p>
            </div>
          </div>
          <div
            className="row gx-2 gy-2 row-cols-2 row-cols-md-3 row-cols-xl-3 photos"
            data-bss-baguettebox
          >
            <div className="col item">
              <img className="img-fluid" src={Foto1} />
            </div>
            <div className="col item">
              <img className="img-fluid" src={Foto2} />
            </div>
            <div className="col item">
              <img className="img-fluid" src={Foto3} />
            </div>
            <div className="col item">
              <img className="img-fluid" src={Foto4} />
            </div>
            <div className="col item">
              <img className="img-fluid" src={Foto5} />
            </div>
            <div className="col item">
              <img className="img-fluid" src={Foto6} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
