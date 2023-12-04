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
      <h6 className="text-primary text-uppercase">Servicios</h6>
      <h1 className="display-5 text-uppercase mb-0">
      Brindamos calidad, adaptabilidad y seguridad
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
            <h5 className="text-uppercase mb-3">Medicion de Teperatura</h5>
            <p>
              El aplicativo brinda o proporciona la temperatura en tiempo real dentro del hábitat.
            </p>
            <a className="text-primary text-uppercase" href="">
              Leer Mas
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
            <h5 className="text-uppercase mb-3">Grafica</h5>
            <p>
              Proporciona Graficas de medicion, indica el estado de riesgos
            </p>
            <a className="text-primary text-uppercase" href="">
              Leer Mas
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
            <h5 className="text-uppercase mb-3">Monitoreo de calidad de aire</h5>
            <p>
              El aplicativo proporciona la calida del aire dentro del hábitat.
            </p>
            <a className="text-primary text-uppercase" href="">
              Leer Mas.
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
            <h5 className="text-uppercase mb-3">Monitoreo de la luz</h5>
            <p>
              El aplicativo brinda informacion y monitoreo de la luz
            </p>
            <a className="text-primary text-uppercase" href="">
              Leer Mas
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