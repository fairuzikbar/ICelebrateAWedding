export default function Footer() {
  return (
    <>
      <footer
        className="text-center pt-5"
        style={{ paddingBottom: "100px", fontSize: "14px" }}
      >
        <div className="container text-muted">
          <p
            className="mb-0 px-5"
            style={{ fontFamily: "Josefin Sans, sans-serif" }}
          >
            made with ❤️ by{" "}
            <a
              href="https://instagram.com/fairuzikbar"
              type="button"
              style={{ textDecoration: "none", color: "rgb(107, 110, 113)" }}
              target="_blank"
            >
              @fairuzikbar
            </a>{" "}
            and supported by{" "}
            <a
              href="https://instagram.com/pramaisiafra"
              type="button"
              style={{ textDecoration: "none", color: "rgb(107, 110, 113)" }}
              target="_blank"
            >
              @pramaisiafra
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
