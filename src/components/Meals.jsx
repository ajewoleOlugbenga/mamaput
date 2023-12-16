import { useEffect, useState } from "react";

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
        <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
};

export default Meals;
