import './Favoritos.css'
import Banner from '../../components/Banner'
import Titulo from '../../components/Titulo'
import Card from '../../components/Card'
import { useFavoritoContext } from '../../contexto/Favoritos'

function Favoritos(){
    const { favorito } = useFavoritoContext();

    return(
        <>
            <Banner imagem="favoritos"></Banner>
            <Titulo><h1>Meus Favoritos</h1></Titulo>
            <section className='vontainer'>
                {favorito.map((fav)=>{
                    return <Card {...fav} key={fav.id}/>
                })}       
            </section>
        </>
    )
}

export default Favoritos