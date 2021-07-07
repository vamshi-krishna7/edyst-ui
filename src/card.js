import { useEffect, useState } from "react";

const Card = () => {

    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        fetch('https://dev-util.edyst.com/challenge/pokemons/random').then((res) => res.json()).then((data) => setCardData(data))
    }, [])
    
    return (
        <div>
            Card
        </div>
    )
}

export default Card;