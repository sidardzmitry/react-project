import React from "react";
import Meal from '..//Meal/Meal';


const MealList = (props) => {
  const { meals } = props;
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {meals.map((meal) => (
        <Meal key={meal.idMeal} {...meal} />
      ))}
    </div>
  );
};

export default MealList;
