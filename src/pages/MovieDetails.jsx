import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function MovieDetails(){
    const [details, setDetails] = useState({});
    // The 'useParams' hook grabs the 'id' from the URL.
  // If the URL is /movie/550, 'id' will be '550'.
    const { id } = useParams();

    useEffect(() => {
        async function fetchDetails(){
            try{
            const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`;
            const { data } = await axios.get(API_URL);
            console.log(data);
            setDetails(data)
            }
            catch(error){
                console.error("An error has occured!", error);
            }
        }
        fetchDetails();
    }, [id])

    return (
        <>
        <h2>{details.title}</h2>
        <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt={`${details.title} poster`}></img>
        <h3>{details.overview}</h3>
</>
    )
}

export default MovieDetails;
