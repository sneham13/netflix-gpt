import { imgcdnUrl } from "../utils/constants"

const MovieCard = ({posterPath}) => {
    return (
        <div className="w-36 md:w-44 shrink-0 cursor-pointer transition-transform duration-200 hover:scale-105">
            <img
                src={imgcdnUrl + posterPath}
                alt="movie poster"
                className="w-full rounded"
            />
        </div>
    )
}

export default MovieCard;