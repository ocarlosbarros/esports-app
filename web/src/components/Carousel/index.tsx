import GameCard, { Game } from "../GameCard";
import { useState, useEffect } from 'react';



function Carousel(){
    const [games, setGames] = useState<Array<Game>>([]);

    useEffect(() => {
        fetch('http://localhost:3333/games')
        .then((response) => response.json())
        .then((responseGames) => setGames(responseGames))
    }, [])

    return (
        <section className="grid grid-cols-6 gap-6 mt-16">

            { games.map(({ id, bannerUrl, title, _count }) => (
                <GameCard
                 key={ id }
                 bannerUrl={ bannerUrl}
                 title={ title }
                 _count={ _count } 
                />

            ))}
        </section>
    )
}

export default Carousel;