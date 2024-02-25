import { useEffect } from "react";
import ModalBg from "../assets/img/DSC5498.JPG";

export default function Modal() {
  useEffect(() => {
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => document.removeEventListener("load", handleLoad);
    }
    // window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  const handleLoad = () => {
    const modal = document.getElementById("invite");
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
    modal.style.display = "block";
  };

  document.addEventListener("DOMContentLoaded", handleLoad);

  const closeModal = () => {
    const modal = document.getElementById("invite");
    modal.classList.remove("show");
    document.body.style.overflow = "unset";
    setTimeout(() => {
      modal.style.display = "none"; // Hide the modal after the animation
    }, 1000); // Adjust the duration of the fade-out animation if needed
  };

  const searchParams = new URLSearchParams(document.location.search);

  return (
    <>
      <div className="modal fade" id="invite" onLoad={handleLoad}>
        <div
          className="modal-dialog modal-dialog-centered modal-fullscreen"
          style={{ width: "100%" }}
        >
          <div className="modal-content">
            <div
              className="modal-body"
              style={{
                padding: "0px",
                backgroundImage: `url(${ModalBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="row d-flex flex-column mx-auto"
                style={{
                  background: "var(--bs-tertiary-color)",
                  width: "100%",
                  height: "100%",
                }}
              >
                <div className="col d-flex flex-column justify-content-center align-items-center">
                  <h6
                    style={{
                      textAlign: "center",
                      color: "var(--bs-body-bg)",
                      fontFamily: "Josefin Sans, sans-serif",
                      // fontSize: "95%",
                    }}
                  >
                    Undangan Pernikahan
                  </h6>
                  <h1
                    className="display-1 fw-normal"
                    style={{
                      color: "var(--bs-body-bg)",
                      textAlign: "center",
                      fontFamily: "Allura, serif",
                    }}
                  >
                    Afra &amp; Ikbar
                  </h1>
                </div>
                <div className="col">
                  <div className="d-flex flex-column justify-content-center">
                    <p
                      style={{
                        textAlign: "center",
                        color: "var(--bs-body-bg)",
                        fontFamily: "Josefin Sans, sans-serif",
                      }}
                    >
                      Kepada Yth.
                    </p>
                    <p
                      className="fs-2 fw-semibold"
                      style={{
                        textAlign: "center",
                        color: "var(--bs-body-bg)",
                        fontFamily: "Josefin Sans, sans-serif",
                      }}
                    >
                      {searchParams.get("to")}
                    </p>
                    <p
                      style={{
                        textAlign: "center",
                        color: "var(--bs-body-bg)",
                        fontFamily: "Josefin Sans, sans-serif",
                      }}
                    >
                      Kami mengundang Anda
                      <br />
                      untuk hadir di hari bahagia kami.
                    </p>
                    <button
                      className="btn btn-light mx-auto py-auto"
                      type="button"
                      data-bs-dismiss="modal"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        fontFamily: "Montserrat, sans-serif",
                        alignItems: "center",
                      }}
                      onClick={closeModal}
                    >
                      <i
                        className="fi-pd fi fi-ss-envelope-open"
                        style={{ fontSize: "20px" }}
                      ></i>
                      Buka Undangan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
