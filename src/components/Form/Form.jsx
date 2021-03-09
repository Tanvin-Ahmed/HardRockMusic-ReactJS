import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "./logo.png";
import { Link } from "react-router-dom";
const Form = () => {
  const [songName, setSongName] = useState(null);
  const [catchData, setCatchData] = useState(false);
  const handleAddSongName = (event) => {
    setSongName(event.target.value);
    setCatchData(false);
  };
  return (
    <div className="p-5 text-center bg-dark" style={{height:"100vh"}}>
      <img className="m-4" src={logo} alt=""/>
      <div className="form container">
        <input
          type="text"
          className="form-control my-3 bg-dark text-light"
          placeholder="Search song....!!"
          onChange={handleAddSongName}
        />
        <Link to={`/song/${songName}`}>
        <button
          type="submit"
          className="btn btn-info"
          onClick={() => setCatchData(true)}
        >
          <FontAwesomeIcon icon={faSearch} /> Search
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Form;
