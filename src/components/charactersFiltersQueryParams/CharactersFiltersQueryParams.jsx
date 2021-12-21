import React from "react";
import { useSearchParams } from "react-router-dom";

const CharactersFiltersQueryParams = () => {
  const [filterState, setFiltersState] = useSearchParams();

  const gender = filterState.get("gender") || "";
  const name = filterState.get("name") || "";
  const species = filterState.get("species") || "";
  const status = filterState.get("status") || "";

  const handleInputChange = (e) => {
    const params = {};
    if (gender) {
      params["gender"] = gender;
    }

    if (species) {
      params["species"] = species;
    }

    if (status) {
      params["status"] = status;
    }

    if (name) {
      params["name"] = name;
    }

    setFiltersState(
      { ...params, [e.target.name]: e.target.value },
      { replace: true }
    );
  };

  return (
    <div className="container">
      <div className="row text-center mb-3">
        <div className="col">
          <label htmlFor="name" className="lead">
            Filter by name
          </label>
          <input
            type="text"
            name="name"
            className="form-control shadow-none"
            placeholder="Rick Sanchez"
            onChange={handleInputChange}
            value={name}
          ></input>
        </div>
        <div className="col">
          <label htmlFor="gender" className="lead">
            Filter by gender
          </label>
          <select
            className="form-select shadow-none"
            name="gender"
            value={gender}
            onChange={handleInputChange}
          >
            <option value="none">None</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="species" className="lead">
            Filter by species
          </label>
          <select
            className="form-select shadow-none"
            name="species"
            value={species}
            onChange={handleInputChange}
          >
            <option value="none">None</option>
            <option value="human">Human</option>
            <option value="alien">Alien</option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="status" className="lead">
            Filter by status
          </label>
          <select
            className="form-select shadow-none"
            name="status"
            value={status}
            onChange={handleInputChange}
          >
            <option value="none">None</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CharactersFiltersQueryParams;
