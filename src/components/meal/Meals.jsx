import { useEffect, useState } from "react";
import MealItems from "./MealItems";

const Meals = () => {
  const [loadedmeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    //get meal data from API
    const fetchMeal = async () => {
      try {
        const response = await fetch("http://localhost:3000/meals");

        if (!response.ok) {
          //...
        }
        const meals = await response.json();
        setLoadedMeals(meals);
      } catch (error) {}
    };
    fetchMeal();
  }, []);

  return (
    <ul id="meals">
      {loadedmeals.map((meal) => (
   <MealItems key={meal.id} meal={meal}/>
      ))}
    </ul>
  );
};

export default Meals;
