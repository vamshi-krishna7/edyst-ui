const SingleCard = (props) => {
    const {cardColors, description, name, sprite} = props.card;
    return(
        <div className="card" style={{backgroundColor: `${cardColors.bg}`, color:`${cardColors.text}`}}>
            <div className="card-header">
                <span className="card-header-badge" style={{backgroundColor: `${cardColors.tagbg}`}}>{name}</span>
                <span className="card-icon">&#10230;</span>
            </div>
            <div className="card-contents">
                <h3 className="card-heading-secondary">{name}</h3>
                <p className="content">{description}</p>
            </div>
            <div className="card-image" style={{backgroundColor: `${cardColors.imgbg}`}}>
                <img src={sprite} alt={name}/>
            </div>
        </div>
    )
}

export default SingleCard;