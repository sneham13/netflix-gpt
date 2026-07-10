import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/moviesSlice';
import { api_options } from "../utils/constants"

//fetch data and putting it into the store
const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/popular", api_options);
        const data = await response.json();
        dispatch(addPopularMovies(data.results));
    };

    useEffect(() => {
        getPopularMovies();
    }, []);
};

export default usePopularMovies;