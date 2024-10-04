import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import classes from "./popularpeople.module.css";
import { useOutletContext } from "react-router-dom";

function FetchedMovies() {
  const [movies, setMovies] = useState([]);
  const search = useOutletContext();
  let filteredMovies = movies.filter((movie) =>
    movie.original_name.toLowerCase().includes(search.toLowerCase())
  );
  if (!filteredMovies.length) {
    filteredMovies = movies;
  }
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/person/popular?api_key=dd605473a99ad26c5f5a479f5aa6e06f"
      );
      const data = await response.json();
      setMovies(data.results);
    };
    fetchData();
  }, []);
  return (
    <div className={classes.cardContainer}>
      {filteredMovies.length ? (
        filteredMovies.map((movie) => (
          <Card key={movie.id}>
            <Card.Img
              className={classes.movieCard}
              variant="top"
              src={`https://image.tmdb.org/t/p/w500${movie.profile_path}`}
            />
            <Card.Body>
              <Card.Title className={classes.movieTitle}>
                {movie.original_name}
              </Card.Title>
              <Card.Text className={classes.movieDesc}>
                {movie["known_for"][0].overview || (
                  <b style={{ color: "red" }}>No overview to be shown</b>
                )}
              </Card.Text>
              <Button variant="primary">More details</Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <h1>Is loading...</h1>
      )}
    </div>
  );
}

export default FetchedMovies;
