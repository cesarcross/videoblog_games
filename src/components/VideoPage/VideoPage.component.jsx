import React from "react";

import {
  VideoUnit,
  AdUnitRectangle,
  VideoUnitTitle,
  VideoContainer,
} from "./VideoPage.style";
import { videoLinks } from "../Main/videoLinksArray";

const VideoPage = ({ match }) => {
  const {
    params: { videoId },
  } = match;
  const { title, link } = videoLinks[videoId - 1];

  return (
    <VideoUnit>
      <AdUnitRectangle />
      <VideoUnitTitle>{title}</VideoUnitTitle>
      <VideoContainer>
        <iframe
          title={videoId}
          src={link}
          frameBorder={0}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoContainer>
    </VideoUnit>
  );
};

export default VideoPage;
