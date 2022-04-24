import React from "react";
import { Link } from "react-router-dom";

const Meal = (props) => {
  const { strMeal, strMealThumb, idMeal } = props;
  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={strMealThumb}
          className="card-img-top"
          alt={strMeal}
        />
        <div className="card-body">
          <h3 className="card-title text-dark">{strMeal}</h3>
        </div>
        <Link
          to={`/meal/${idMeal}`}
          type="button"
          className="btn btn-outline-danger"
        >
          Watch recipe
        </Link>
      </div>
    </div>
  );
};

export default Meal;
