import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import classes from "./toprated.module.css";
import { useOutletContext } from "react-router-dom";

function FetchedMovies() {
  const [movies, setMovies] = useState([]);
  const search = useOutletContext();
  let filteredMovies = movies.filter((movie) =>
    movie.original_title.toLowerCase().includes(search.toLowerCase())
  );
  if (!filteredMovies.length) {
    filteredMovies = movies;
  }
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=dd605473a99ad26c5f5a479f5aa6e06f"
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
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
            <Card.Body>
              <Card.Title className={classes.movieTitle}>
                {movie.original_title}
              </Card.Title>
              <Card.Text className={classes.movieDesc}>
                {movie.overview || (
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
