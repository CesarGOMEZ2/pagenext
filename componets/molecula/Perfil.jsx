
import "../../node_modules/primereact/resources/primereact.css";
import "../../node_modules/primeflex/primeflex.css";
import "../../node_modules/primeicons/primeicons.css"
import Image from "next/image";
//background: linear-gradient(220.55deg, #FF3F3F 0%, #063CFF 100%);
function Perfil() {

    return(
        <div class="flex flex-wrap align-items-center justify-content-center">
            <div class="bg-center bg-primary" style={{background:"linear-gradient(220.55deg, #FF3F3F 0%, #063CFF 100%)"}}>
            <div className="bg-left bg-no-repeat w-18rem h-12rem  border-round m-3" style={{ width: "60%"}}>
                <Image className="border-circle w-6rem h-6rem m-2 bg-primary font-bold" 
                    src="/img/FondoLogin.jpg"
                    alt="Fondo de Login"
                    layout="responsive" // Configura el diseño como "responsive"
                    width={1000} // Establece un ancho fijo (en píxeles) para la imagen
                    height={600} // Establece un alto fijo (en píxeles) para la imagen
                >
                </Image>
                <p className="text-white-alpha-30">Pablo@gmail.com</p>
                <div class="flex justify-content-center flex-wrap">
                    <h2 className="text-white-alpha-50"> 10</h2>
                    <i className="pl-2 pi pi-star-fill" style={{ color: '#FFF700 ' }}></i>
                </div>                 
            </div>
            </div>
        </div>
    )
}
export default Perfil;