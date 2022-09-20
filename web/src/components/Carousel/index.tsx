import GameCard, { Game } from "../GameCard";
import { useState, useEffect } from 'react';
import axios from "axios";



function Carousel(){
    const [games, setGames] = useState<Array<Game>>([]);

    useEffect(() => {
        axios('http://localhost:3333/games')
        .then((response) => setGames(response.data))
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