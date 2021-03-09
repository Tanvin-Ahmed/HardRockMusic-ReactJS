import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router";
import { loadingSpinner } from "../../App";
import SongList from "../SongList/SongList";
import "./SearchSong.css";

const SearchSong = () => {
  const [spinner, setSpinner] = useContext(loadingSpinner);
  const { name } = useParams();
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    setSpinner(true);
    axios(`https://api.lyrics.ovh/suggest/${name}`)
      .then((data) => {
        setSongs(data.data.data);
        console.log(data.data.data);
        setSpinner(false);
      })
      .catch((err) => console.log(err));
  }, [name]);
  return (
    <>
    {
        spinner ? <div className="spinner"><Spinner animation="border" variant="primary" /></div> : <div className="d-flex flex-column justify-content-center">
        {songs.map((song) => (
          <SongList key={song.id} song={song}></SongList>
        ))}
      </div>
    }
    </>
  );
};

export default SearchSong;
