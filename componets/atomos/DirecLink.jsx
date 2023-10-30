import "../../bootstrap/css/bootstrap.css";
import "../../bootstrap/css/bootstrap.min.css";
import "../../css/wrapperHeder.css";
import Link from "next/link";
function DirecLink({src,clase,msg}) {
    return(
        <Link href={src} className={clase}> 
        {msg}
        </Link>
    )   
}
export default DirecLink;