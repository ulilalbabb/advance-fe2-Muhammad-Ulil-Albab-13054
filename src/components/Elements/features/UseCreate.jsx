const UseCreate = () => {
    return (
        
        <div className="flex flex-col justify-center items-center h-[100vh]">
            <h2 className="text-3xl font-bold mb-2">Create</h2>
        <form action="" className="flex flex-col border w-[85%] sm:w-[60%] md:w-[50%] lg:w-[30%] rounded-3xl p-6 shadow hover:shadow-xl backdrop-filter backdrop-blur-sm bg-opacity-30 ">
            <label htmlFor="">Movie Name:</label>
            <input 
            type="text"
            name="name" 
            id="name" 
            className="w-full text-sm mt-2 mb-3 border rounded-3xl py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
            placeholder="Add movie name"
             />
            <label htmlFor="">Series:</label>
            <input 
            type="text"
            name="series" 
            id="series" 
            className="w-full text-sm mt-2 mb-3 border rounded-3xl py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"  
            placeholder="Add movie rating"
             />
            <label htmlFor="">Rating:</label>
            <input 
            type="text"
            name="rating" 
            id="rating" 
            className="w-full text-sm mt-2 mb-3 border rounded-3xl py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
            placeholder="Add movie rating"
             />

            <button className="bg-blue-600 rounded-3xl w-1/2 mt-3 mb-3 py-2 text-white font-semibold">
                Submit
            </button>
        </form>
        </div>
    )
}

export default UseCreate