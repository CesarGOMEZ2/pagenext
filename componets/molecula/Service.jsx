import "../../bootstrap/css/bootstrap.css";
import "../../bootstrap/css/bootstrap.min.css";
import Image from "next/image";
function Service() {
    return(
        <>
        <div className="container-fluid py-5">
  <div className="container">
    <div
      className="border-start border-5 border-primary ps-5 mb-5"
      style={{ maxWidth: 600 }}
    >
      <h6 className="text-primary text-uppercase">Services</h6>
      <h1 className="display-5 text-uppercase mb-0">
        Our Excellent Pet Care Services
      </h1>
    </div>
    <div className="row g-5">
      <div className="col-md-6">
        <div className="service-item bg-light d-flex p-4">
       <div className="d-flex flex-row" style={{width: "40%"}} >
            <Image className="w-3rem h-3rem m-2 font-bold" 
                    src="/img/temp.png"
                    alt="Fondo de Login"
                    layout="responsive" // Configura el diseño como "responsive"
                    width={1000} // Establece un ancho fijo (en píxeles) para la imagen
                    height={600} // Establece un alto fijo (en píxeles) para la imagen
                >
            </Image> 
        </div> 
          <div>
            <h5 className="text-uppercase mb-3">Pet Boarding</h5>
            <p>
              Kasd dolor no lorem sit tempor at justo rebum rebum stet justo
              elitr dolor amet sit
            </p>
            <a className="text-primary text-uppercase" href="">
              Read More
              <i className="bi bi-chevron-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="service-item bg-light d-flex p-4">
        <div className="d-flex flex-row" style={{width: "40%"}} >
            <Image className="w-3rem h-3rem m-2 font-bold" 
                    src="/img/humed.png"
                    alt="Fondo de Login"
                    layout="responsive" // Configura el diseño como "responsive"
                    width={1000} // Establece un ancho fijo (en píxeles) para la imagen
                    height={600} // Establece un alto fijo (en píxeles) para la imagen
                >
            </Image> 
        </div> 
          <div>
            <h5 className="text-uppercase mb-3">Pet Feeding</h5>
            <p>
              Kasd dolor no lorem sit tempor at justo rebum rebum stet justo
              elitr dolor amet sit
            </p>
            <a className="text-primary text-uppercase" href="">
              Read More
              <i className="bi bi-chevron-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="service-item bg-light d-flex p-4">
        <div className="d-flex flex-row" style={{width: "40%"}} >
            <Image className="w-3rem h-3rem m-2 font-bold" 
                    src="/img/aire.png"
                    alt="Fondo de Login"
                    layout="responsive" // Configura el diseño como "responsive"
                    width={1000} // Establece un ancho fijo (en píxeles) para la imagen
                    height={600} // Establece un alto fijo (en píxeles) para la imagen
                >
            </Image> 
        </div> 
          <div>
            <h5 className="text-uppercase mb-3">Pet Grooming</h5>
            <p>
              Kasd dolor no lorem sit tempor at justo rebum rebum stet justo
              elitr dolor amet sit
            </p>
            <a className="text-primary text-uppercase" href="">
              Read More
              <i className="bi bi-chevron-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="service-item bg-light d-flex p-4">
        <div className="d-flex flex-row" style={{width: "40%"}} >
            <Image className="w-3rem h-3rem m-2 font-bold" 
                    src="/img/luz.png"
                    alt="Fondo de Login"
                    layout="responsive" // Configura el diseño como "responsive"
                    width={1000} // Establece un ancho fijo (en píxeles) para la imagen
                    height={600} // Establece un alto fijo (en píxeles) para la imagen
                >
            </Image> 
        </div>          
          <div>
            <h5 className="text-uppercase mb-3">Pet Training</h5>
            <p>
              Kasd dolor no lorem sit tempor at justo rebum rebum stet justo
              elitr dolor amet sit
            </p>
            <a className="text-primary text-uppercase" href="">
              Read More
              <i className="bi bi-chevron-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}
export default Service;