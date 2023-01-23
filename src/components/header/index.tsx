import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Search from "../search/search";

function Header() {

  return (
    <div className="header">
      <div className="header__nav">
        <Link to="/">
          <Button>Home</Button>
        </Link>
      </div>
      <Search />
    </div>
  );
}

export default Header;
