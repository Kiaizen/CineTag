import { useFavoritoContext } from '../../contexto/Favoritos'
import './Card.css'
import iconeFavoritar from './favoritar.png'
import iconeDesfavoritar from './desfavoritar.png'
import { Link } from 'react-router-dom';

function Card({id, titulo, capa}){
    const {favorito, adicionarFavorito} = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;
    return(
        <div className="container">
            <Link className='link' to={`/${id}`}>
            <img className="capa" src={capa} alt={titulo} />
            <h2>{titulo}</h2>
            </Link>
            <img className="favoritar" src={icone} alt="Favoritar Filme" onClick={()=>{
                adicionarFavorito({ id, titulo, capa})
            }} />
        </div>
    )
}

export default Card