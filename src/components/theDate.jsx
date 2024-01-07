export default function TheDate() {
  return (
    <>
      <section
        id="theDate"
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
            Save the Date
          </h1>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2">
            <div
              className="col"
              style={{ paddingTop: "5px", paddingBottom: "5px" }}
            >
              <fieldset style={{ borderWidth: "1px", borderStyle: "solid" }}>
                <legend
                  className="fw-semibold float-none"
                  style={{
                    width: "inherit",
                    marginRight: "5px",
                    marginLeft: "5px",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Akad Nikah
                </legend>
                <h6
                  className="fw-semibold mb-2"
                  style={{
                    textAlign: "center",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  13 April 2024
                  <br />
                  07.00 WIB - selesai
                </h6>
                <p
                  style={{
                    textAlign: "center",
                    fontFamily: "Montserrat, sans-serif",
                    marginBottom: "0px",
                  }}
                >
                  Rumah Mempelai Wanita
                </p>
                <p
                  style={{
                    textAlign: "center",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "90%",
                  }}
                >
                  Desa Penggarit RT.002/RW.002 <br />
                  Kecamatan Taman, Kabupaten Pemalang
                </p>
              </fieldset>
            </div>
            <div
              className="col"
              style={{ paddingTop: "5px", paddingBottom: "5px" }}
            >
              <fieldset style={{ borderWidth: "1px", borderStyle: "solid" }}>
                <legend
                  className="fw-semibold float-none"
                  style={{
                    width: "inherit",
                    marginRight: "5px",
                    marginLeft: "5px",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Resepsi
                </legend>
                <h6
                  className="fw-semibold mb-2"
                  style={{
                    textAlign: "center",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  13 April 2024
                  <br />
                  11.00 WIB - selesai
                </h6>
                <p
                  style={{
                    textAlign: "center",
                    fontFamily: "Montserrat, sans-serif",
                    marginBottom: "0px",
                  }}
                >
                  Rumah Mempelai Wanita
                </p>
                <p
                  style={{
                    textAlign: "center",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "90%",
                  }}
                >
                  Desa Penggarit RT.002/RW.002 <br />
                  Kecamatan Taman, Kabupaten Pemalang
                </p>
              </fieldset>
            </div>
          </div>
          <iframe
            allowFullScreen
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1441.2948167051627!2d109.40922732694791!3d-6.944922086923921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fdd3d3a7cbd63%3A0xb0a5b7672eb765a5!2sAyam%20Bakar%20Nata%20(Mas%20Didit)!5e0!3m2!1sen!2sid!4v1704624830366!5m2!1sen!2sid"
            style={{
              maxHeight: "200px",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
            width="100%"
            height={400}
            frameBorder={0}
          />
        </div>
      </section>
    </>
  );
}
