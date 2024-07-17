import { useEffect, useState } from "react"

const Catalogue = () => {
    const [videoGames, setVideoGames] = useState([]);

    useEffect(() => {
        fetch("src/assets/img/games.json")
            .then(response => response.json())
            .then(data => {
                setVideoGames(data)
            })
    }, []);

    return(
        <>
            <section className="catalogue bg-black">
                <h1>Descubre la saga God of War</h1>
                <div className="gamesContainer">
                    {videoGames.map (game => (
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