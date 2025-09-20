function SearchBar({ className, movie, setMovie, fetchMovieData }){
return (
    <>
    <input className="search-bar" type="text" value={movie} onChange={(event) => {setMovie(event.target.value)}}
    onKeyDown={(e) => {
        if(e.key === 'Enter'){
            fetchMovieData();
        }
    }}
    />
    </>
)
}

export default SearchBar;