import "./App.css";

import Navbar from "./components/navbar";
import Header from "./components/header";
import BrideGroom from "./components/brideGroom";
import TheDate from "./components/theDate";
import Gallery from "./components/gallery";
import Greeting from "./components/greeting";
import Footer from "./components/footer";
import Modal from "./components/modal";
import PhotoSlider from "./components/photoSlider";
import ClosingStatement from "./components/closingStatement";
import Gift from "./components/gift";
import InstaFilter from "./components/instaFilter";

function App() {
  return (
    <>
      <Modal />
      <link
        rel="stylesheet"
        href="https://cdn-uicons.flaticon.com/uicons-regular-straight/css/uicons-regular-straight.css"
      ></link>
      <link
        rel="stylesheet"
        href="https://cdn-uicons.flaticon.com/uicons-solid-straight/css/uicons-solid-straight.css"
      ></link>

      <div
        className="d-flex flex-column mx-auto"
        style={{ minWidth: "400px", maxWidth: "720px" }}
      >
        <Navbar />
        <Header />
        <main>
          <BrideGroom />
          <TheDate />
          <Gallery />
          <PhotoSlider />
          <InstaFilter />
          <Gift />
          <Greeting />
          <ClosingStatement />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
