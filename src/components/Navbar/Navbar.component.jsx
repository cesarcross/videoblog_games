import React, { useState } from "react";
import { Link } from "react-router-dom";

import { tags, videoLinks } from "../Main/videoLinksArray";
import {
  NavContainer,
  Ul,
  MobButton,
  HomeButton,
  NavButton,
} from "./Navbar.style";
import { FaAlignRight } from "react-icons/fa";
import navBanner from "../../assets/images/navbanner2.jpg";

const Navbar = ({ setVideos }) => {
  const [toggle, setToggle] = useState(false);
  const filterTakedArray = (tag) =>
    [...videoLinks].reverse().filter((video) => video.tags.includes(tag));

  return (
    <NavContainer>
      <HomeButton>
        <Link onClick={() => setVideos([...videoLinks].reverse())} to="/">
          <img src={navBanner} alt="Logo" />
        </Link>
        <MobButton onClick={() => setToggle(!toggle)}>
          <FaAlignRight />
        </MobButton>
      </HomeButton>
      <Ul toggle={toggle}>
        <NavButton>
          <Link onClick={() => setVideos(filterTakedArray(tags[0]))} to="/">
            Nintendo
          </Link>
        </NavButton>
        <NavButton>
          <Link onClick={() => setVideos(filterTakedArray(tags[1]))} to="/">
            Indies
          </Link>
        </NavButton>
        <NavButton>
          <Link onClick={() => setVideos(filterTakedArray(tags[2]))} to="/">
            Favorites
          </Link>
        </NavButton>
        <NavButton>
          <Link to="/contato">Contact</Link>
        </NavButton>
      </Ul>
    </NavContainer>
  );
};

export default Navbar;
