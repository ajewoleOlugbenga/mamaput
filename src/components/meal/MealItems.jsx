import { useContext } from "react";
import { Formatter } from "../../utils/Formatting";
import Button from "../UI/Button";
import CartContext from "../store/CartContext";

const MealItems = ({ meal }) => {
  const ctx = useContext(CartContext);

  const handleAddMeal = () => {
    ctx.addItem(meal)
  }
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{Formatter.format(meal.price)}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-action">
          <Button textOnly={false} onClick={handleAddMeal}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItems;
