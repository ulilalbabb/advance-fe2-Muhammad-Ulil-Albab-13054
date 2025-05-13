const NewReleaseCards = (props) => {
    const { image } = props
    return (
        <div>
            <div className="relative w-[220px] lg:w-[320px]">
                <div className="relative overflow-hidden rounded-xl mt-3">
                    <img src={image} className="hover:scale-105 duration-500 transition-transform w-full" alt="new-release-movie" />
                </div>
            </div>
        </div>
    )
}

export default NewReleaseCards