import Cabecalho from '../../components/Cabecalho';
import FavoritosProvider from '../../contexto/Favoritos';
import Container from '../../components/Container';
import Rodape from '../../components/Rodape';
import { Outlet } from 'react-router-dom';


function PaginaBase() {
    return(
        <main>
            <Cabecalho />
            <FavoritosProvider>
            <Container>
                <Outlet/>
            </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}

export default PaginaBase;