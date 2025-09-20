import SearchBar from "../components/SearchBar"
import MovieCard from "../components/MovieCard"
import { Link } from "react-router-dom"
import '../App.css'


function HomePage({ movie, setMovie, fetchMovieData, isLoading, errorMessage, result }){
return (
    <>
    <div className="search-container">
     <SearchBar className = "search-bar" movie={movie} setMovie={setMovie} fetchMovieData={fetchMovieData}/>
      <button className = "search-button" onClick={fetchMovieData}>search</button>
     
    </div>

       
        {isLoading ? (
          <h3>Loading...</h3>
        ) : ( errorMessage.length > 0 ? (<h3 className='error-message'>{errorMessage}</h3>) : 
        result.map(m => (
          <Link to={`/movie/${m.id}`} key={m.id}>
            <div className="movie-title-image">
            <h3>{m.title}</h3>
            <MovieCard image={m.poster_path}/>
            </div>
            </Link>
 ))
    ) }
  </>
)




}
export default HomePage
