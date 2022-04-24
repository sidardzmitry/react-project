import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getFilteredCategory } from "../api";
import Spinner from "../components/Spinner/Spinner";
import MealList from "..//components/MealList/MealList";

const Category = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <div className="container">
      <button type="button" className="btn btn-outline-danger" onClick={goBack}>
        Go Back
      </button>
      {!meals.length ? <Spinner /> : <MealList meals={meals} />}
    </div>
  );
};

export default Category;
