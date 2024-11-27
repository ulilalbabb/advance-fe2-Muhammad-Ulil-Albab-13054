import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, deleteMovie, updateMovie, addMovie } from "../redux/movieReducer";
import { toast } from "react-toastify"; 

const AdminPage = () => {
  const dispatch = useDispatch();
  const { movies, loading } = useSelector((state) => state.movies);
  const [editMovie, setEditMovie] = useState(null);
  const [formMovie, setFormMovie] = useState({
    name: "",
    series: "",
    rating: "",
  });

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(addMovie(formMovie));
    setFormMovie({
      name: "",
      series: "",
      rating: "",
    });
    toast.success("Movie added successfully!");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateMovie({ id: editMovie.id, movie: formMovie }));
    setEditMovie(null);
    setFormMovie({
      name: "",
      series: "",
      rating: "",
    });
    toast.success("Movie updated successfully!");
  };

  const handleEdit = (movie) => {
    setEditMovie(movie);
    setFormMovie({
      name: movie.name,
      series: movie.series,
      rating: movie.rating,
    });
  };

  const handleDelete = (movie) => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      dispatch(deleteMovie(movie.id));
    }
    toast.success("Movie deleted successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Chill Movie</h1>
      <form 
      className="w-90 lg:w-1/2 mx-auto"
      onSubmit={editMovie ? handleUpdate : handleCreate}>
        <label>Movie Name:</label>
        <input
          type="text"
          placeholder="Name"
          className="border mb-3 rounded-3xl w-full py-2 px-3  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={formMovie.name}
          onChange={(e) => setFormMovie({ ...formMovie, name: e.target.value })}
        />
        <label>Series:</label>
        <input
          type="text"
          placeholder="Series"
          className="border mb-3 rounded-3xl w-full py-2 px-3  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={formMovie.series}
          onChange={(e) => setFormMovie({ ...formMovie, series: e.target.value })}
        />
        <label>Rating:</label>
        <input
          type="text"
          placeholder="Rating"
          className="border mb-3 rounded-3xl w-full py-2 px-3  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={formMovie.rating}
          onChange={(e) => setFormMovie({ ...formMovie, rating: e.target.value })}
        />
        <button 
        className="bg-blue-600 text-white rounded-3xl w-1/2 mt-3 mb-5 py-2 font-semibold"
        type="submit">{editMovie ? "Update Movie" : "Create Movie"}</button>
      </form>

      <table className="min-w-full border border-gray-300 shadow-md">
        <thead>
          <tr className="bg-green-800 text-white">
            <th className="border border-gray-300 px-2 py-2 text-sm">ID</th>
            <th className="border border-gray-300 px-2 py-2 text-sm">Name</th>
            <th className="border border-gray-300 px-2 py-2 text-sm">Series</th>
            <th className="border border-gray-300 px-2 py-2 text-sm">Rating</th>
            <th className="border border-gray-300 px-2 py-2 text-sm">Action</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id} className="odd:bg-white even:bg-gray-100">
              <td className="border border-gray-300 text-center text-sm px-2 py-2">{movie.id}</td>
              <td className="border border-gray-300 text-center text-sm px-2 py-2">{movie.name}</td>
              <td className="border border-gray-300 text-center text-sm px-2 py-2">{movie.series}</td>
              <td className="border border-gray-300 text-center text-sm px-2 py-2">{movie.rating}</td>
              <td className="border border-gray-300 text-center text-sm px-2 py-2">
                <div className="flex lg:gap-2 justify-center">
                <button 
                  onClick={() => handleEdit(movie)}
                  className="hover:bg-green-700 rounded-3xl mt-2 mb-2 py-2 px-2 font-semibold"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-4 lg:size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </button>
                <button 
                  onClick={() => handleDelete(movie)}
                  className="hover:bg-red-600 rounded-3xl mt-2 mb-2 py-2 px-2 font-semibold"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-4 lg:size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </button> 
                </div>
              </td>
            </tr>
          ))}
          {loading && <p>Loading...</p>}
        </tbody>
      </table>
    </div>
  )
}

export default AdminPage