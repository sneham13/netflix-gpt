import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { api_options } from "../utils/constants"

//fetch data and putting it into the store
const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/now_playing", api_options);
        const data = await response.json();
        dispatch(addNowPlayingMovies(data.results));
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, []);
};

export default useNowPlayingMovies;