import "../../bootstrap/css/bootstrap.css";
import "../../bootstrap/css/bootstrap.min.css";
import Link from "next/link";
import "../../css/wrapperHeder.css";
import Image from "next/image";
import DirecLink from "../atomos/DirecLink";
function WrapperHeder() {
    return(
        <body>
        <nav className="navbar navbar-expand-lg bg-success navbar-light shadow-sm py- py-lg-0 px-5 px-lg-0"> 
        <div className="navbar-brand ms-lg-5">
        <div className="d-flex flex-row" style={{width: "8%"}} >
            <Image className="w-3rem h-3rem m-2 font-bold" 
                    src="/img/pato.png"
                    alt="Fondo de Login"
                    layout="responsive" // Configura el diseño como "responsive"
                    width={1000} // Establece un ancho fijo (en píxeles) para la imagen
                    height={600} // Establece un alto fijo (en píxeles) para la imagen
                >
            </Image> 

            <h1 className="m-2 text-uppercase ">           
            <DirecLink
            src="Inicio"  
            clase="text-dark"     
            msg="Duck Check"
            />
            </h1>
            </div>        
        </div>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
        >
        <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div className="navbar-nav ml-auto">
            <DirecLink
            src="Inicio"
            clase="nav-item nav-link active"
            msg="Home"
            ></DirecLink>
            <DirecLink
            src="Login"
            clase="nav-item nav-link"
            msg="Tablas"
            ></DirecLink>
            <DirecLink
            src="Grafica"
            clase="nav-item nav-link"
            msg="Grafica"
            ></DirecLink>  
            <DirecLink
            src="View"
            clase="nav-item nav-link nav-contact bg-primary text-white px-5 ms-lg-5"
            msg="Contac"
            ></DirecLink>
            </div>
        </div>
        
        </nav>
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
            <div className="container py-5">
                <div className="row justify-content-start">
                <div className="col-lg-8 text-center text-lg-start">
                    <h1 className="display-1 text-uppercase text-dark mb-lg-4">Duck check</h1>
                    <h1 className="text-uppercase text-white mb-lg-4">
                    Make Your Pets Happy
                    </h1>
                    <p className="fs-4 text-white mb-lg-4">
                    Dolore tempor clita lorem rebum kasd eirmod dolore diam eos kasd. Kasd
                    clita ea justo est sed kasd erat clita sea
                    </p>
                    <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                    <a
                        href=""
                        className="btn btn-outline-light border-2 py-md-3 px-md-5 me-5"
                    >
                        Read More
                    </a>
                
                    </div>
                </div>
                </div>
            </div>
        </div>
        </body>


    )
}

export default WrapperHeder