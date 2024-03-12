import Couple from "../assets/img/DSC5480.jpg";
import React, { useReducer } from "react";

export default function Header() {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  var countDownDate = new Date("Apr 13, 2024 7:00:00").getTime();
  var myfunc = setInterval(function () {
    forceUpdate();
  }, 1000);
  var now = new Date().getTime();
  var timeleft = countDownDate - now;
  var days = Math.floor(timeleft / 864e5);
  var hours = Math.floor((timeleft % 864e5) / 36e5);
  var minutes = Math.floor((timeleft % 36e5) / 6e4);
  var seconds = Math.floor((timeleft % 6e4) / 1e3);

  return (
    <>
      <header
        id="weddingMain"
        className="py-5"
        style={{ backgroundColor: "#000000", color: "#ffffff" }}
      >
        <div className="container" style={{ marginTop: "100px" }}>
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2">
            <div className="col">
              <div className="d-flex flex-column align-items-center">
                <p style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                  The Wedding Of
                </p>
                <img
                  src={Couple}
                  style={{
                    width: "180px",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "90px",
                  }}
                />
                <p
                  style={{
                    fontFamily: "Allura, serif",
                    textAlign: "center",
                    fontSize: "46px",
                  }}
                >
                  Afra &amp; Ikbar
                </p>
              </div>
            </div>
            <div className="col my-auto">
              <div
                id="countdown"
                className="d-flex justify-content-center countdown"
              >
                <div
                  style={{
                    padding: "4px",
                  }}
                >
                  <h3 style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                    {days}
                  </h3>
                  <h4 style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                    Days
                  </h4>
                </div>
                <div
                  style={{
                    padding: "4px",
                  }}
                >
                  <h3 style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                    {hours}
                  </h3>
                  <h4 style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                    Hours
                  </h4>
                </div>
                <div
                  style={{
                    padding: "4px",
                  }}
                >
                  <h3 style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                    {minutes}
                  </h3>
                  <h4 style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                    Minutes
                  </h4>
                </div>
                <div
                  style={{
                    padding: "4px",
                  }}
                >
                  <h3 style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                    {seconds}
                  </h3>
                  <h4 style={{ fontFamily: "Josefin Sans, sans-serif" }}>
                    Seconds
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
