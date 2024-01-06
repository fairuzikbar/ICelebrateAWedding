import { supabaseClient } from "../api/supabaseClient";
import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Payment() {
  async function setTrx(name, nominal) {
    const { data, error } = await supabaseClient
      .from("guest_trx")
      .insert([{ name: name, nominal: nominal }])
      .select();
  }

  const [copySuccess, setCopySuccess] = useState("");
  const copyToClipBoard = async (copyMe) => {
    try {
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        title: "Confirm your gift",
        html: `<input type="text" id="name" class="swal2-input" placeholder="Name">
        <input type="number" id="nominal" class="swal2-input" placeholder="0">`,
        confirmButtonText: "Confirm",
        showCancelButton: true,
        focusConfirm: false,
        preConfirm: () => {
          const name = Swal.getPopup().querySelector("#name").value;
          const nominal = Swal.getPopup().querySelector("#nominal").value;
          setTrx(name, nominal);
          return { name: name, nominal: nominal };
        },
      }).then((result) => {
        if (result.isConfirmed) {
          MySwal.fire(`
          Thank You, ${result.value.name}!
        `);
        }
      });
      await navigator.clipboard.writeText(copyMe);
      // alert('Copied!');
      setCopySuccess("Copied!");
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };

  return (
    <>
      <section
        className="py-5"
        style={{ backgroundColor: "#000000", color: "#ffffff" }}
      >
        <div className="container">
          <h1
            className="fw-bold text-center"
            style={{
              textAlign: "center",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Wedding Gift
          </h1>
          <p
            className="text-center"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Tunjukkan kekayaan Anda di sini
          </p>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2">
            <div
              className="col"
              style={{ paddingTop: "5px", paddingBottom: "5px" }}
            >
              <div className="card">
                <div className="card-body d-inline-flex align-items-center mx-auto align-items-md-center">
                  <img
                    className="img-fluid"
                    style={{ marginRight: "10px", maxWidth: "50px" }}
                    src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Mandiri_logo_2016.svg"
                  />
                  <div>
                    <p
                      className="m-auto"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      a.n. Fairuz Ikbar Wikantyo
                    </p>
                    <p
                      className="m-auto"
                      id="payment-ikbar"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      1234 5678 90
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="fs-3"
                    onClick={() =>
                      copyToClipBoard(
                        document.getElementById("payment-ikbar").innerHTML
                      )
                    }
                    style={{ marginLeft: "10px" }}
                    type="button"
                  >
                    {/*! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. */}
                    <path d="M384 96L384 0h-112c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48H464c26.51 0 48-21.49 48-48V128h-95.1C398.4 128 384 113.6 384 96zM416 0v96h96L416 0zM192 352V128h-144c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h192c26.51 0 48-21.49 48-48L288 416h-32C220.7 416 192 387.3 192 352z" />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="col"
              style={{ paddingTop: "5px", paddingBottom: "5px" }}
            >
              <div className="card">
                <div className="card-body d-inline-flex align-items-center mx-auto align-items-md-center">
                  <img
                    className="img-fluid"
                    style={{ marginRight: "10px", maxWidth: "50px" }}
                    src="https://upload.wikimedia.org/wikipedia/commons/a/af/Bank_Mega_2013.svg"
                  />
                  <div>
                    <p
                      className="m-auto"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      a.n. Pramaisi Afra Maulidita
                    </p>
                    <p
                      className="m-auto"
                      id="payment-afra"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      0987 6543 21
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="fs-3"
                    style={{ marginLeft: "10px" }}
                    onClick={() =>
                      copyToClipBoard(
                        document.getElementById("payment-afra").innerHTML
                      )
                    }
                    type="button"
                  >
                    {/*! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. */}
                    <path d="M384 96L384 0h-112c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48H464c26.51 0 48-21.49 48-48V128h-95.1C398.4 128 384 113.6 384 96zM416 0v96h96L416 0zM192 352V128h-144c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h192c26.51 0 48-21.49 48-48L288 416h-32C220.7 416 192 387.3 192 352z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
