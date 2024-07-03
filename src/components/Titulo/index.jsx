import './Titulo.css';

function Titulo({children}){
    return(
        <div className="texto">
            {children}
        </div>
    )
}

export default Titulo