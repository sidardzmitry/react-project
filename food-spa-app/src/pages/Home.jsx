import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllCategories } from "../api";
import Spinner from "../components/Spinner/Spinner";
import CategoryList from "..//components/CategoryList/CategoryList";
import Search from "..//components/Search/Search";

const Home = () => {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      ),
      navigate({
        pathname,
        search: `?search=${str}`,
      })
    );
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(search ?
        data.categories.filter((item) =>
          item.strCategory
            .toLowerCase()
            .includes(search.split("=")[1].toLowerCase())
        ) : data.categories
      );
    });
  }, [search]);

  return (
    <div className="catalog">
      <Search callBack={handleSearch} />
      {!catalog.length ? (
        <Spinner />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </div>
  );
};

export default Home;
