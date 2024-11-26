import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { addMovie } from "../../../redux/movieReducer";
import { useDispatch } from "react-redux";

const UseCreate = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [movieName, setMovieName] = useState("");
    const [movieSeries, setMovieSeries] = useState("");
    const [movieRating, setMovieRating] = useState("");
    const [movie, setMovie] = useState({
        name: "",
        series: "",
        rating: "",
    });

    const handleChange = (e) => {
        setMovie({ ...movie,
        [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const movieData = {
            ...movie,
            rating: movie.rating,
            series: movie.series,
        }
        await dispatch(addMovie(movieData));
        toast.success("Movie added successfully!");
        navigate("/admin");
    }
    
    return (
        <div className="flex flex-col justify-center items-center h-[100vh]">
            <h2 className="text-3xl font-bold mb-2">Create</h2>
        <form 
            className="flex flex-col border w-[85%] sm:w-[60%] md:w-[50%] lg:w-[30%] rounded-3xl p-6 shadow hover:shadow-xl backdrop-filter backdrop-blur-sm bg-opacity-30"
            onSubmit={handleSubmit}>
            <label htmlFor="">Movie Name:</label>
            <input 
            type="text"
            name="name" 
            id="name" 
            value={movie.name}
            className="w-full text-sm mt-2 mb-3 border rounded-3xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
            placeholder="Add movie name"
            onChange={handleChange}
             />
            <label htmlFor="">Series:</label>
            <input 
            type="text"
            name="series" 
            id="series" 
            value={movie.series}
            className="w-full text-sm mt-2 mb-3 border rounded-3xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"  
            placeholder="Add movie rating"
            onChange={handleChange}
             />
            <label htmlFor="">Rating:</label>
            <input 
            type="text"
            name="rating" 
            id="rating" 
            value={movie.rating}
            className="w-full text-sm mt-2 mb-3 border rounded-3xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
            placeholder="Add movie rating"
            onChange={handleChange}
             />

            <button className="bg-blue-600 rounded-3xl w-1/2 mt-3 mb-3 py-2 font-semibold">
                Submit
            </button>
        </form>
        </div>
    )
};

export default UseCreate