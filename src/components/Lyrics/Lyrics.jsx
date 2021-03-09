import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router";
import { loadingSpinner } from "../../App";

const Lyrics = () => {
  const [spinner, setSpinner] = useContext(loadingSpinner);
  const { title, artist } = useParams();
  const [lyrics, setLyrics] = useState({});
  useEffect(() => {
    setSpinner(true);
    axios(`https://api.lyrics.ovh/v1/${artist}/${title}`)
      .then((data) => {
        console.log(data.data);
        setLyrics(data.data);
        setSpinner(false);
      })
      .catch((err) => console.log(err));
  }, []);
  
  if (!lyrics) {
      return <h1 className="text-center mt-5">Lyrics is not available</h1>
  }
  return (
    <div className="bg-dark p-5">
      <h2 className="text-info">{title}</h2>
      <h4 className="text-warning">Artist: {artist}</h4>
      {
        spinner ? <div><Spinner animation="border" variant="light" /></div> : <pre className="text-light">{lyrics.lyrics}</pre>
      }
    </div>
  );
};

export default Lyrics;
