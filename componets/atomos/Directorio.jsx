import Link from "next/link";
import "../../node_modules/primeflex/primeflex.css";

function Directorio({msg,direc}) {
    return(
    <div class="flex justify-content-end flex-wrap">
        <div class="flex align-items-center justify-content-center w-6rem h-3rem font-bold border-round m-1">
            <Link href={direc}>
            <p className="text-yellow-50">{msg}</p>
            
            </Link>
        </div>
    </div>
        
    );
} 
export default Directorio;