import React, { useState } from "react";

export default function ClosingStatement() {
  return (
    <>
      <section
        className="py-5"
        style={{ backgroundColor: "#000000", color: "#ffffff" }}
      >
        <div className="container">
          <h1
            className="fw-bold text-center pt-5"
            style={{
              textAlign: "center",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Afra & Ikbar
          </h1>
          <p
            className="text-center"
            style={{ fontFamily: "Montserrat, sans-serif", fontSize: "90%" }}
          >
            Merupakan sebuah kehormatan dan kebahagiaan bagi kami jika
            Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu bagi
            kami. Terima kasih. <br />
            Wassalamu'alaikum Wr. Wb.
          </p>
          <div className="card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ marginLeft: "10px", marginTop: "10px" }}
            >
              <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
            </svg>
            <div
              className="card-body d-inline-flex align-items-center mx-auto align-items-md-center"
              style={{
                paddingTop: "0px",
                marginTop: "-5px",
                paddingBottom: "0px",
                marginBottom: "-15px",
              }}
            >
              <p
                className="m-auto align-items-justify"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  textAlign: "center",
                  fontSize: "14px",
                }}
              >
                Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu
                pasangan hidup dari jenismu sendiri supaya kamu dapat ketenangan
                hati dan dijadikannya kasih sayang di antara kamu. Sesungguhnya
                yang demikian menjadi tanda-tanda kebesaran-Nya bagi orang-orang
                yang berpikir.
              </p>
            </div>
            <div
              className="flex"
              style={{ justifyContent: "flex-end", display: "flex" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ marginBottom: "10px", marginRight: "10px" }}
              >
                <path d="M11 9.275c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275zm13 0c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275z" />
              </svg>
            </div>
            <p
              className="m-auto align-items-center"
              style={{
                fontFamily: "Montserrat, sans-serif",
                textAlign: "center",
                paddingBottom: "10px",
              }}
            >
              - Q.S. Ar-Rum: 21 -
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
