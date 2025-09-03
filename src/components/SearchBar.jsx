function SearchBar({ movie, setMovie, fetchMovieData }){
return (
    <>
    <input type="text" value={movie} onChange={(event) => {setMovie(event.target.value)}}
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