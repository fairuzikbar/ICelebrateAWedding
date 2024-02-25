import React, { useState } from "react";

// Brown Photo
import Foto1 from "../assets/img/DSC5461.JPG";
// import Foto2 from "../assets/img/DSC5472.JPG";
// import Foto3 from "../assets/img/DSC5506.JPG";
import Foto4 from "../assets/img/DSC5517.JPG";
import Foto5 from "../assets/img/DSC5527.JPG";
// import Foto6 from "../assets/img/DSC5526.JPG";

// Circular Photo
// import Foto1 from "../assets/img/DSC5530.JPG";
import Foto2 from "../assets/img/DSC5531.JPG";
import Foto3 from "../assets/img/DSC5532.JPG";
// import Foto4 from "../assets/img/DSC5563.JPG";
// import Foto5 from "../assets/img/DSC5567.JPG";
import Foto6 from "../assets/img/DSC5570.JPG";

export default function Gallery() {
  return (
    <>
      <section id="gallery" className="photo-gallery pt-4 pt-xl-5 pt-5 py-2">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <h1
                className="fw-bold text-center"
                style={{ fontFamily: "Josefin Sans, sans-serif" }}
              >
                Gallery
              </h1>
              <p
                className="w-lg-50"
                style={{
                  fontFamily: "Josefin Sans, sans-serif",
                  fontSize: "90%",
                }}
              >
                Beberapa momen potret kebahagiaan kami
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
