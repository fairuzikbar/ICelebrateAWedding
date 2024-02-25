import React, { useState } from "react";

export default function InstaFilter() {
  return (
    <>
      <section id="instaFilter" className="">
        <div className="container pb-4 pb-xl-5 pb-5">
          <div className="text-center mx-auto">
            <div className="col d-print-none d-sm-none d-md-none d-lg-none d-xl-none d-xxl-none">
              <hr style={{ borderWidth: "2px", borderStyle: "solid" }} />
            </div>
            <h1
              className="fw-bold text-center pt-4 pt-xl-5 pt-5 py-2"
              style={{ fontFamily: "Josefin Sans, sans-serif" }}
            >
              Instagram Filter
            </h1>
            <p
              style={{
                fontFamily: "Josefin Sans, sans-serif",
                fontSize: "90%",
              }}
            >
              Rayakan hari bahagia kami dengan filter frame instagram pernikahan
              yang telah kami sediakan.
            </p>
          </div>
          <a
            href="https://www.instagram.com/ar/1083722149411456/"
            style={{ textDecoration: "none" }}
            target="_blank"
          >
            <button
              className="btn btn-dark d-block"
              type="submit"
              style={{
                fontFamily: "Josefin Sans, sans-serif",
                margin: "0 auto",
              }}
            >
              Akses Instagram Filter
            </button>
          </a>
        </div>
      </section>
    </>
  );
}
