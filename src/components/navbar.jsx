export default function Navbar(){
    return(
        <>
            <nav className="navbar navbar-light navbar-expand fixed-bottom d-none d-md-flex d-lg-flex d-xl-flex d-xxl-flex" style={{position: 'fixed', bottom: 0, background: 'var(--bs-body-bg)', boxShadow: '0px 0px 10px var(--bs-black)'}}>
    <div className="container-fluid d-flex justify-content-center mx-auto">
      <ul className="navbar-nav">
        <li className="nav-item"><a className="nav-link text-center d-flex align-items-center" href="#weddingMain"><i className="fi-pd fi fi-ss-rings-wedding" />Main</a></li>
        <li className="nav-item"><a className="nav-link text-center d-flex align-items-center" href="#brideGroom"> <i className="fi-pd fi fi-ss-heart" />Bride Groom</a></li>
        <li className="nav-item"><a className="nav-link text-center d-flex align-items-center" href="#theDate"><i className="fi-pd fi fi-ss-calendar-heart" />The Date</a></li>
        <li className="nav-item"><a className="nav-link text-center d-flex align-items-center" href="#gallery"><i className="fi-pd fi fi-ss-camera" />Our Gallery</a></li>
        <li className="nav-item"><a className="nav-link text-center d-flex align-items-center" href="#greeting"><i className="fi-pd fi fi-ss-comment" />Greeting</a></li>
      </ul>
    </div>
  </nav>
  <nav className="navbar navbar-light navbar-expand fixed-bottom d-flex d-print-none d-sm-flex d-md-none d-lg-none d-xl-none d-xxl-none" style={{position: 'fixed', bottom: 0, background: 'var(--bs-body-bg)', boxShadow: '0px 0px 10px 0px var(--bs-black)'}}>
    <div className="container-fluid d-flex justify-content-center mx-auto">
      <ul className="navbar-nav">
        <li className="nav-item mx-3"><a className="nav-link text-center" href="#weddingMain"><i className="fi fi-ss-rings-wedding" /></a></li>
        <li className="nav-item mx-3"><a className="nav-link text-center" href="#brideGroom"> <i className="fi fi-ss-heart" /></a></li>
        <li className="nav-item mx-3"><a className="nav-link text-center" href="#theDate"><i className="fi fi-ss-calendar-heart" /></a></li>
        <li className="nav-item mx-3"><a className="nav-link text-center" href="#gallery"><i className="fi fi-ss-camera" /></a></li>
        <li className="nav-item mx-3"><a className="nav-link text-center" href="#greeting"><i className="fi fi-ss-comment" /></a></li>
      </ul>
    </div>
  </nav>
        </>  
    )
}