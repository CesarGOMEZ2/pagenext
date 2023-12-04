import Image from "next/image";

function About() {
    return(
        <div className="container-fluid py-5">
  <div className="container">
    <div className="row gx-5">
    <div className="d-flex flex-row" style={{width: "40%"}} >
            <Image className="w-3rem h-3rem m-2 font-bold" 
                    src="/img/Hero.jpg"
                    alt="Fondo de Login"
                    layout="responsive" // Configura el diseño como "responsive"
                    width={1000} // Establece un ancho fijo (en píxeles) para la imagen
                    height={600} // Establece un alto fijo (en píxeles) para la imagen
                >
            </Image> 
        </div>
      <div className="col-lg-7">
        <div className="border-start border-5 border-primary ps-5 mb-5">
          <h6 className="text-primary text-uppercase">Acerca de Nosotros</h6>
          <h1 className="display-5 text-uppercase mb-0">
          Mantenemos a sus amiguitos felices todo el tiempo, adaptándolos a su hábitat 
          </h1>
        </div>
        <h4 className="text-body mb-4">
        Tecnología que contribuyen al 
        bienestar animal en hábitats controlados, ¡Bienvenido!.
        </h4>
        <div className="bg-light p-4">
          <ul
            className="nav nav-pills justify-content-between mb-3"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item w-50" role="presentation">
              <button
                className="nav-link text-uppercase w-100 active"
                id="pills-1-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-1"
                type="button"
                role="tab"
                aria-controls="pills-1"
                aria-selected="true"
              >
                Misión 
              </button>
            </li>
            <li className="nav-item w-50" role="presentation">
              <button
                className="nav-link text-uppercase w-100"
                id="pills-2-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-2"
                type="button"
                role="tab"
                aria-controls="pills-2"
                aria-selected="false"
              >
                Visión 
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-1"
              role="tabpanel"
              aria-labelledby="pills-1-tab"
            >
              <p className="mb-0">
              El Objetivo principal es mejorar el bienestar de pequeños especies dentro de hábitats, así como 
              contribuir de manera significativa a las estrategias, proporcionando al habitat medicion de
              temperatura, humedad y luz.
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="pills-2"
              role="tabpanel"
              aria-labelledby="pills-2-tab"
            >
              <p className="mb-0">
                Tempor fef efwef ewrfwerewre rewrewr ew
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
export default About;