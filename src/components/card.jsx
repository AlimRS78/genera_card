import './card.css'

function Card(props) {
    const title = props.title
    const URL = props.url
    const description = props.description
    const isVisited = props.isVisited
  return (
    <div className='card-box'>
      <img src={URL} alt="" />
      <div className="info">
        <h2>{title}</h2>
        <p>
          {description}
        </p>
        {isVisited ? "Visitato✅": "Non visitato❌"}
      </div>
    </div>
  );
}

export default Card;
