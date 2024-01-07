import { supabaseClient } from "../api/supabaseClient";
import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Gift() {
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

  const copyAddressToClipBoard = async (copyMe) => {
    try {
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        title: "Confirm to Us",
        html: `
          <a href="https://wa.me/628994513514?text=Halo%20Ikbar.%20Aku%20mau%20kirim%20hadiah%20ke%20rumah.%20Apakah%20bisa?" style="text-decoration: inherit;color: inherit;"><p>0899-4513-514 (Ikbar)</p><a/>
          <a href="https://wa.me/6285155299609?text=Halo%20Afra.%20Aku%20mau%20kirim%20hadiah%20ke%20rumah.%20Apakah%20bisa?" style="text-decoration: inherit;color: inherit;"><p>0851-5529-9609 (Afra)</p><a/>
        `,
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: `
          Close
        `,
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
            style={{ fontFamily: "Montserrat, sans-serif", fontSize: "90%" }}
          >
            Mohon konfirmasi pada form atau kontak yang telah kami sediakan
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
          <div
            className="col"
            style={{
              paddingTop: "5px",
              paddingBottom: "5px",
              maxWidth: "400px",
              margin: "0 auto",
            }}
          >
            <div className="card">
              <div className="card-body d-inline-flex align-items-center mx-auto align-items-md-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-gift"
                    viewBox="0 0 16 16"
                    style={{ marginRight: "10px" }}
                  >
                    <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z" />{" "}
                  </svg>
                </div>
                <div>
                  <p
                    className="m-auto"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    <b>Miral Enam Residence</b>
                  </p>
                  <p
                    className="m-auto"
                    id="send-gift"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Jl. Lobak, RT.04/RW.06,
                    <br />
                    Pd. Cabe Ilir, Kec. Pamulang,
                    <br />
                    Kota Tangerang Selatan,
                    <br />
                    Banten 15418
                  </p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="fs-3"
                    style={{ marginLeft: "10px" }}
                    onClick={() =>
                      copyAddressToClipBoard(
                        document.getElementById("send-gift").innerHTML
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
