import cardstyles from './Card.module.css';

const Card = (props) => (
    <div className={cardstyles.card}>
      <div className={cardstyles.front}>
        <img src="/JIVE.jpg" alt="JIVE" className={cardstyles.cardImage} />
        <div className={cardstyles.container}>
          <h3>JIVE Pram <span className={cardstyles.price}>$999</span></h3> 
          <p>Exclusive black detailing, colours and dark gunmetal chassis.
            Single to double pram with over 20 configurations</p>
        </div>
      </div>
    </div>
);

export default Card;