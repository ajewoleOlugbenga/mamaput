import { Formatter } from "../utils/Formatting"

const MealItems = ({meal}) => {
  return (
    <li className='meal-item'>
     <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
            <h3>{meal.name}</h3>
            <p className='meal-item-price'>{Formatter.format(meal.price)}</p>
            <p className='meal-item-description'>{meal.description}</p>
        </div>
        <p className='meal-item-action'>
            <button>Add to Cart</button>
        </p>
        </article> 
    </li>
  )
}

export default MealItems
