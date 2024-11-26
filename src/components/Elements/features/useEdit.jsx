import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {  useNavigate } from "react-router-dom";
import { editMovie } from "../../../redux/movieReducer";
import { useState } from "react";
import { useSelector } from "react-redux";

const useEdit = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const movies = useSelector((state) => state.movies);
    const existingMovie = movies.find((movie) => movie.id === id)
    const [updateMovie, setUpdateMovie] = useState(name);
    const {name, series, rating} = existingMovie[0];
    const [updateSeries, setUpdateSeries] = useState(series);
    const [updateRating, setUpdateRating] = useState(rating);

    const handleUpdate = (movie) => {
        movie.preventDefault();
        dispatch(editMovie(id, {name: updateMovie, series: updateSeries, rating: updateRating}));
        toast.success("Movie updated successfully!");
    }

    return (
        
        <div className="flex flex-col justify-center items-center h-[100vh]">
            <h2 className="text-3xl font-bold mb-2">Edit Movie</h2>
        <form 
            className="flex flex-col border w-[85%] sm:w-[60%] md:w-[50%] lg:w-[30%] rounded-3xl p-6 shadow hover:shadow-xl backdrop-filter backdrop-blur-sm bg-opacity-30"
            onSubmit={handleUpdate}
            >
            <label htmlFor="">Movie Name:</label>
            <input 
            type="text"
            name="name" 
            id="name" 
            value={updateMovie}
            className="w-full text-sm mt-2 mb-3 border rounded-3xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
            placeholder="Add movie name"
            onChange={e => setUpdateMovie(e.target.value)}
             />
            <label htmlFor="">Series:</label>
            <input 
            type="text"
            name="series" 
            id="series" 
            value={updateSeries}
            className="w-full text-sm mt-2 mb-3 border rounded-3xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"  
            placeholder="Add movie rating"
            onChange={e => setUpdateSeries(e.target.value)}
             />
            <label htmlFor="">Rating:</label>
            <input 
            type="text"
            name="rating" 
            id="rating" 
            value={updateRating}
            className="w-full text-sm mt-2 mb-3 border rounded-3xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
            placeholder="Add movie rating"
            onChange = {e => setUpdateRating(e.target.value)} 
             />

            <button 
                className="bg-blue-600 rounded-3xl w-1/2 mt-3 mb-3 py-2white font-semibold"
                onClick={() =>handleUpdate(movie)}
                >
                Update
            </button>
        </form>
        </div>
    )
}

export default useEdit