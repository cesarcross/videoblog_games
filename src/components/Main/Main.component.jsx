import React, { useState, useEffect } from "react";

import {
  MainContainer,
  Content,
  AdUnitVertical,
  AdUnitRectangle,
  MainText,
  Search,
  SearchBar,
} from "./Main.style";
import Videos from "../Videos/Videos.component";
import Pagination from "../Pagination/Pagination.component";
import { GoSearch } from "react-icons/go";

const Main = ({ videos }) => {
  const [filteredVideos, setFilteredVideos] = useState(videos);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage] = useState(16);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    setFilteredVideos(
      [...videos].filter((video) =>
        video.title.toLowerCase().includes(search.toLowerCase())
      )
    );
    setLoading(false);
    setCurrentPage(1);
  }, [search, videos]);

  // Get current videos
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentFilteredVideos = filteredVideos.slice(
    indexOfFirstVideo,
    indexOfLastVideo
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <MainContainer>
      <MainText>
        Welcome to my games catalog. I have built this to practice React, share
        some cool game trailers and have this structure to customize videoblogs
        with any theme. Hope you enjoy and feel free to contact me for business
        partnerships.
      </MainText>
      <AdUnitRectangle />
      <Search>
        <GoSearch
          style={{
            marginLeft: "1rem",
            position: "absolute",
            color: "white",
          }}
          size="1.5em"
        />
        <SearchBar
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>
      <Content>
        <Videos videos={currentFilteredVideos} loading={loading} />
        <AdUnitVertical />
      </Content>
      <Pagination
        videosPerPage={videosPerPage}
        totalVideos={filteredVideos.length}
        paginate={paginate}
      />
      <AdUnitRectangle />
    </MainContainer>
  );
};

export default Main;
