import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";

const useTopRatedMovies = () => {
  //Fetch data from API and update store
  const dispatch = useDispatch();

  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTION
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    if (!topRatedMovies) getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
