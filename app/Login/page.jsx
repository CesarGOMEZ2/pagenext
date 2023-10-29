import React from "react";
import "../../css/login.css"
import "../../bootstrap/css/bootstrap.css";
import "../../bootstrap/css/bootstrap.min.css";
import "../../node_modules/primereact/resources/themes/lara-dark-indigo/theme.css";
import "../../node_modules/primereact/resources/primereact.css";
import "../../node_modules/primeflex/primeflex.css";
import Heder from "@/componets/molecula/Heder";
import Grafica from "@/componets/molecula/Grafica";
import Logros from "@/componets/molecula/Logros";  
function FormPago() {
    return(

        <body>
            <Heder></Heder>    
            <div className="pricing mt-100">
            <div class="container">
                <div class="section-header flex justify-content-center flex-wrap">
                    <h2 className="m-4">Status</h2>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="price-content align-items-center justify-content-center">
                            <div class="price-plan">
                                <i class="ion-md-home"></i>
                                <p class="price-title">Clasificacion</p>
                            </div>
                            <a href="#" class="btn mian-btn price-btn w-20rem p-3 m-2">1-jugador</a>
                            <a href="#" class="btn mian-btn price-btn w-20rem p-3 m-2">1-jugador</a>
                            <a href="#" class="btn mian-btn price-btn w-20rem p-3 m-2">1-jugador</a>
                            <a href="#" class="btn mian-btn price-btn w-20rem p-3 m-2">1-jugador</a>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="price-content features-price">
                            <div class="price-plan">
                                <i class="ion-md-star"></i>
                                <p class="price-title">Estadistica</p>
                                
                            </div>
                            
                            <Grafica></Grafica> 
                            
                        </div>
                    </div>    
                </div>
                <div class="flex justify-content-center flex-wrap">
                    <div class="col-md-10">
                        <div class="price-content features-price">
                            <div class="price-plan">
                                <i class="ion-md-star"></i>
                                <p class="price-title">Logros</p>
                                
                            </div>
                            <Logros></Logros>
                        </div>
                    </div>     
                </div>

            </div>
           
        </div>                
       </body>
        
    );
}
export default FormPago;