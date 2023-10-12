import bubble from './speech-bubble.svg';

function Hero(props) {
    return (
        <div className="hero">
            <div className="bubble-container">
                <img src={bubble} className="bubble" alt="Bubble"/>
                <span className="bubble-text">Click</span>
            </div>    
            <h2 className="hero__name">{props.name}</h2>
            <p className="hero__text"><span>Вселенная:</span> {props.universe}</p>
            <p className="hero__text"><span>Альтер эго:</span> {props.alterego}</p>
            <p className="hero__text"><span>Род деятельности:</span> {props.occupation}</p>
            <p className="hero__text"><span>Друзья:</span> {props.friends}</p>
            <p className="hero__text"><span>Суперсилы:</span> {props.superpowers}</p>
            <img src={props.url} />
        </div>
    );
}

export default Hero;