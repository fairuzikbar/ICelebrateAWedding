import { useEffect } from "react";
import ModalBg from "../assets/img/20230624_0002_01.jpg"

export default function Modal(){
  useEffect(() => {
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const handleLoad = () => {
    const modal = document.getElementById('invite');
    modal.classList.add('show');
    modal.style.display = 'block';
  };

  const closeModal = () => {
    const modal = document.getElementById('invite');
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none'; // Hide the modal after the animation
    }, 300); // Adjust the duration of the fade-out animation if needed
  };

  const searchParams = new URLSearchParams(document.location.search)

    return(
        <>
          <div className="modal fade" role="dialog" tabIndex={-1} id="invite" onLoad={handleLoad}>
            <div className="modal-dialog modal-dialog-centered modal-fullscreen modal-fullscreen-sm-down modal-fullscreen-md-down modal-fullscreen-lg-down modal-fullscreen-xl-down modal-fullscreen-xxl-down" style={{width:"100%"}} role="document">
              <div className="modal-content">
                <div className="modal-body" style={{padding: '0px', backgroundImage: `url(${ModalBg})`, backgroundSize: 'cover', backgroundPosition: 'center',}}>
                  <div className="row d-flex flex-column mx-auto" style={{background: 'var(--bs-tertiary-color)', width: '100%', height: '100%'}}>
                    <div className="col d-flex flex-column justify-content-center align-items-center">
                      <h3 style={{textAlign: 'center', color: 'var(--bs-body-bg)', fontFamily: 'Montserrat, sans-serif'}}>Undangan<br />Pernikahan</h3>
                      <h1 className="display-1 fw-normal" style={{color: 'var(--bs-body-bg)', textAlign: 'center', fontFamily: 'Sacramento, serif'}}>Afra &amp; Ikbar</h1>
                    </div>
                    <div className="col">
                      <div className="d-flex flex-column justify-content-center">
                        <p style={{textAlign: 'center', color: 'var(--bs-body-bg)', fontFamily: 'Montserrat, sans-serif'}}>Kepada Yth.</p>
                        <p className="fs-2 fw-semibold" style={{textAlign: 'center', color: 'var(--bs-body-bg)', fontFamily: 'Montserrat, sans-serif'}}>{searchParams.get('to')}</p>
                        <p style={{textAlign: 'center', color: 'var(--bs-body-bg)', fontFamily: 'Montserrat, sans-serif'}}>Kami mengundang Anda<br />untuk hadir di hari bahagia kami.</p><button className="btn btn-light mx-auto py-auto" type="button" data-bs-dismiss="modal" style={{display: 'flex', flexDirection: 'row', fontFamily: 'Montserrat, sans-serif', alignItems: 'center'}} onClick={closeModal}><i className="fi-pd fi fi-ss-envelope-open" style={{fontSize: '20px'}}></i>Buka Undangan</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}