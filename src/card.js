import { useEffect, useState } from "react";
import SingleCard from './singleCard';
const Card = () => {

    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        fetch('https://dev-util.edyst.com/challenge/pokemons/random').then((res) => res.json()).then((data) => setCardData(data))
    }, [])
    
    return (
        <section className="card">
            {
                cardData.map((card) => (
                    <SingleCard key={card.name} card={card}/>
                ))
            }
        </section>
    )
}

export default Card;