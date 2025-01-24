import { useState } from "react";
import { Link, useParams, useNavigate, useAsyncValue } from "react-router-dom";
import { SongType } from "../loaders";

type SongParam = { id: string };

const SongDetail = () => {
  const { id } = useParams<SongParam>();
  const songs = useAsyncValue() as SongType[];
  const song = songs.find((song) => song.id === parseInt(id ? id : "", 10));
  const YOUTUBE_LINK = "https://m.youtube.com/watch?v=";

  const navigate = useNavigate();
  if (!song) navigate("/songs");

  const [title] = useState<string>(song?.title ? song.title : "");
  const [musician] = useState<string>(song?.musician ? song?.musician : "");
  const [link] = useState<string>(song?.youtube_link ? YOUTUBE_LINK + song.youtube_link : "");

  return (
    <div className="mt-5">
      <h2>{title}</h2>
      <p>Original Musician : {musician}</p>
      <p>
        <a href={link} target="new">
          View Youtube
        </a>
      </p>
      <Link to="/songs">Return SongList</Link>
    </div>
  );
};

export default SongDetail;
