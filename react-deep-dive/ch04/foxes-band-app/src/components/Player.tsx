import React, { useState } from "react";
import { Await, Link, useAsyncValue, useLoaderData, useNavigate } from "react-router-dom";
import YouTube from "react-youtube";
import { SongType } from "../loaders";
import { ReactCsspin } from "react-csspin";

const Player = () => {
  const navigate = useNavigate();
  const song = useAsyncValue() as SongType;
  if (!song) navigate("/songs");

  const [title] = useState<string>(song?.title ? song.title : "");
  const [youtubeLink] = useState<string>(song?.youtube_link ? song.youtube_link : "");
  return (
    <div className="modal">
      <div className="box">
        <div className="heading">
          <Link className="menu" to="/songs">
            <span className="float-start badge bg-secondary pointer">X</span>
          </Link>
          <span className="title">&nbsp;&nbsp;&nbsp;{title}</span>
        </div>
        <div className="player">
          <div>
            <YouTube videoId={youtubeLink} opts={{ width: "320", height: "240", playerVars: { autoplay: 1 } }} />
          </div>
        </div>
      </div>
    </div>
  );
};

type DeferredOneSongDataType = { song: Promise<SongType> };

const PlayerSuspense = () => {
  const data = useLoaderData() as DeferredOneSongDataType;

  return (
    <React.Suspense fallback={<ReactCsspin />}>
      <Await resolve={data.song}>
        <Player />
      </Await>
    </React.Suspense>
  );
};

export { PlayerSuspense };

export default Player;
