// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails, key} = props
  const {id, title, description, imgUrl, className} = cardDetails
  console.log(key)
  console.log(id)
  return (
    <li className={className}>
      <h1 className="cardHeading">{title}</h1>
      <p className="cardDescription">{description}</p>
      <img src={imgUrl} alt={title} className="cardImage" />
    </li>
  )
}

export default CardItem
