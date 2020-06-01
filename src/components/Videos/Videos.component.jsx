import React from "react";
import { Link } from "react-router-dom";

import { VideosCointainer, VideoTitle } from "./Videos.style";

const Videos = ({ videos, loading }) => {
  if (loading) return <h2>Carregando...</h2>;

  return (
    <VideosCointainer>
      {videos.map(({ id, title, image }) => (
        <Link key={id} to={`/video/${id}`}>
          <img src={image} alt="" />
          <VideoTitle>{title}</VideoTitle>
        </Link>
      ))}
    </VideosCointainer>
  );
};

export default Videos;
