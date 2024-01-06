export default function TheDate(){
    return(
        <>
          <section id="theDate" className="py-5" style={{backgroundColor:"#000000", color:"#ffffff"}}>
      <div className="container">
        <h1 className="fw-bold text-center" style={{textAlign: 'center', fontFamily: 'Montserrat, sans-serif'}}>Save the Date</h1>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2">
          <div className="col" style={{paddingTop: '5px', paddingBottom: '5px'}}>
            <fieldset style={{borderWidth: '1px', borderStyle: 'solid'}}>
              <legend className="fw-semibold float-none" style={{width: 'inherit', marginRight: '5px', marginLeft: '5px', fontFamily: 'Montserrat, sans-serif'}}>Akad Nikah</legend>
              <h6 className="fw-semibold mb-2" style={{textAlign: 'center', fontFamily: 'Montserrat, sans-serif'}}>13 April 2024<br />07.00 WIB - selesai</h6>
              <p style={{textAlign: 'center', fontFamily: 'Montserrat, sans-serif'}}>Penggarit, Taman, Pemalang</p>
            </fieldset>
          </div>
          <div className="col" style={{paddingTop: '5px', paddingBottom: '5px'}}>
            <fieldset style={{borderWidth: '1px', borderStyle: 'solid'}}>
              <legend className="fw-semibold float-none" style={{width: 'inherit', marginRight: '5px', marginLeft: '5px', fontFamily: 'Montserrat, sans-serif'}}>Resepsi</legend>
              <h6 className="fw-semibold mb-2" style={{textAlign: 'center', fontFamily: 'Montserrat, sans-serif'}}>13 April 2024<br />11.00 WIB - selesai</h6>
              <p style={{textAlign: 'center', fontFamily: 'Montserrat, sans-serif'}}>Penggarit, Taman, Pemalang</p>
            </fieldset>
          </div>
        </div><iframe allowFullScreen loading="lazy" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCM1VjClTYCj3Xf7hnOVOlmKaK9FHA1t6Q&q=Penggarit%2C+Taman&zoom=14" style={{maxHeight: '200px', paddingTop: '10px', paddingBottom: '10px'}} width="100%" height={400} frameBorder={0} />
      </div>
    </section>
        </>
    )
}