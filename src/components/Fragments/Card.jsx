const Card = (props) => {
    const { name, image, rating } = props
        return (
            <div>
                <div className="relative w-[220px] lg:w-[320px]">
                    <div className="relative overflow-hidden inline-block rounded-xl mt-3">
                        <img src={image} className="w-full hover:scale-110 duration-500 transition-transform" alt="image-movies" />
                        <div className="absolute flex justify-between left-2 lg:left-4 lg:right-4 right-2 bottom-2">
                            <p className="text-md lg:text-xl text-white">{name}</p>
                            <p className="text-md lg:text-xl text-white">&#9733;{rating}</p>
                        </div>
                    </div>
                </div>
            </div>
);
}; 

export default Card