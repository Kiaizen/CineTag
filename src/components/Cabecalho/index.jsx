import { Link } from "react-router-dom";
import logo from "./logo.png";
import CabecalhoLink from "../CabecalhoLink";
import './Cabecalho.css'


function Cabecalho(){
    return(
        <header className="cabecalho">
            <Link to="./">
                <img src={logo} alt="logo" />
            </Link>
            <nav>
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="./Favoritos">
                    Favoritos
                </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho