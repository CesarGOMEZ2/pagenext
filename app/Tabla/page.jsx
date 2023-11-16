import WrapperHeder from "@/componets/molecula/WrapperHeder";
import GrafTabla from "@/componets/atomos/GrafTabla";
function Tabla() {
    return(
        <>
        <WrapperHeder></WrapperHeder>
        <div className="container-fluid py-5">
  <div className="container">
    <div className="row gx-5">
      
      <div className="col-lg-12">
        <GrafTabla></GrafTabla>
        
        
        <div className="bg-light p-4">
         
          <div className="tab-content" id="pills-tabContent">

            <div
              className="tab-pane fade"
              id="pills-2"
              role="tabpanel"
              aria-labelledby="pills-2-tab"
            >
              <p className="mb-0">
                Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam
                dolor diam ipsum et, tempor voluptua sit consetetur sit.
                Aliquyam diam amet diam et eos sadipscing labore. Clita erat
                ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                clita duo justo et tempor consetetur takimata eirmod, dolores
                takimata consetetur invidunt magna dolores aliquyam dolores
                dolore. Amet erat amet et magna
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
       
        </>
    )    
}
export default Tabla