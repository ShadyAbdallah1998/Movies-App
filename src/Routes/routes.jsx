import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MoviePage from "../Pages/MoviesPage/MoviePage";
import PopularPeople from "../Pages/PopularPeople/PopularPeoplePage";
import NavBar from "../Components/NavBar/NavBar";
import TvShows from "../Pages/TvShows/TvShows";
import ErrorHandling from "../Pages/ErrorHandling/ErrorHandling";
import HomePage from "../Pages/HomePage/HomePage";
import UpComing from "../Pages/UpComingPage/UpComingPage";
import TopRated from "../Pages/TopRatedPage/TopRated";

const elementRoutes = createRoutesFromElements(
  <Route path="/" element={<NavBar />} errorElement={<ErrorHandling />}>
    <Route path="/" element={<HomePage />} />
    <Route path="/up-coming" element={<UpComing />} />
    <Route path="/top-rated" element={<TopRated />} />
    <Route path="/movies" element={<MoviePage />} />
    <Route path="/tvshows" element={<TvShows />} />
    <Route path="/people" element={<PopularPeople />} />
    {/* <Route path="*" element={'this to handle error inside'}/> */}
    <Route />
  </Route>
);
export const routes = createBrowserRouter(elementRoutes);
