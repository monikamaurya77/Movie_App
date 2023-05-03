
const SeeMoreMovies = ({show}) => {
    const showMoreItems =() => {
        show((prevValue) => prevValue + 3)
    }
    
    return(
        <div>
{showMoreItems}
        </div>
    )
}

export default SeeMoreMovies;