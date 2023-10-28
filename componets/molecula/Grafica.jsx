
import "../../bootstrap/css/bootstrap.css";
import "../../bootstrap/css/bootstrap.min.css";
import "../../css/style.css"
import Perfil from "./Perfil";
function Grafica() {
    return(
        <div class="container-fluid py-5" id="skill">
        <div class="container">
            
            <div class="row align-items-center">
                <div class="col-md-6">
                    <div class="skill mb-4">
                        <div class="d-flex justify-content-between">
                            <h6 class="font-weight-bold">Niveles</h6>
                            <h6 class="font-weight-bold">95%</h6>
                        </div>
                        <div class="progress">
                            <div class="progress-bar bg-success" style={{width:"60%"}} ></div>
                        </div>
                    </div>
                    <div class="skill mb-4">
                        <div class="d-flex justify-content-between">
                            <h6 class="font-weight-bold">Words</h6>
                            <h6 class="font-weight-bold">85%</h6>
                        </div>
                        <div class="progress">
                            <div class="progress-bar bg-warning" style={{width:"40%"}}></div>
                        </div>
                    </div>
                    <div class="skill mb-4">
                        <div class="d-flex justify-content-between">
                            <h6 class="font-weight-bold">Logros</h6>
                            <h6 class="font-weight-bold">90%</h6>
                        </div>
                        <div class="progress">
                            <div class="progress-bar bg-danger" style={{width:"30%"}}></div>
                        </div>
                    </div>
                    
                </div>
                <div class="col-md-6">
                    <Perfil></Perfil>
                </div>
            </div>
           
        </div>

    </div>
    )
}
export default Grafica;