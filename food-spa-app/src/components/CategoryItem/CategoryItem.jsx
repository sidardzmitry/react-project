import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = (props) => {
  const { strCategory, strCategoryThumb, strCategoryDescription } = props;

  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={strCategoryThumb}
          className="card-img-top"
          alt={strCategory}
        />
        <div className="card-body">
          <h3 className="card-title text-dark">{strCategory}</h3>
          <p className="card-text text-dark">
            {strCategoryDescription.slice(0, 100)}
          </p>
        </div>
        <Link
          to={`/category/${strCategory}`}
          type="button"
          className="btn btn-outline-danger"
        >
          Watch category
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
