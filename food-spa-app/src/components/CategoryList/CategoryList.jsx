import React from "react";
import CategoryItem from "../CategoryItem/CategoryItem";

const CategoryList = (props) => {

  const { catalog = [] } = props;

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {catalog.map((el) => (
        <CategoryItem key={el.idCategory} {...el} />
      ))}
    </div>
  );
};

export default CategoryList;
