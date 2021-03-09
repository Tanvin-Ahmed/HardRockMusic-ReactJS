import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import "./SongList.css";

const SongList = (props) => {
  const { title, type, preview, artist } = props.song;
  const history = useHistory();
  const dataAddToLyrics = (title, artist) => {
    const url = `/lyrics/${title}/${artist}`;
    history.push(url);
  }
  return (
    <div className="song-body p-2 bg-primary m-3 rounded text-light">
      <div>
        <h2>{title}</h2>
        <h4>Artist: {artist.name}</h4>
        <h6>Type: {type}</h6>
        <audio style={{outline: "none"}} src={preview} controls></audio>
      </div>
      <div>
          <button type="submit" className="btn btn-light" onClick={() => dataAddToLyrics(title, artist.name)}><FontAwesomeIcon icon={faMusic} /> Lyrics</button>
      </div>
    </div>
  );
};

export default SongList;
