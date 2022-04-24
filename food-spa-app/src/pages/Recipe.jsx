import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../api";
import Spinner from "..//components/Spinner/Spinner";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);

  return (
    <div className="container">
      {!recipe.idMeal ? (
        <Spinner />
      ) : (
        <div className="card mb-3">
          <img
            src={recipe.strMealThumb}
            className="card-img-top"
            alt={recipe.strMeal}
            style={{
                width: '20rem',
                margin: '0 auto'
            }}
          />
          <div className="card-body text-center">
            <h2 className="card-title">{recipe.strMeal}</h2>
            <h6 className="card-title">Category: {recipe.strCategory}</h6>
            {recipe.strArea ? (
              <h6 className="card-title"> From is: {recipe.strArea}</h6>
            ) : null}
            <p className="card-text">{recipe.strInstructions}</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th>Measure</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(recipe).map((key) => {
                        if(key.includes('Ingredient') && recipe[key]) {
                            return (
                                <tr key={key}>
                                    <td>{recipe[key]}</td>
                                    <td>
                                        {
                                            recipe[
                                                `strMeasure${key.slice(13)}`
                                            ]
                                        }
                                    </td>
                                </tr>
                            )
                        }
                        return null;
                    })}
                </tbody>
            </table>
            <button className="btn btn-success" onClick={goBack}>
              Go Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recipe;
