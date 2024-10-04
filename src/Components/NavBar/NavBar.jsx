import { NavLink, Outlet } from "react-router-dom";
import classes from "./navbar.module.css";
import { useState } from "react";

function NavBar() {
  const [search, setSearch] = useState("");
  function handleSearch(e) {
    setSearch(e.target.value);
  }
  return (
    <>
      <header className={classes.navbarContainer}>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
            <li>
              <NavLink to="/tvshows">TVShows</NavLink>
            </li>
          </ul>
          <form>
            <input
              onChange={handleSearch}
              type="search"
              placeholder="Search movies..."
            />
          </form>
          <ul>
            <li>
              <NavLink to="/up-coming">UpComing</NavLink>
            </li>
            <li>
              <NavLink to="/top-rated">TopRated</NavLink>
            </li>
            <li>
              <NavLink to="/people">People</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet context={search} />
    </>
  );
}

export default NavBar;
