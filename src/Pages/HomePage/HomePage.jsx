import FetchedMovies from "../../Components/HomePageComponents/FetchedMovies";
import HPSlider from "../../Components/HomePageComponents/HPSlider";
function HomePage() {
  return (
    <>
      {/* slider component */}
      <HPSlider />
      <FetchedMovies />
    </>
  );
}

export default HomePage;
