
import WrapperHeder from "@/componets/molecula/WrapperHeder";
import GrafBarra from "@/componets/atomos/GrafBarra";
import GrafPastel from "@/componets/atomos/GrafPastel";
function Grafica() {
    return(
        <>
        <WrapperHeder></WrapperHeder>
        <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
            <div className="col-sm-12 col-xl-6">
            <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Single Line Chart</h6>
                <GrafBarra></GrafBarra>    
            </div>
            </div>
            <div className="col-sm-12 col-xl-6 ">
            <div className="bg-light  h-100 p-4">
                <h6 className="mb-4">Multiple Line Chart</h6>
                <GrafPastel></GrafPastel>
            </div>
            </div>
            <div className="col-sm-12 col-xl-6">
            <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Single Bar Chart</h6>
                <canvas id="bar-chart" />
            </div>
            </div>
            <div className="col-sm-12 col-xl-6">
            <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Multiple Bar Chart</h6>
                <canvas id="worldwide-sales" />
            </div>
            </div>
            <div className="col-sm-12 col-xl-6">
            <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Pie Chart</h6>
                <canvas id="pie-chart" />
            </div>
            </div>
            <div className="col-sm-12 col-xl-6">
            <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Doughnut Chart</h6>
                <canvas id="doughnut-chart" />
            </div>
            </div>
        </div>
        </div>

        </>

    )
}
export default Grafica;