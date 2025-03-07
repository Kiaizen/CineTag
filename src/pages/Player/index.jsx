import './Player.css'
import Banner from '../../components/Banner';
import Titulo from '../../components/Titulo';
import { useParams } from 'react-router-dom';
import NaoEncontrada from '../NaoEncontrada';
import { useEffect, useState } from 'react';

function Player () {
    const [video,setVideo] = useState([])
    const parametros = useParams();
    
    useEffect(()=>{
        fetch(`https://my-json-server.typicode.com/Kiaizen/CineTag-api/videos?id=${parametros.id}`).then(resposta => resposta.json())
        .then(dados => {
            setVideo(...dados)
        })
    }, [])

    if(!video) {
        return <NaoEncontrada/>
    }

    return(
        <>
        <Banner />
        <Titulo>
            <h1>Player</h1>
        </Titulo>
        <section className='fontainer'>
        <iframe width="100%" height="100%" src={video.link} title={video.titulo} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>
        </>
    )
}

export default Player;