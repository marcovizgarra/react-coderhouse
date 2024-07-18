import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';

const Catalogue = () => {
    const [games, setGames] = useState([]);
    const [filterGames, setFilterGames] = useState([])
    const {platform} = useParams();

    useEffect(() => {
        fetch("src/assets/games.json")
            .then(response => response.json())
            .then(data => {
                setGames(data)
                setFilterGames(data)
            })
    },[])

    useEffect(() => {
        setFilterGames(platform ? (games.filter(game => game.platform == platform)) : games)
    }, [platform])

    return(
        <>
            <section className="catalogue bg-black">
                <h1>Descubre la saga God of War</h1>
                <div className="gamesContainer">
                    {filterGames.map (game => (
                        <div key={game.id} className="card bg-dark"> 
                        <img src={game.image} className="card-img-top" alt={game.title} />
                        <div className="card-body">
                            <h5 className="card-title">{game.title}</h5>
                            <p className="card-text">USD {game.price}</p>
                            <a href="#" className="btn btn-primary">Comprar</a>
                        </div>
                </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Catalogue