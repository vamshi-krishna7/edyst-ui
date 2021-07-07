const SingleCard = (props) => {
    const {cardColors, description, name, sprite, tag} = props.card;
    return(
        <div class="card">
            <div class="card-header">
                <span class="card-header-badge">{name}</span>
                <span class="card-icon">&#10230;</span>
            </div>
            <div class="card-contents">
                <h4 class="card-heading-secondary">{name}</h4>
                <p class="content">{description}</p>
            </div>
            <div class="card-image">
                <img src={sprite} alt={name}/>
            </div>
        </div>
    )
}

export default SingleCard;