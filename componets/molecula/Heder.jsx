import Link from "next/link";
import "../../bootstrap/css/bootstrap.css";
import "../../bootstrap/css/bootstrap.min.css";
import "../../node_modules/primeicons/primeicons.css"
import "../../css/heder.css"
import Directorio from "../atomos/Directorio";
import Image from "next/image";
function Heder() {
  
    return(
        <div id="nav">
        <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-dark">
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto">
                        <Directorio
                        msg="Aprendizaje"
                        direc="/Inicio"
                        />
                        <Directorio
                        msg="Sala"
                        direc="/Ofertas"
                        />  
                        <Directorio    
                        msg="Estatus"
                        direc="/Rutas"
                        />          
                        <div class="flex justify-content-end flex-wrap">
                            <div class="flex align-items-center justify-content-center w-6rem h-3rem font-bold border-round m-1">
                                <Link href="/logros" className="flex justify-content-center flex-wrap">
                                    <p className="text-yellow-50">5</p>
                                    <i className="pl-2 pi pi-star-fill" style={{ color: '#FFF700 ', fontSize:'1.2rem' }}></i>
                                </Link>
  
                            </div>
                        </div>
                        <div class="flex justify-content-end flex-wrap">
                                <Link href="/logros" className="flex align-items-center justify-content-center w-6rem h-3rem font-bold border-round m-1">
                                    <Image className="border-circle w-4rem h-4rem m-2 bg-primary font-bold" 
                                        src="/img/FondoLogin.jpg"
                                        alt="Fondo de Login"
                                        layout="responsive" // Configura el diseño como "responsive"
                                        width={1000} // Establece un ancho fijo (en píxeles) para la imagen
                                        height={600} // Establece un alto fijo (en píxeles) para la imagen
                                    >
                                    </Image>               
                                   
                                </Link>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
        </div>
    )
}
export default Heder;