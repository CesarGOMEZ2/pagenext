
import "../../bootstrap/css/bootstrap.css";
import "../../bootstrap/css/bootstrap.min.css";
import "../../node_modules/primeicons/primeicons.css"
import "../../css/style.css"
function Logros() {
    return(
        <div class="container-fluid py-5" id="skill">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6">
                <a href="#" class="btn mian-btn price-btn w-20rem p-3 m-2">
                <i className="pl-2 pi pi-star-fill pr-2" style={{ color: '#FFF700 ', fontSize:'1.5rem' }}></i>
                Novato de verbos
                </a>
                
                </div>
                <div class="col-md-6">
                <a href="#" class="btn mian-btn price-btn w-20rem p-3 m-2">
                <i className="pl-2 pi pi-star-fill pr-2" style={{ color: '#FFF700 ' , fontSize:'1.5rem'}}></i>
                Aprendiz de libros
                </a>
                </div>
                <div class="col-md-6">
                <a href="#" class="btn mian-btn price-btn w-20rem p-3 m-2">
                <i className="pl-2 pi pi-star-fill pr-2" style={{ color: '#FFF700 ', fontSize:'1.5rem' }}></i>
                Escritor en progreso
                </a>
                </div>
            </div>
           
        </div>

    </div>
    )
}
export default Logros;